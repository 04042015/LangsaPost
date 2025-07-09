import Header from "@/components/Header"
import CategoryNav from "@/components/CategoryNav"
import Footer from "@/components/Footer"
import ArticleCardSupabase from "@/components/ArticleCardSupabase"
import { Search } from "lucide-react"
import { getPublishedArticles } from "@/lib/supabase-articles"
import { useRouter } from 'next/navigation'

export default async function ArtikelPage() {
  const router = useRouter()
  const articles = await getPublishedArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Semua Artikel</h1>
          <p className="text-gray-600">Temukan berita dan artikel terkini dari berbagai kategori</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Semua Kategori</option>
                <option value="politik">Politik</option>
            <option value="ekonomi">Ekonomi</option>
            <option value="olahraga">Olahraga</option>
            <option value="teknologi">Teknologi</option>
            <option value="kesehatan">Kesehatan</option>
            <option value="internasional">Internasional</option>
            <option value="nasional">Nasional</option>
            <option value="hiburan">Hiburan</option>
            <option value="pendidikan">Pendidikan</option>
            <option value="otomotif">Otomotif</option>
            <option value="langsa">Langsa</option>
            <option value="loker">Loker</option>
            <option value="zodiak">Zodiak</option>
              </select>
              <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="terbaru">Terbaru</option>
                <option value="terpopuler">Terpopuler</option>
                <option value="terlama">Terlama</option>
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {articles.map((article) => (
                <ArticleCardSupabase key={article.id} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50" disabled>
                  ← Sebelumnya
                </button>
                <button className="px-3 py-2 bg-red-500 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">2</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">3</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">Selanjutnya →</button>
              </nav>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Artikel</h3>
              <p className="text-gray-500 mb-6">Artikel akan muncul di sini setelah dipublikasi dari admin panel</p>
              <a
                href="/admin"
                className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Buat Artikel Pertama
              </a>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
