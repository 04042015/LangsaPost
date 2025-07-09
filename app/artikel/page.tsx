import Header from "@/components/Header"
import CategoryNav from "@/components/CategoryNav"
import Footer from "@/components/Footer"
import { getPublishedArticles } from "@/lib/supabase-articles"
import dynamic from "next/dynamic"

// ✅ Dynamically import ArtikelClient to avoid SSR error
const ArtikelClient = dynamic(() => import("./ArtikelClient"), { ssr: false });

export default async function ArtikelPage() {
  const articles = await getPublishedArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ArtikelClient articles={articles} />
      </main>
      <Footer />
    </div>
  )
}
