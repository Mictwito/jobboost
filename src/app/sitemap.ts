import type { MetadataRoute } from 'next';
import { jobs } from '@/data/jobs';
import { articles } from '@/data/articles';
import { getSupabase, type Post } from '@/lib/supabase';

const BASE_URL = 'https://jobboost.co.il';

async function getPostsForSitemap(): Promise<Pick<Post, 'slug' | 'created_at'>[]> {
  try {
    const { data } = await getSupabase()
      .from('posts')
      .select('slug, created_at')
      .order('created_at', { ascending: false });
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabasePosts = await getPostsForSitemap();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/jobs`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/articles`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
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

  const staticArticlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const supabasePostPages: MetadataRoute.Sitemap = supabasePosts.map((post) => ({
    url: `${BASE_URL}/articles/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...jobPages,
    ...staticArticlePages,
    ...supabasePostPages,
  ];
}
