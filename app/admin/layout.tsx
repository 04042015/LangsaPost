"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/auth/login")
      } else {
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <div className="p-10 text-center">Memuat dashboard...</div>
  }

  return <>{children}</>
}
