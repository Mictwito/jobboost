import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'מאמרים לחיפוש עבודה | JobBoost',
  description:
    'טיפים מעשיים לכתיבת קורות חיים, ראיונות עבודה, משא ומתן על שכר ועולם העבודה בעידן AI.',
};

export default function ArticlesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">מאמרים</h1>
      <p className="text-gray-500 mb-10">טיפים מעשיים לחיפוש עבודה ופיתוח קריירה</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
