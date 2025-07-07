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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-red-500">LangsaPost</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Portal Berita Terpercaya</p>
              </div>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari berita..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Link
                href="/artikel"
                className="hidden sm:flex px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Semua Artikel
              </Link>
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Categories */}
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex space-x-2 overflow-x-auto py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Article */}
        {articles
          .filter((article) => article.featured)
          .map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Link href={`/artikel/${article.slug}`}>
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Link
                      href={`/kategori/${article.categorySlug}`}
                      className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                      {article.category}
                    </Link>
                    <span className="text-red-500 font-semibold text-sm">FEATURED</span>
                  </div>
                  <Link href={`/artikel/${article.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer transition-colors">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter((article) => !article.featured)
            .map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <Link href={`/artikel/${article.slug}`}>
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <Link
                    href={`/kategori/${article.categorySlug}`}
                    className="absolute top-3 left-3 px-3 py-1 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                  >
                    {article.category}
                  </Link>
                </div>
                <div className="p-4">
                  <Link href={`/artikel/${article.slug}`}>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 hover:text-red-500 cursor-pointer transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
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
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link
            href="/artikel"
            className="inline-block px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Muat Lebih Banyak Artikel
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">LangsaPost</h3>
                  <p className="text-gray-400 text-sm">Portal Berita Terpercaya</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Menyajikan berita terkini dan terpercaya dari berbagai bidang untuk masyarakat Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400">
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
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@langsapost.com</li>
                <li>Telepon: (021) 123-4567</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LangsaPost. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
