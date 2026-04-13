import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: 'מאמר לא נמצא | JobBoost' };
  return {
    title: `${article.title} | JobBoost`,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  'קורות חיים': 'bg-blue-100 text-blue-700',
  'ראיון עבודה': 'bg-green-100 text-green-700',
  'עולם העבודה': 'bg-purple-100 text-purple-700',
  'שכר': 'bg-orange-100 text-orange-700',
};

function renderContent(content: string) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return (
        <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    }
    if (!line.trim()) return <div key={i} className="h-2" />;
    if (line.startsWith('- ')) {
      const text = line.slice(2);
      return (
        <li key={i} className="text-gray-700 text-sm leading-relaxed my-1 mr-4 list-disc">
          {text}
        </li>
      );
    }
    // Render inline bold (**text**)
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={j}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
    return (
      <p key={i} className="text-gray-700 text-sm leading-relaxed">
        {rendered}
      </p>
    );
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const badgeClass = categoryColors[article.category] ?? 'bg-gray-100 text-gray-700';
  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1 items-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">דף הבית</Link>
        <span>/</span>
        <Link href="/articles" className="hover:text-blue-600 transition-colors">מאמרים</Link>
        <span>/</span>
        <span className="text-gray-600">{article.title}</span>
      </nav>

      <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="mb-6">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass}`}>
            {article.category}
          </span>
          <p className="text-xs text-gray-400 mt-3">
            {new Date(article.publishedAt).toLocaleDateString('he-IL')}
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
          {article.title}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
          {article.excerpt}
        </p>

        <div className="space-y-1">{renderContent(article.content)}</div>
      </article>

      {/* CTA */}
      <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-2">מוכן לצאת לחיפוש עבודה?</h2>
        <p className="text-blue-100 text-sm mb-6">
          גלה את המשרות המובחרות שמחכות לך עכשיו
        </p>
        <Link
          href="/jobs"
          className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
        >
          לכל המשרות
        </Link>
      </div>

      {/* Other articles */}
      {otherArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">מאמרים נוספים</h2>
          <div className="space-y-3">
            {otherArticles.map((a) => (
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
    </div>
  );
}
