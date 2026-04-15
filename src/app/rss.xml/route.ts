import { getSupabase, type Post } from '@/lib/supabase';
import { articles } from '@/data/articles';

const BASE_URL = 'https://jobboost.co.il';
const SITE_TITLE = 'JobBoost — מאמרים לחיפוש עבודה בהייטק';
const SITE_DESC = 'טיפים מעשיים לחיפוש עבודה, קורות חיים, ראיונות ו-LinkedIn';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function getSupabasePosts(): Promise<Post[]> {
  try {
    const { data } = await getSupabase()
      .from('posts')
      .select('id, slug, title, meta_description, content, created_at')
      .order('created_at', { ascending: false })
      .limit(20);
    return data ?? [];
  } catch {
    return [];
  }
}

export async function GET() {
  const supabasePosts = await getSupabasePosts();

  // Combine and sort all items by date (newest first)
  const allItems = [
    ...supabasePosts.map((p) => ({
      title: p.title,
      slug: p.slug,
      description: p.meta_description,
      pubDate: new Date(p.created_at),
      content: p.content,
    })),
    ...articles.map((a) => ({
      title: a.title,
      slug: a.slug,
      description: a.excerpt,
      pubDate: new Date(a.publishedAt),
      content: a.content,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  const items = allItems
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${BASE_URL}/articles/${item.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/articles/${item.slug}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${BASE_URL}</link>
    <description>${escapeXml(SITE_DESC)}</description>
    <language>he</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
