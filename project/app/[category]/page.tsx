import React from 'react';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import { CategoryNav } from '@/components/category-nav';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';

const validCategories = ['politik', 'ekonomi', 'olahraga', 'teknologi', 'kesehatan', 'pendidikan', 'hiburan'];

const categoryData = {
  politik: {
    name: 'Politik',
    description: 'Berita dan analisis politik terkini dari dalam dan luar negeri',
    articles: [
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
        slug: 'pemilu-persiapan-2024',
        title: 'Persiapan Pemilu 2024 Memasuki Tahap Akhir',
        excerpt: 'KPU melaporkan bahwa semua persiapan teknis untuk pemilu 2024 telah mencapai 95% dan siap dilaksanakan.',
        image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Politik',
        author: 'Sari Indah',
        publishedAt: new Date('2024-01-10'),
        readTime: 5,
        views: 15600,
      },
    ],
  },
  ekonomi: {
    name: 'Ekonomi',
    description: 'Informasi terkini seputar ekonomi, bisnis, dan keuangan',
    articles: [
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
      },
    ],
  },
  olahraga: {
    name: 'Olahraga',
    description: 'Berita olahraga terkini dari dalam dan luar negeri',
    articles: [
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
      },
    ],
  },
  teknologi: {
    name: 'Teknologi',
    description: 'Perkembangan teknologi dan inovasi terbaru',
    articles: [
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
    ],
  },
  kesehatan: {
    name: 'Kesehatan',
    description: 'Informasi kesehatan dan tips hidup sehat',
    articles: [
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
    ],
  },
  pendidikan: {
    name: 'Pendidikan',
    description: 'Berita dan informasi seputar dunia pendidikan',
    articles: [],
  },
  hiburan: {
    name: 'Hiburan',
    description: 'Berita hiburan, selebriti, dan budaya populer',
    articles: [
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
    ],
  },
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  
  if (!validCategories.includes(category)) {
    notFound();
  }

  const categoryInfo = categoryData[category as keyof typeof categoryData];
  
  return (
    <>
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-merriweather mb-2 capitalize">
            {categoryInfo.name}
          </h1>
          <p className="text-muted-foreground">
            {categoryInfo.description}
          </p>
        </div>

        {/* Filter and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <select className="px-3 py-1 border rounded-md text-sm">
              <option>Terbaru</option>
              <option>Terpopuler</option>
              <option>Trending</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Articles Grid */}
        {categoryInfo.articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categoryInfo.articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold mb-2">Belum Ada Artikel</h3>
            <p className="text-muted-foreground">
              Artikel untuk kategori {categoryInfo.name} akan segera hadir.
            </p>
          </div>
        )}

        {/* Pagination */}
        {categoryInfo.articles.length > 0 && (
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-coral text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}