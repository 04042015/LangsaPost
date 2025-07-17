import React from 'react';
import { BreakingNews } from '@/components/breaking-news';
import { CategoryNav } from '@/components/category-nav';
import { ArticleCard } from '@/components/article-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function HomePage() {
  // Mock data - in real app, this would come from your data source
  const featuredArticles = [
    {
      slug: 'ekonomi-digital-indonesia-2024',
      title: 'Ekonomi Digital Indonesia Tumbuh 30% di Tahun 2024',
      excerpt: 'Pertumbuhan ekonomi digital Indonesia mencapai rekor tertinggi dalam sejarah, didorong oleh inovasi fintech dan e-commerce.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Ekonomi',
      author: 'Ahmad Fauzi',
      publishedAt: new Date('2024-01-15'),
      readTime: 5,
      views: 12500,
      featured: true,
    },
    {
      slug: 'olahraga-nasional-prestasi',
      title: 'Atlet Indonesia Raih Medali Emas di Kejuaraan Dunia',
      excerpt: 'Prestasi membanggakan dari atlet bulutangkis Indonesia yang berhasil meraih medali emas di kejuaraan dunia.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Olahraga',
      author: 'Siti Nurhaliza',
      publishedAt: new Date('2024-01-14'),
      readTime: 3,
      views: 8900,
      featured: true,
    },
  ];

  const latestArticles = [
    {
      slug: 'teknologi-ai-pendidikan',
      title: 'Implementasi AI dalam Sistem Pendidikan Indonesia',
      excerpt: 'Kementerian Pendidikan mengumumkan program pilot penggunaan artificial intelligence dalam kurikulum.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Teknologi',
      author: 'Budi Santoso',
      publishedAt: new Date('2024-01-13'),
      readTime: 4,
      views: 5600,
    },
    {
      slug: 'kesehatan-vaksinasi-update',
      title: 'Program Vaksinasi Nasional Capai Target 90%',
      excerpt: 'Kementerian Kesehatan melaporkan pencapaian target vaksinasi yang melampaui ekspektasi.',
      image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Kesehatan',
      author: 'Dr. Maya Sari',
      publishedAt: new Date('2024-01-12'),
      readTime: 3,
      views: 7800,
    },
    {
      slug: 'politik-kebijakan-baru',
      title: 'Pemerintah Luncurkan Kebijakan Baru untuk UMKM',
      excerpt: 'Serangkaian kebijakan baru diluncurkan untuk mendukung pertumbuhan usaha mikro, kecil, dan menengah.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Politik',
      author: 'Andi Wijaya',
      publishedAt: new Date('2024-01-11'),
      readTime: 6,
      views: 9200,
    },
    {
      slug: 'hiburan-festival-budaya',
      title: 'Festival Budaya Nusantara Digelar di Jakarta',
      excerpt: 'Festival budaya terbesar tahun ini menampilkan keberagaman seni dan budaya dari seluruh Indonesia.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hiburan',
      author: 'Rina Kusuma',
      publishedAt: new Date('2024-01-10'),
      readTime: 4,
      views: 4300,
    },
  ];

  return (
    <>
      <BreakingNews />
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Featured Articles */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-merriweather flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-coral" />
              Pilihan Editor
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-merriweather">
              Berita Terbaru
            </h2>
            <Button variant="outline" className="text-coral border-coral hover:bg-coral hover:text-white">
              Lihat Semua
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-merriweather mb-6">
            Kategori Populer
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Politik', count: 245, color: 'bg-red-500' },
              { name: 'Ekonomi', count: 189, color: 'bg-blue-500' },
              { name: 'Olahraga', count: 156, color: 'bg-green-500' },
              { name: 'Teknologi', count: 134, color: 'bg-purple-500' },
            ].map((category) => (
              <div key={category.name} className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className={`w-8 h-8 ${category.color} rounded-full mb-2`}></div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} artikel</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}