
import { createClient } from '@supabase/supabase-js';

/**
 * Supabase configuration using provided credentials.
 * Priority is given to environment variables if they are set by the platform,
 * with the user-provided keys as fallback defaults to ensure the app connects correctly.
 */
const supabaseUrl = process.env.SUPABASE_URL || 'https://ocznxuhfpcpiaoxejdyh.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_cw5H-7LV4FoUiy9BVsu8Rg_1PYgvUI2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
