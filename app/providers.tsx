"use client"

import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createBrowserClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createBrowserClient())

  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  )
}
