import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://tfynirxdtjzenprgiydt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmeW5pcnhkdGp6ZW5wcmdpeWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5ODIzNTksImV4cCI6MjA1MDU1ODM1OX0.iobYOCjJhCXCS2kpMeV80w9Mo9joWgviTEbs04Im2aA",
);
export default supabase;
