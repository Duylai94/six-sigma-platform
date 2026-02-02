import { createClient } from '@supabase/supabase-js';

// Access environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a client safely. 
// If env vars are missing (e.g. during build or if not set), 
// we avoid throwing an immediate error unless we try to use it.
// However, createClient requires arguments. 
// We provide placeholders to satisfy the build process if keys are missing.
// The app will fail at runtime if these aren't set, which is expected.

export const supabase = createClient(
    supabaseUrl || "https://placeholder-url.supabase.co",
    supabaseKey || "placeholder-key"
);

if (!supabaseUrl || !supabaseKey) {
    console.warn("⚠️ Supabase Environment Variables are missing! Database features will not work.");
}

export const isSupabaseConfigured = !supabaseUrl?.includes("placeholder") && !supabaseKey?.includes("placeholder");
