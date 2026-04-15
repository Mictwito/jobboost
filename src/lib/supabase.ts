import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
  meta_description: string;
  created_at: string;
};

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
  }
  return _client;
}
