import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { jobs } from '@/data/jobs';
import MatchScoreWidget from '@/components/MatchScoreWidget';
import AdUnit from '@/components/AdUnit';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: 'משרה לא נמצאה | JobBoost' };
  return {
    title: `${job.title} — ${job.location} | JobBoost`,
    description: job.description.slice(0, 160),
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug && j.isActive);
  if (!job) notFound();

  const relatedJobs = jobs
    .filter((j) => j.isActive && j.slug !== job.slug && j.location === job.location)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description.replace(/\n/g, ' ').slice(0, 500),
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IL',
      },
    },
    datePosted: '2026-04-14',
    employmentType: 'FULL_TIME',
    directApply: true,
    url: `https://jobboost.co.il/jobs/${job.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <span>🏢 {job.company}</span>
            <span>📍 {job.location}</span>
          </div>
        </div>

        {/* Description */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
        </section>

        {/* Match Score Widget */}
        <div className="mb-8">
          <MatchScoreWidget jobTitle={job.title} />
        </div>

        {/* Ad before CTA */}
        <AdUnit slot="7391820546" />

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
          <h2 className="text-xl font-bold text-gray-900 mb-6">משרות נוספות באזור</h2>
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
    </>
  );
}
