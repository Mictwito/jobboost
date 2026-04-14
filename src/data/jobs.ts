export type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  description: string;
  isActive: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
export const jobs: Job[] = require('./jobs.json') as Job[];
