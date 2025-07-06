import { notFound } from "next/navigation"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

const CATEGORIES = {
  politik: { name: "Politik", description: "Berita politik terkini dan analisis mendalam" },
  ekonomi: { name: "Ekonomi", description: "Berita ekonomi, bisnis, dan keuangan terbaru" },
  olahraga: { name: "Olahraga", description: "Berita olahraga dan hasil pertandingan terkini" },
  teknologi: { name: "Teknologi", description: "Berita teknologi dan inovasi terbaru" },
  internasional: { name: "Internasional", description: "Berita internasional dan hubungan luar negeri" },
  nasional: { name: "Nasional", description: "Berita nasional Indonesia terkini" },
  hiburan: { name: "Hiburan", description: "Berita hiburan, selebriti, dan lifestyle" },
  kesehatan: { name: "Kesehatan", description: "Berita kesehatan dan tips hidup sehat" },
  pendidikan: { name: "Pendidikan", description: "Berita pendidikan dan dunia akademik" },
  otomotif: { name: "Otomotif", description: "Berita otomotif dan transportasi" },
  langsa: { name: "Langsa", description: "Berita khusus Kota Langsa dan sekitarnya" },
  loker: { name: "Loker", description: "Informasi lowongan kerja dan peluang karir terbaru" },
  zodiak: { name: "Zodiak", description: "Ramalan zodiak harian dan informasi astrologi" },
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = CATEGORIES[params.slug as keyof typeof CATEGORIES]
  if (!category) {
    return { title: "Kategori Tidak Ditemukan - LangsaPost" }
  }
  return {
    title: `${category.name} - LangsaPost`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryKey = params.slug
  const category = CATEGORIES[categoryKey as keyof typeof CATEGORIES]
  if (!category) return notFound()

  const res = await fetch(
    `https://batyohvfirsxgduloyvq.supabase.co/rest/v1/articles?category=eq.${category.name}&status=eq.published&order=created_at.desc`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
      },
      cache: "no-store",
    }
  )
  const articles = await res.json()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kategori {category.name}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {category.description}
        </p>
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada artikel di kategori ini.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/artikel/${article.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={article.image_url || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <CardContent className="p-4 space-y-2">
                <div className="text-sm text-gray-500 flex gap-4 items-center">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(article.created_at), "dd MMM yyyy", { locale: id })}
                  </span>
                </div>
                <h2 className="text-lg font-bold line-clamp-2 hover:text-langsapost-600">
                  <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {(article.content || "").replace(/<[^>]+>/g, "").slice(0, 100)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }))
}
