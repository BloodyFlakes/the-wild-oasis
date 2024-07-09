import { createClient } from "@supabase/supabase-js";

export const supabaseUrl =
  "https://qrdqblucqrobqmxehest.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyZHFibHVjcXJvYnFteGVoZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3ODE4MDgsImV4cCI6MjAzNTM1NzgwOH0.Sy-VXEbmL_qn0IP0P-6Sh6a4J1eZm17oTEa-MPVEtLI";
const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export default supabase;
