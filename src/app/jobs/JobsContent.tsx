'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import type { Job } from '@/data/jobs';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';

export default function JobsContent({ jobs }: { jobs: Job[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const q = searchParams.get('q') ?? '';
  const location = searchParams.get('location') ?? '';

  const locations = [...new Set(jobs.map((j) => j.location))].sort();

  const filtered = jobs.filter((job) => {
    if (!job.isActive) return false;
    const sq = q.toLowerCase();
    const matchesQuery =
      !sq ||
      job.title.toLowerCase().includes(sq) ||
      job.category.toLowerCase().includes(sq) ||
      job.company.toLowerCase().includes(sq) ||
      job.location.toLowerCase().includes(sq);
    const matchesLocation = !location || job.location === location;
    return matchesQuery && matchesLocation;
  });

  const handleLocationChange = (loc: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (loc) params.set('location', loc);
    else params.delete('location');
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">משרות עבודה</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchBar defaultValue={q} />
        </div>
        <select
          value={location}
          onChange={(e) => handleLocationChange(e.target.value)}
          className="px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">כל המיקומים</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 mb-6">
        {filtered.length > 0 && `נמצאו ${filtered.length} משרות`}
        {(q || location) && (
          <button
            onClick={() => router.push('/jobs')}
            className="mr-3 text-blue-600 hover:underline"
          >
            נקה סינון
          </button>
        )}
      </p>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">לא נמצאו משרות</h2>
          <p className="text-gray-500 mb-6">נסה מילות חיפוש שונות או הסר את הסינון</p>
          <button
            onClick={() => router.push('/jobs')}
            className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            הצג את כל המשרות
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
