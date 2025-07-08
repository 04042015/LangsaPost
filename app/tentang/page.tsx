import Header from "@/components/Header"
import CategoryNav from "@/components/CategoryNav"
import Footer from "@/components/Footer"
import { Users, Target, Award, Heart } from "lucide-react"

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang LangsaPost</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Portal berita terpercaya yang berkomitmen menyajikan informasi akurat, berimbang, dan terkini untuk
            masyarakat Indonesia
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Visi Kami</h2>
            </div>
            <p className="text-gray-600">
              Menjadi portal berita digital terdepan di Indonesia yang menyajikan informasi berkualitas tinggi,
              terpercaya, dan mudah diakses oleh seluruh lapisan masyarakat.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Misi Kami</h2>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li>• Menyajikan berita yang akurat dan berimbang</li>
              <li>• Memberikan analisis mendalam atas peristiwa terkini</li>
              <li>• Mendukung transparansi dan akuntabilitas publik</li>
              <li>• Mengedukasi masyarakat melalui jurnalisme berkualitas</li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Integritas</h3>
              <p className="text-gray-600 text-sm">
                Berkomitmen pada kebenaran dan transparansi dalam setiap pemberitaan
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Profesionalisme</h3>
              <p className="text-gray-600 text-sm">Menjunjung tinggi standar jurnalistik dan etika profesi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Akurasi</h3>
              <p className="text-gray-600 text-sm">
                Memastikan setiap informasi telah diverifikasi dan dapat dipertanggungjawabkan
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tim Redaksi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-900">Ahmad Rizki</h3>
              <p className="text-red-500 text-sm mb-2">Pemimpin Redaksi</p>
              <p className="text-gray-600 text-sm">Berpengalaman 15 tahun di dunia jurnalistik</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-900">Dr. Sarah Amelia</h3>
              <p className="text-red-500 text-sm mb-2">Editor Kesehatan</p>
              <p className="text-gray-600 text-sm">Dokter dan penulis artikel kesehatan berpengalaman</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-900">Budi Santoso</h3>
              <p className="text-red-500 text-sm mb-2">Editor Teknologi</p>
              <p className="text-gray-600 text-sm">Spesialis teknologi dan inovasi digital</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
          <p className="mb-6 opacity-90">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Kami siap mendengar dari Anda
          </p>
          <a
            href="/kontak"
            className="inline-block bg-white text-red-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Kontak Kami
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
