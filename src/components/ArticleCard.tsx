import Link from 'next/link';
import type { Article } from '@/data/articles';

const categoryColors: Record<string, string> = {
  'קורות חיים': 'bg-blue-100 text-blue-700',
  'ראיון עבודה': 'bg-green-100 text-green-700',
  'עולם העבודה': 'bg-purple-100 text-purple-700',
  'שכר': 'bg-orange-100 text-orange-700',
};

export default function ArticleCard({ article }: { article: Article }) {
  const badgeClass = categoryColors[article.category] ?? 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all flex flex-col">
      <span className={`self-start text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${badgeClass}`}>
        {article.category}
      </span>
      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{article.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
        {article.excerpt}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-auto text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
      >
        קרא עוד ←
      </Link>
    </div>
  );
}
