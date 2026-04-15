import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import { getSupabase, type Post } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'מאמרים לחיפוש עבודה | JobBoost',
  description:
    'טיפים מעשיים לכתיבת קורות חיים, ראיונות עבודה, משא ומתן על שכר ועולם העבודה בעידן AI.',
};

async function getSupabasePosts(): Promise<Post[]> {
  try {
    const { data } = await getSupabase()
      .from('posts')
      .select('id, slug, title, content, meta_description, created_at')
      .order('created_at', { ascending: false });
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function ArticlesPage() {
  const posts = await getSupabasePosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">מאמרים</h1>
      <p className="text-gray-500 mb-10">טיפים מעשיים לחיפוש עבודה ופיתוח קריירה</p>

      {/* AI-generated posts from Supabase */}
      {posts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-5">מאמרים חדשים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all flex flex-col"
              >
                <span className="self-start text-xs font-medium px-2.5 py-1 rounded-full mb-3 bg-blue-50 text-blue-700">
                  חיפוש עבודה
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {post.meta_description}
                </p>
                <span className="mt-auto text-sm font-medium text-blue-600">
                  קרא עוד ←
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Static articles */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-5">מדריכי קריירה</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
