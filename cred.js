const SUPABASE_URL = 'process.env.SUPABASE_URL'; // Replace
const SUPABASE_KEY = 'process.env.SUPABASE_KEY '; // Replace
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
