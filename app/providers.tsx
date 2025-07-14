"use client"

import { createBrowserClient } from "@supabase/ssr"
import { useState, useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  )

  // Optional: restore session (jika pakai SSR cookies bisa di-skip)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // Optional: simpan session atau lakukan tindakan
    })
  }, [supabase])

  return <>{children}</>
}
