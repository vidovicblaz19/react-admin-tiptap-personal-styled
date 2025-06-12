import { supabaseAuthProvider, supabaseDataProvider } from "ra-supabase";
import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const VITE_SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_API_KEY);

export const dataProvider = supabaseDataProvider({
    instanceUrl: VITE_SUPABASE_URL,
    apiKey: VITE_SUPABASE_API_KEY,
    supabaseClient,
})

export const authProvider = supabaseAuthProvider(supabaseClient, {})
export const PUBLIC_BUCKET = 'public-bucket';