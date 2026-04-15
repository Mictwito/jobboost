import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import { getSupabase, type Post } from '@/lib/supabase';

type Props = { params: Promise<{ slug: string }> };

async function getPost(slug: string): Promise<Post | null> {
  try {
    const { data } = await getSupabase()
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();
    return data;
  } catch {
    return null;
  }
}

async function getRelatedPosts(currentSlug: string): Promise<Pick<Post, 'slug' | 'title'>[]> {
  try {
    const { data } = await getSupabase()
      .from('posts')
      .select('slug, title')
      .neq('slug', currentSlug)
      .order('created_at', { ascending: false })
      .limit(3);
    return data ?? [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Check static articles first
  const staticArticle = articles.find((a) => a.slug === slug);
  if (staticArticle) {
    return {
      title: `${staticArticle.title} | JobBoost`,
      description: staticArticle.excerpt,
    };
  }

  // Check Supabase
  const post = await getPost(slug);
  if (!post) return { title: 'מאמר לא נמצא | JobBoost' };
  return {
    title: `${post.title} | JobBoost`,
    description: post.meta_description,
  };
}

const categoryColors: Record<string, string> = {
  'קורות חיים': 'bg-blue-100 text-blue-700',
  'ראיון עבודה': 'bg-green-100 text-green-700',
  'עולם העבודה': 'bg-purple-100 text-purple-700',
  'שכר': 'bg-orange-100 text-orange-700',
};

function renderMarkdown(content: string) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## '))
      return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>;
    if (!line.trim()) return <div key={i} className="h-2" />;
    if (line.startsWith('- '))
      return <li key={i} className="text-gray-700 text-sm leading-relaxed my-1 mr-4 list-disc">{line.slice(2)}</li>;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-700 text-sm leading-relaxed">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j}>{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    );
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  // 1. Check static articles
  const staticArticle = articles.find((a) => a.slug === slug);
  if (staticArticle) {
    const badgeClass = categoryColors[staticArticle.category] ?? 'bg-gray-100 text-gray-700';
    const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">דף הבית</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600 transition-colors">מאמרים</Link>
          <span>/</span>
          <span className="text-gray-600">{staticArticle.title}</span>
        </nav>

        <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="mb-6">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass}`}>
              {staticArticle.category}
            </span>
            <p className="text-xs text-gray-400 mt-3">
              {new Date(staticArticle.publishedAt).toLocaleDateString('he-IL')}
            </p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            {staticArticle.title}
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
            {staticArticle.excerpt}
          </p>
          <div className="space-y-1">{renderMarkdown(staticArticle.content)}</div>
        </article>

        <RelatedAndCTA slug={slug} staticOthers={otherArticles} />
      </div>
    );
  }

  // 2. Check Supabase
  const [post, relatedPosts] = await Promise.all([
    getPost(slug),
    getRelatedPosts(slug),
  ]);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1 items-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">דף הבית</Link>
        <span>/</span>
        <Link href="/articles" className="hover:text-blue-600 transition-colors">מאמרים</Link>
        <span>/</span>
        <span className="text-gray-600">{post.title}</span>
      </nav>

      <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="mb-6">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
            חיפוש עבודה
          </span>
          <p className="text-xs text-gray-400 mt-3">
            {new Date(post.created_at).toLocaleDateString('he-IL')}
          </p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
          {post.title}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
          {post.meta_description}
        </p>
        {/* Render HTML content from Gemini */}
        <div
          className="prose prose-sm max-w-none text-gray-700 leading-relaxed
            [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-8 [&_h1]:mb-4
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:mr-4 [&_li]:list-disc [&_li]:mb-1
            [&_a]:text-blue-600 [&_a]:hover:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">מאמרים נוספים</h2>
          <div className="space-y-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/articles/${p.slug}`}
                className="flex justify-between items-center bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <span className="text-xs text-gray-400">חיפוש עבודה</span>
                <span className="font-medium text-gray-900 text-sm">{p.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CallToAction />
    </div>
  );
}

function RelatedAndCTA({
  slug,
  staticOthers,
}: {
  slug: string;
  staticOthers: typeof articles;
}) {
  return (
    <>
      <CallToAction />
      {staticOthers.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">מאמרים נוספים</h2>
          <div className="space-y-3">
            {staticOthers.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="flex justify-between items-center bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <span className="text-xs text-gray-400">{a.category}</span>
                <span className="font-medium text-gray-900 text-sm">{a.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function CallToAction() {
  return (
    <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white text-center">
      <h2 className="text-xl font-bold mb-2">מוכן לצאת לחיפוש עבודה?</h2>
      <p className="text-blue-100 text-sm mb-6">גלה את המשרות המובחרות שמחכות לך עכשיו</p>
      <Link
        href="/jobs"
        className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
      >
        לכל המשרות
      </Link>
    </div>
  );
}
