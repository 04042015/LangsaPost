"use client"

import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"
import { createClient } from "@/utils/supabase/client"

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient())

  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  )
}
