import Link from 'next/link';
import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';

export const allCategories = [
  { label: 'Frontend', href: '/jobs/frontend' },
  { label: 'Backend', href: '/jobs/backend' },
  { label: 'Fullstack', href: '/jobs/fullstack' },
  { label: 'QA', href: '/jobs/qa' },
  { label: 'DevOps', href: '/jobs/devops' },
  { label: 'דאטה', href: '/jobs/data' },
  { label: 'סייבר', href: '/jobs/cyber-security' },
  { label: 'אבטחת מידע', href: '/jobs/information-security' },
  { label: 'IT Support', href: '/jobs/it-support' },
  { label: 'Help Desk', href: '/jobs/help-desk' },
  { label: 'System Admin', href: '/jobs/system-admin' },
  { label: 'רשתות', href: '/jobs/network-engineer' },
  { label: 'AI', href: '/jobs/ai' },
  { label: 'סטארטאפים', href: '/jobs/startups' },
  { label: 'Remote', href: '/jobs/remote' },
];

type Props = {
  title: string;
  subtitle: string;
  description: string;
  extraContent?: React.ReactNode;
  keywords: string[];
  filterFn: (title: string, description: string) => boolean;
  currentHref: string;
};

export default function CategoryPageLayout({
  title,
  subtitle,
  description,
  extraContent,
  filterFn,
  currentHref,
}: Props) {
  const filtered = jobs.filter(
    (j) => j.isActive && filterFn(j.title.toLowerCase(), j.description.toLowerCase())
  );
  const displayJobs = filtered.length >= 3 ? filtered : jobs.filter((j) => j.isActive).slice(0, 12);
  const otherCategories = allCategories.filter((c) => c.href !== currentHref);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex gap-1 items-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">דף הבית</Link>
        <span>/</span>
        <Link href="/jobs" className="hover:text-blue-600 transition-colors">משרות</Link>
        <span>/</span>
        <span className="text-gray-600">{subtitle}</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl">{description}</p>
      </div>

      {/* Extra SEO content */}
      {extraContent && (
        <div className="bg-gray-50 rounded-xl p-6 mb-10 text-sm text-gray-700 leading-relaxed space-y-3">
          {extraContent}
        </div>
      )}

      {/* Jobs grid */}
      <section className="mb-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {filtered.length >= 3 ? `${filtered.length} משרות בתחום` : 'משרות פתוחות'}
          </h2>
          <Link href="/jobs" className="text-sm text-blue-600 hover:underline">
            כל המשרות ←
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayJobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-gray-100 pt-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">תחומים נוספים</h2>
        <div className="flex flex-wrap gap-2">
          {otherCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="text-sm bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-600 px-4 py-2 rounded-full transition-colors"
            >
              משרות {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-2">לא מצאת את מה שחיפשת?</h2>
        <p className="text-blue-100 text-sm mb-6">חפש בכל המשרות שלנו או הרשם לעדכונים</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/jobs"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            כל המשרות
          </Link>
          <Link
            href="/articles"
            className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors text-sm"
          >
            מדריכי קריירה
          </Link>
        </div>
      </div>
    </div>
  );
}
