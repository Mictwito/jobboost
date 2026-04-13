import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { jobs } from '@/data/jobs';
import ApplyForm from './ApplyForm';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: 'הגשת מועמדות | JobBoost' };
  return { title: `הגשת מועמדות — ${job.title} | JobBoost` };
}

export default async function ApplyPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug && j.isActive);
  if (!job) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1 items-center">
        <Link href="/jobs" className="hover:text-blue-600 transition-colors">משרות</Link>
        <span>/</span>
        <Link href={`/jobs/${job.slug}`} className="hover:text-blue-600 transition-colors">
          {job.title}
        </Link>
        <span>/</span>
        <span className="text-gray-600">הגשת מועמדות</span>
      </nav>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">הגשת מועמדות</h1>
        <p className="text-gray-500 text-sm mb-8">
          {job.title} — {job.company} — {job.location}
        </p>
        <ApplyForm jobTitle={job.title} jobSlug={job.slug} />
      </div>
    </div>
  );
}
