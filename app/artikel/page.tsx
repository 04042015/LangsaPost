import Header from "@/components/Header"
import CategoryNav from "@/components/CategoryNav"
import Footer from "@/components/Footer"
import ArticleCard from "@/components/ArticleCard"
import { Search } from "lucide-react"

// Sample data - expanded
const articles = [
  {
    id: 1,
    title: "Presiden Jokowi Resmikan Infrastruktur Baru di Aceh",
    excerpt:
      "Presiden Joko Widodo meresmikan pembangunan infrastruktur strategis di Provinsi Aceh yang diharapkan dapat meningkatkan perekonomian daerah.",
    category: "Politik",
    categorySlug: "politik",
    author: "Ahmad Rizki",
    date: "08 Jul 2025",
    slug: "presiden-jokowi-resmikan-infrastruktur-baru-di-aceh",
    image: "/placeholder.svg?height=300&width=400",
    views: 2850,
  },
  {
    id: 2,
    title: "5 Tips Agar Imun Tubuh Tetap Kuat Tanpa Obat",
    excerpt:
      "Sistem imun yang kuat adalah pertahanan utama tubuh dari penyakit. Berikut cara alami meningkatkan imunitas tubuh Anda.",
    category: "Kesehatan",
    categorySlug: "kesehatan",
    author: "Dr. Sarah Amelia",
    date: "07 Jul 2025",
    slug: "5-tips-agar-imun-tubuh-tetap-kuat-tanpa-obat",
    image: "/placeholder.svg?height=300&width=400",
    views: 2100,
  },
  // Add more articles...
]

export default function ArtikelPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
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
      </main>

      <Footer />
    </div>
  )
}
