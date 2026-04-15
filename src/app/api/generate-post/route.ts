import { NextResponse } from 'next/server';
import { getSupabase, type Post } from '@/lib/supabase';

const GEMINI_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';

const PROMPT = `כתוב פוסט בלוג בעברית על חיפוש עבודה בהייטק.

דרישות:
- 1000-1400 מילים
- פורמט HTML עם תגיות h1, h2, h3, p
- כתיבה אנושית לחלוטין — ללא ביטויי AI כמו "בעולם של היום", "כיום יותר מתמיד", "חשוב לציין"
- אישיות אמיתית, דוגמאות מהחיים, טון של מומחה שמדבר עם חבר
- תוכן: טיפים מעשיים בלבד — קורות חיים, ראיונות, LinkedIn
- עצות שניתן לפעול לפיהן מיד

החזר JSON בלבד (ללא markdown, ללא \`\`\`json) במבנה הבא:
{
  "title": "כותרת חזקה בעברית עם מילות מפתח",
  "slug": "unique-english-slug-with-dashes",
  "meta_description": "תיאור מטא בעברית עד 160 תווים",
  "content": "<h1>...</h1><h2>...</h2><p>...</p>"
}`;

export async function GET(request: Request) {
  // 1. Security — validate secret
  const { searchParams } = new URL(request.url);
  if (searchParams.get('secret') !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = getSupabase();

    // 2. Call Gemini API
    const geminiRes = await fetch(
      `${GEMINI_ENDPOINT}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: PROMPT }] }],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      return NextResponse.json({ error: 'Gemini API error', detail: err }, { status: 500 });
    }

    const geminiData = await geminiRes.json();
    const rawText: string =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    if (!rawText) {
      return NextResponse.json({ error: 'Empty Gemini response' }, { status: 500 });
    }

    // 3. Parse JSON from Gemini response (strip accidental markdown fences)
    const cleaned = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
    let parsed: {
      title: string;
      slug: string;
      meta_description: string;
      content: string;
    };

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      return NextResponse.json({ error: 'Failed to parse Gemini JSON', raw: rawText.slice(0, 500) }, { status: 500 });
    }

    const { title, meta_description, content } = parsed;
    let slug = parsed.slug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    // 4. Ensure uniqueness — append timestamp if slug exists
    const { data: existing } = await supabase
      .from('posts')
      .select('slug')
      .eq('slug', slug)
      .maybeSingle();

    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    // 5. Duplicate title check — reject if similar title exists
    const { data: allTitles } = await supabase
      .from('posts')
      .select('title')
      .order('created_at', { ascending: false })
      .limit(50);

    const titleWords = title.split(' ').slice(0, 5).join(' ');
    const isDuplicate = (allTitles ?? []).some((p: Pick<Post, 'title'>) =>
      p.title.includes(titleWords)
    );

    if (isDuplicate) {
      return NextResponse.json(
        { error: 'Similar title already exists', title },
        { status: 409 }
      );
    }

    // 6. Internal linking — fetch 3 recent posts
    const { data: recentPosts } = await supabase
      .from('posts')
      .select('slug, title')
      .order('created_at', { ascending: false })
      .limit(3);

    let finalContent = content;
    if (recentPosts && recentPosts.length > 0) {
      const links = (recentPosts as Pick<Post, 'slug' | 'title'>[])
        .map((p) => `<li><a href="/articles/${p.slug}">${p.title}</a></li>`)
        .join('\n');
      finalContent += `\n<h2>מאמרים נוספים</h2>\n<ul>\n${links}\n</ul>`;
    }

    // 7. Insert into Supabase
    const { data: inserted, error: insertError } = await supabase
      .from('posts')
      .insert({
        title,
        slug,
        content: finalContent,
        meta_description,
      })
      .select('slug, title')
      .single();

    if (insertError) {
      return NextResponse.json({ error: 'Supabase insert failed', detail: insertError.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      slug: inserted.slug,
      title: inserted.title,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
