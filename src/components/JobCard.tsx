import Link from 'next/link';
import type { Job } from '@/data/jobs';

const typeColors: Record<string, string> = {
  'משרה מלאה': 'bg-green-100 text-green-700',
  'משרה חלקית': 'bg-yellow-100 text-yellow-700',
  'פרילנס': 'bg-purple-100 text-purple-700',
  'היברידי': 'bg-blue-100 text-blue-700',
};

export default function JobCard({ job }: { job: Job }) {
  const badgeClass = typeColors[job.type] ?? 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeClass}`}>
          {job.type}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(job.postedAt).toLocaleDateString('he-IL')}
        </span>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-0.5">{job.company}</p>
      <p className="text-sm text-gray-400 mb-3">
        <span className="ml-1">📍</span>
        {job.location}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 flex-1">
        {job.description}
      </p>

      <Link
        href={`/jobs/${job.slug}`}
        className="mt-auto inline-block text-center bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        בדוק התאמה למשרה
      </Link>
    </div>
  );
}
