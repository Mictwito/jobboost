import Link from 'next/link';
import type { Metadata } from 'next';
import SearchBar from '@/components/SearchBar';
import JobCard from '@/components/JobCard';
import ArticleCard from '@/components/ArticleCard';
import EmailCapture from '@/components/EmailCapture';
import { jobs } from '@/data/jobs';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'דרושים הייטק בישראל | JobBoost',
  description: 'מצא משרות הייטק בפיתוח, QA, דאטה, DevOps וסייבר. משרות עדכניות מחברות מובילות בישראל.',
  keywords: 'דרושים הייטק, משרות הייטק, דרושים פיתוח תוכנה, משרות QA, דרושים DevOps, משרות סייבר, קריירה בהייטק',
};

export default function HomePage() {
  const featuredJobs = jobs.filter((j) => j.isActive).slice(0, 4);
  const featuredArticles = articles.slice(0, 6);
  const activeCount = jobs.filter((j) => j.isActive).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            דרושים הייטק בישראל – משרות פיתוח, QA, דאטה וסייבר
          </h1>
          <p className="text-lg text-blue-100 mb-10">
            פלטפורמת הקריירה החכמה שעוזרת לך להתקבל לעבודה הבאה שלך
          </p>
          <div className="flex justify-center">
            <SearchBar />
          </div>
          <p className="text-sm text-blue-200 mt-4">{activeCount} משרות פתוחות עכשיו</p>
        </div>
      </section>

      {/* SEO Section */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            דרושים הייטק בישראל – כל המשרות במקום אחד
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            באתר JobBoost תמצאו מגוון רחב של משרות הייטק בתחומים כמו פיתוח תוכנה, QA, Data, DevOps וסייבר.
            המשרות מגיעות מחברות טכנולוגיה מובילות בישראל ומיועדות לכל רמות הניסיון — מ-Junior ועד Senior.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'משרות Frontend', href: '/jobs/frontend' },
              { label: 'משרות Backend', href: '/jobs/backend' },
              { label: 'משרות Fullstack', href: '/jobs/fullstack' },
              { label: 'משרות QA', href: '/jobs/qa' },
              { label: 'משרות DevOps', href: '/jobs/devops' },
              { label: 'משרות סייבר', href: '/jobs/cyber-security' },
              { label: 'משרות דאטה', href: '/jobs/data' },
              { label: 'משרות Help Desk', href: '/jobs/help-desk' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="text-xs bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Strip */}
      <section className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-blue-400 font-medium uppercase tracking-wider mb-1">כלי AI חינמיים</p>
              <h2 className="text-xl font-bold">בדוק כמה אתה מתאים למשרה — תוך 10 שניות</h2>
              <p className="text-sm text-gray-400 mt-1">שיפור קורות חיים • מחשבון שכר • סוכן קריירה</p>
            </div>
            <Link
              href="/tools"
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              נסה את הכלים →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">משרות הייטק מובחרות</h2>
          <Link href="/jobs" className="text-sm text-blue-600 font-medium hover:underline">
            כל המשרות ←
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredJobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50 border-y border-gray-100 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">מדריכי קריירה בהייטק</h2>
              <p className="text-sm text-gray-500 mt-1">כל מה שצריך לדעת כדי להתקבל לעבודה בהייטק</p>
            </div>
            <Link href="/articles" className="text-sm text-blue-600 font-medium hover:underline">
              כל המאמרים ←
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">למה JobBoost?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: '🎯',
                title: 'משרות הייטק ממוקדות',
                text: 'פיתוח, QA, DevOps, דאטה וסייבר — משרות עדכניות מחברות טכנולוגיה מובילות בישראל.',
              },
              {
                icon: '🤖',
                title: 'כלי AI חכמים',
                text: 'שיפור קורות חיים, בדיקת התאמה למשרה, מחשבון שכר וסוכן קריירה — בחינם.',
              },
              {
                icon: '✍️',
                title: 'תוכן שמנצח',
                text: 'מאמרים מעשיים על קורות חיים, ראיונות ושוק ההייטק — שיעזרו לך להתבלט.',
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-blue-600 py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">קבל משרות הייטק חדשות ישירות למייל</h2>
          <p className="text-blue-100 text-sm mb-8">
            הרשם ונעדכן אותך כשיהיו משרות חדשות בתחומים שמעניינים אותך
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
