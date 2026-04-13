import { Suspense } from 'react';
import type { Metadata } from 'next';
import { jobs } from '@/data/jobs';
import JobsContent from './JobsContent';

export const metadata: Metadata = {
  title: 'משרות עבודה | JobBoost',
  description: 'כל המשרות הפתוחות — פיתוח, DevOps, QA, Data, סייבר ועוד. חפש וסנן לפי תחום ומיקום.',
};

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400 text-sm">טוען משרות...</div>}>
      <JobsContent jobs={jobs} />
    </Suspense>
  );
}
