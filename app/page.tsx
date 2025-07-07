"use client"

import { useEffect, useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import zodiacData from "@/data/zodiak.json"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const categories = [
  { name: "Politik", slug: "politik" },
  { name: "Ekonomi", slug: "ekonomi" },
  { name: "Olahraga", slug: "olahraga" },
  { name: "Teknologi", slug: "teknologi" },
  { name: "Internasional", slug: "internasional" },
  { name: "Nasional", slug: "nasional" },
  { name: "Hiburan", slug: "hiburan" },
  { name: "Kesehatan", slug: "kesehatan" },
  { name: "Pendidikan", slug: "pendidikan" },
  { name: "Otomotif", slug: "otomotif" },
  { name: "Langsa", slug: "langsa" },
  { name: "Loker", slug: "loker" },
  { name: "Zodiak", slug: "zodiak" },
]

function getDailyZodiacs() {
  const today = new Date().toISOString().slice(0, 10)
  const seed = parseInt(today.replace(/-/g, ""), 10)
  const shuffled = [...zodiacData].sort((a, b) => {
    const hashA = (a.name.charCodeAt(0) * seed) % 100
    const hashB = (b.name.charCodeAt(0) * seed) % 100
    return hashA - hashB
  })
  return shuffled.map((z, i) => ({ ...z, date: today }))
}

function ZodiakSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-1 rounded-full"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2">
        {zodiacData.map((zodiak) => (
          <Link key={zodiak.slug} href={`/zodiak/${zodiak.slug}`}>
            <Card className="min-w-[150px] hover:shadow-lg transition">
              <CardContent className="p-4 text-center">
                <div className="text-3xl">{zodiak.icon}</div>
                <div className="font-bold text-sm mt-1">{zodiak.name}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-1 rounded-full"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [articles, setArticles] = useState<any[]>([])
  const dailyZodiacs = getDailyZodiacs()
  const todayFormatted = format(new Date(), "dd MMMM yyyy", { locale: id })

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("https://batyohvfirsxgduloyvq.supabase.co/rest/v1/articles?select=*", {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
      })
      const data = await res.json()
      setArticles(data.filter((a: any) => a.status === "published"))
    }
    fetchArticles()
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-8">
              <Image src="/assets/logo.png" alt="LangsaPost" fill className="object-contain" />
            </div>
            <span className="text-lg font-bold text-langsapost-600">LangsaPost</span>
          </Link>
          <Link href="/artikel" className="text-sm text-gray-600 hover:text-black">
            Semua Artikel
          </Link>
        </div>

        <<div className="bg-black overflow-x-auto whitespace-nowrap scrollbar-hide">
  <div className="flex px-2 py-2 space-x-3">
    {categories.map((cat) => (
      <Link
        key={cat.slug}
        href={`/kategori/${cat.slug}`}
        onClick={() => setActiveCategory(cat.slug)}
        className={`text-sm text-white font-semibold border-b-2 ${
          activeCategory === cat.slug
            ? "border-white"
            : "border-transparent hover:border-white"
        } pb-1`}
      >
        {cat.name}
      </Link>
    ))}
  </div>
</div>
      </header>

      {/* Konten Utama */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* SLIDER ZODIAK */}
        <section>
          <h2 className="text-xl font-bold text-langsapost-600 mb-2">🔮 Ramalan Zodiak Hari Ini</h2>
          <ZodiakSlider />
        </section>

        {/* Artikel */}
        <section>
  <h2 className="text-xl font-bold mb-4 text-langsapost-600">📰 Artikel Terbaru</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {articles.map((article) => (
      <Link href={`/artikel/${article.slug}`} key={article.id}>
        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-[1.01]">
          <div className="relative h-48 w-full">
            <Image
              src={article.image_url || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="bg-langsapost-100 text-langsapost-600 px-2 py-0.5 rounded-full text-[10px] uppercase">
                {article.category || "Umum"}
              </span>
              <span>•</span>
              <span>
                {new Date(article.created_at).toLocaleDateString("id-ID", {
                  dateStyle: "medium",
                })}
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-snug text-black dark:text-white line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {article.content?.slice(0, 100)}...
            </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>


        {/* Zodiak Hari Ini - Grid */}
        <section className="pt-6">
          <h2 className="text-xl font-bold mb-4 text-langsapost-600">
            Zodiak Hari Ini, {todayFormatted}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dailyZodiacs.map((zodiak) => (
              <Card key={zodiak.slug}>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{zodiak.icon}</span>
                    <div>
                      <Link
                        href={`/zodiak/${zodiak.slug}`}
                        className="text-lg font-semibold hover:text-langsapost-600"
                      >
                        {zodiak.name}
                      </Link>
                      <div className="text-xs text-gray-500">{zodiak.date}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {zodiak.prediction?.slice(0, 100) || "Prediksi harian belum tersedia..."}
                  </p>
                  <Link
                    href={`/zodiak/${zodiak.slug}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Baca Selengkapnya →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
