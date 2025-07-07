"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Eye, Heart, Share2, Search, Menu } from "lucide-react"

export default function LangsaPostHomepage() {
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

  const articles = [
    {
      id: 1,
      title: "5 Tips Agar Tidur Lebih Nyenyak di Malam Hari",
      excerpt:
        "Tidur yang berkualitas sangat penting untuk kesehatan fisik dan mental. Namun, banyak orang yang kesulitan mendapatkan tidur yang nyenyak...",
      category: "Kesehatan",
      categorySlug: "kesehatan",
      author: "Admin",
      date: "06 Jul 2025",
      slug: "5-tips-agar-tidur-lebih-nyenyak-di-malam-hari",
      image: "/placeholder.svg?height=200&width=300",
      views: 1250,
      featured: false,
    },
    {
      id: 2,
      title: "5 Tips Agar Imun Tubuh Tetap Kuat Tanpa Obat",
      excerpt:
        "Sistem imun yang kuat adalah pertahanan utama tubuh dari penyakit. Berikut cara alami meningkatkan imunitas tubuh Anda...",
      category: "Kesehatan",
      categorySlug: "kesehatan",
      author: "Admin",
      date: "07 Jul 2025",
      slug: "5-tips-agar-imun-tubuh-tetap-kuat-tanpa-obat",
      image: "/placeholder.svg?height=400&width=600",
      views: 2100,
      featured: true,
    },
    {
      id: 3,
      title: "Perkembangan Teknologi AI di Indonesia 2025",
      excerpt:
        "Artificial Intelligence semakin berkembang pesat di Indonesia. Berbagai sektor mulai mengadopsi teknologi ini untuk meningkatkan efisiensi...",
      category: "Teknologi",
      categorySlug: "teknologi",
      author: "Tech Editor",
      date: "05 Jul 2025",
      slug: "perkembangan-teknologi-ai-di-indonesia-2025",
      image: "/placeholder.svg?height=200&width=300",
      views: 890,
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LP</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-red-500">LangsaPost</h1>
              </div>
            </Link>

            {/* Right side */}
            <div className="flex items-center space-x-2">
              <Link
                href="/artikel"
                className="px-3 py-1.5 border border-gray-300 rounded text-xs font-medium text-gray-700 bg-white"
              >
                Semua Artikel
              </Link>
              <button className="p-2 text-gray-600">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar Mobile */}
      <div className="bg-white border-b px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Cari berita..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Navigation Categories */}
      <nav className="bg-black">
        <div className="px-4">
          <div className="flex space-x-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="whitespace-nowrap px-3 py-1.5 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded transition-colors flex-shrink-0"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-4">
        {/* Featured Article */}
        {articles
          .filter((article) => article.featured)
          .map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-sm border mb-6 overflow-hidden">
              <Link href={`/artikel/${article.slug}`}>
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Link
                    href={`/kategori/${article.categorySlug}`}
                    className="px-2 py-1 bg-black text-white text-xs font-medium rounded"
                  >
                    {article.category}
                  </Link>
                  <span className="text-red-500 font-semibold text-xs">FEATURED</span>
                </div>
                <Link href={`/artikel/${article.slug}`}>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 hover:text-red-500 transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-red-500">
                      <Heart className="w-3 h-3" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-blue-500">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Articles List */}
        <div className="space-y-4">
          {articles
            .filter((article) => !article.featured)
            .map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="flex">
                  <div className="w-24 h-20 flex-shrink-0">
                    <Link href={`/artikel/${article.slug}`}>
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={96}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="flex-1 p-3">
                    <Link
                      href={`/kategori/${article.categorySlug}`}
                      className="inline-block px-2 py-0.5 bg-black text-white text-xs font-medium rounded mb-1"
                    >
                      {article.category}
                    </Link>
                    <Link href={`/artikel/${article.slug}`}>
                      <h3 className="font-bold text-sm text-gray-900 mb-1 hover:text-red-500 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-6 mb-4">
          <Link
            href="/artikel"
            className="inline-block px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Muat Lebih Banyak Artikel
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="px-4 py-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LP</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">LangsaPost</h3>
                <p className="text-gray-400 text-xs">Portal Berita Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Menyajikan berita terkini dan terpercaya dari berbagai bidang untuk masyarakat Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Kategori</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                {categories.slice(0, 6).map((category) => (
                  <li key={category.slug}>
                    <Link href={`/kategori/${category.slug}`} className="hover:text-white transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Kontak</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>info@langsapost.com</li>
                <li>(021) 123-4567</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 text-center text-gray-400 text-xs">
            <p>&copy; 2025 LangsaPost. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
