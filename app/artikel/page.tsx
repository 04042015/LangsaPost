import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Footer from "@/components/Footer";
import { getPublishedArticles } from "@/lib/supabase-articles";
import ClientWrapper from "./ClientWrapper"; // ✅ wrapper untuk ArtikelClient

export default async function ArtikelPage() {
  const articles = await getPublishedArticles();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Semua Artikel</h1>
        <p className="text-gray-600 mb-8">
          Temukan berita dan artikel terkini dari berbagai kategori
        </p>

        {/* ✅ ArtikelClient hanya dijalankan di client-side */}
        <ClientWrapper articles={articles} />
      </main>

      <Footer />
    </div>
  );
}
