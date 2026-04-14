import { Suspense } from 'react';
import type { Metadata } from 'next';
import { jobs } from '@/data/jobs';
import JobsContent from './JobsContent';

export const metadata: Metadata = {
  title: 'משרות הייטק בישראל – פיתוח, QA, DevOps ודאטה | JobBoost',
  description: 'כל משרות הייטק הפתוחות בישראל — פיתוח תוכנה, QA, DevOps, Data Science וסייבר. חפש לפי תחום ומיקום.',
  keywords: 'דרושים הייטק, משרות פיתוח, דרושים QA, משרות DevOps, דרושים דאטה, משרות סייבר בישראל',
};

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400 text-sm">טוען משרות...</div>}>
      <JobsContent jobs={jobs} />
    </Suspense>
  );
}
