import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dxlnhmqqzvtirxrhdnru.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bG5obXFxenZ0aXJ4cmhkbnJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NjMwMTcsImV4cCI6MjA0NzQzOTAxN30.qW3yV5Xf89Y3fwxL6lEo0wqWUsQfPMMqFg-bnBKIILc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
