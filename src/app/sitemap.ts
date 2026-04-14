import type { MetadataRoute } from 'next';
import { jobs } from '@/data/jobs';
import { articles } from '@/data/articles';

const BASE_URL = 'https://jobboost.co.il';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/jobs`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/articles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = [
    'frontend', 'backend', 'fullstack', 'qa', 'devops', 'data',
    'cyber-security', 'information-security', 'it-support', 'help-desk',
    'system-admin', 'network-engineer', 'ai', 'startups', 'remote',
  ].map((cat) => ({
    url: `${BASE_URL}/jobs/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const jobPages: MetadataRoute.Sitemap = jobs
    .filter((j) => j.isActive)
    .map((job) => ({
      url: `${BASE_URL}/jobs/${job.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...categoryPages, ...jobPages, ...articlePages];
}
