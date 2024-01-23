import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://vxvipwzpgtafrsatxekp.supabase.co";
const supabaseAnonKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dmlwd3pwZ3RhZnJzYXR4ZWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNDcyMzUsImV4cCI6MjAxMzkyMzIzNX0.UuveFxLOOHSulFnYApg61F6RxYDmndyq9U4qCqZN5hw";
export const supabase = createClient(supabaseURL,supabaseAnonKey);

// const supabaseURL = "https://vxvipwzpgtafrsatxekp.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// export const supabase = createClient(supabaseURL,supabaseKey);