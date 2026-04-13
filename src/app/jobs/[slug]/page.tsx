import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { jobs } from '@/data/jobs';
import MatchScoreWidget from '@/components/MatchScoreWidget';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: 'משרה לא נמצאה | JobBoost' };
  return {
    title: `${job.title} — ${job.location} | JobBoost`,
    description: job.description,
  };
}

const typeColors: Record<string, string> = {
  'משרה מלאה': 'bg-green-100 text-green-700',
  'משרה חלקית': 'bg-yellow-100 text-yellow-700',
  'פרילנס': 'bg-purple-100 text-purple-700',
  'היברידי': 'bg-blue-100 text-blue-700',
};

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug && j.isActive);
  if (!job) notFound();

  const badgeClass = typeColors[job.type] ?? 'bg-gray-100 text-gray-700';
  const relatedJobs = jobs
    .filter((j) => j.isActive && j.slug !== job.slug && j.category === job.category)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1 items-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">דף הבית</Link>
        <span>/</span>
        <Link href="/jobs" className="hover:text-blue-600 transition-colors">משרות</Link>
        <span>/</span>
        <span className="text-gray-600">{job.title}</span>
      </nav>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass}`}>
              {job.type}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              {job.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <span>🏢 {job.company}</span>
            <span>📍 {job.location}</span>
            <span>📅 {new Date(job.postedAt).toLocaleDateString('he-IL')}</span>
          </div>
        </div>

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">תיאור המשרה</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </section>

        {/* Requirements */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">דרישות התפקיד</h2>
          <ul className="space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-blue-500 mt-0.5 shrink-0">✓</span>
                {req}
              </li>
            ))}
          </ul>
        </section>

        {/* Who is it for — only shown if populated */}
        {job.whoIsItFor && (
          <section className="mb-6 bg-blue-50 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2">למי המשרה מתאימה</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{job.whoIsItFor}</p>
          </section>
        )}

        {/* Why apply */}
        {job.whyApply && (
          <section className="mb-6 bg-green-50 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2">למה כדאי להגיש</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{job.whyApply}</p>
          </section>
        )}

        {/* Tips */}
        {job.tips && (
          <section className="mb-6 bg-amber-50 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2">טיפים להתבלט</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{job.tips}</p>
          </section>
        )}

        {/* How to get hired */}
        {job.howToGetHired && (
          <section className="mb-6 bg-indigo-50 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2">איך להתקבל למשרה הזו</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{job.howToGetHired}</p>
          </section>
        )}

        {/* What recruiter looks for */}
        {job.whatRecruiterLooksFor && (
          <section className="mb-8 bg-rose-50 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2">מה המגייס באמת מחפש</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{job.whatRecruiterLooksFor}</p>
          </section>
        )}

        {/* Match Score Widget */}
        <div className="mb-8">
          <MatchScoreWidget jobTitle={job.title} />
        </div>

        {/* CTA */}
        <div id="apply" className="border-t border-gray-100 pt-8 text-center">
          <Link
            href={`/apply/${job.slug}`}
            className="inline-block bg-blue-600 text-white text-base font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            הגש מועמדות עכשיו
          </Link>
          <p className="text-xs text-gray-400 mt-3">תהליך הגשה מהיר — פחות מדקה</p>
        </div>
      </div>

      {/* Related jobs */}
      {relatedJobs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">משרות נוספות בתחום</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedJobs.map((related) => (
              <Link
                key={related.slug}
                href={`/jobs/${related.slug}`}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <p className="font-semibold text-gray-900 text-sm mb-1">{related.title}</p>
                <p className="text-xs text-gray-400">{related.location}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
