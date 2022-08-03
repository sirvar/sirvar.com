import { createClient, SupabaseClient } from '@supabase/supabase-js';

export let supabaseClient: SupabaseClient | null = null;
const { SUPABASE_URL, SUPABASE_SECRET } = process.env;

// Create a single supabase client for interacting with your database
if (SUPABASE_URL && SUPABASE_SECRET) {
  supabaseClient = createClient(SUPABASE_URL, SUPABASE_SECRET);
}
