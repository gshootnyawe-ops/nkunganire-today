// Public browser configuration for Nkunganire Today.
// This publishable key is intended for browser use. Never place a Supabase secret key here.
window.sbClient = window.supabase.createClient(
  "https://rvyxwzlnfgnpsloovdro.supabase.co",
  "sb_publishable_m0ncFM7mPG1RXFKtNOqg-Q_i1I6BfTD",
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);
