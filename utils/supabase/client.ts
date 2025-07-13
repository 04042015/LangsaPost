import { createBrowserClient } from "@supabase/auth-helpers-nextjs"

export function createClient() {
  return createBrowserClient()
}
