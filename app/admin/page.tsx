"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [userReady, setUserReady] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/auth/login")
      } else {
        setUserReady(true)
      }
    })
  }, [])

  if (!userReady) return <div className="p-10 text-center">Memuat halaman admin...</div>

  return <AdminDashboard />
}
