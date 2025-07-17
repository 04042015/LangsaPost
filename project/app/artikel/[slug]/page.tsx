import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/article-card';
import { Clock, User, Eye, Share2, Facebook, Twitter, MessageCircle, Bookmark } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

// Mock article data
const articles = {
  'ekonomi-digital-indonesia-2024': {
    title: 'Ekonomi Digital Indonesia Tumbuh 30% di Tahun 2024',
    excerpt: 'Pertumbuhan ekonomi digital Indonesia mencapai rekor tertinggi dalam sejarah, didorong oleh inovasi fintech dan e-commerce.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Ekonomi',
    author: 'Ahmad Fauzi',
    authorAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
    publishedAt: new Date('2024-01-15'),
    readTime: 5,
    views: 12500,
    tags: ['ekonomi digital', 'fintech', 'e-commerce', 'teknologi'],
    content: `
      <p>Ekonomi digital Indonesia mengalami pertumbuhan yang sangat signifikan di tahun 2024, mencapai angka 30% yang merupakan rekor tertinggi dalam sejarah. Pertumbuhan ini didorong oleh berbagai faktor, termasuk inovasi di sektor fintech dan e-commerce yang semakin menguat.</p>

      <p>Menurut data dari Kementerian Komunikasi dan Informatika, kontribusi ekonomi digital terhadap PDB nasional kini mencapai 8,2%, naik dari 7,8% di tahun sebelumnya. Angka ini menunjukkan betapa pentingnya sektor digital dalam mendorong pertumbuhan ekonomi Indonesia.</p>

      <h2>Faktor Pendorong Pertumbuhan</h2>

      <p>Beberapa faktor kunci yang mendorong pertumbuhan ekonomi digital Indonesia antara lain:</p>

      <ul>
        <li><strong>Penetrasi Internet yang Meningkat:</strong> Jumlah pengguna internet di Indonesia telah mencapai 215 juta orang, atau sekitar 78% dari total populasi.</li>
        <li><strong>Adopsi Teknologi Mobile:</strong> Penggunaan smartphone untuk transaksi digital meningkat 45% dibanding tahun lalu.</li>
        <li><strong>Dukungan Pemerintah:</strong> Berbagai kebijakan pro-digital yang diluncurkan pemerintah memberikan dampak positif.</li>
      </ul>

      <p>Sektor fintech menjadi salah satu kontributor utama dengan pertumbuhan 40% year-over-year. Aplikasi pembayaran digital, pinjaman online, dan layanan keuangan digital lainnya semakin diterima masyarakat.</p>

      <blockquote>
        "Pertumbuhan ekonomi digital Indonesia sangat menggembirakan dan menunjukkan potensi besar yang dimiliki negara ini dalam era digital," kata Direktur Jenderal Aplikasi Informatika Kementerian Kominfo.
      </blockquote>

      <h2>Tantangan yang Dihadapi</h2>

      <p>Meskipun pertumbuhan terlihat positif, masih ada beberapa tantangan yang perlu dihadapi:</p>

      <ol>
        <li>Kesenjangan digital antara daerah urban dan rural</li>
        <li>Kebutuhan akan regulasi yang lebih komprehensif</li>
        <li>Pengembangan talenta digital yang masih terbatas</li>
      </ol>

      <p>Untuk mengatasi tantangan ini, pemerintah berencana meluncurkan program "Digital Indonesia 2025" yang fokus pada pengembangan infrastruktur digital dan peningkatan literasi digital masyarakat.</p>

      <h2>Prospek ke Depan</h2>

      <p>Dengan momentum yang ada, ekonomi digital Indonesia diproyeksikan akan terus tumbuh dengan rata-rata 25% per tahun hingga 2027. Ini akan menjadikan Indonesia sebagai salah satu kekuatan ekonomi digital terbesar di Asia Tenggara.</p>

      <p>Investasi dari sektor swasta juga diperkirakan akan terus meningkat, terutama dalam bidang artificial intelligence, blockchain, dan Internet of Things (IoT).</p>
    `,
  },
  'olahraga-nasional-prestasi': {
    title: 'Atlet Indonesia Raih Medali Emas di Kejuaraan Dunia',
    excerpt: 'Prestasi membanggakan dari atlet bulutangkis Indonesia yang berhasil meraih medali emas di kejuaraan dunia.',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Olahraga',
    author: 'Siti Nurhaliza',
    authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    publishedAt: new Date('2024-01-14'),
    readTime: 3,
    views: 8900,
    tags: ['bulutangkis', 'medali emas', 'kejuaraan dunia', 'prestasi'],
    content: `
      <p>Atlet bulutangkis Indonesia berhasil meraih medali emas dalam kejuaraan dunia yang berlangsung di Bangkok, Thailand. Prestasi ini menjadi kebanggaan bagi bangsa Indonesia dan menunjukkan bahwa olahraga bulutangkis Indonesia masih menjadi yang terdepan di kancah internasional.</p>

      <p>Dalam pertandingan final yang berlangsung selama 3 set, atlet Indonesia berhasil mengalahkan lawannya dari Denmark dengan skor 21-19, 19-21, 21-18. Pertandingan yang berlangsung selama 1 jam 15 menit ini menjadi salah satu pertandingan terbaik dalam sejarah kejuaraan dunia.</p>

      <h2>Perjalanan Menuju Final</h2>

      <p>Untuk mencapai final, atlet Indonesia harus melewati berbagai lawan tangguh dari berbagai negara. Dimulai dari babak penyisihan, atlet Indonesia menunjukkan performa yang konsisten dan mengesankan.</p>

      <p>Di babak semifinal, atlet Indonesia berhasil mengalahkan juara bertahan dari Jepang dengan skor 21-16, 21-14. Kemenangan ini memberikan kepercayaan diri yang besar untuk menghadapi final.</p>

      <blockquote>
        "Saya sangat bahagia bisa memberikan medali emas ini untuk Indonesia. Ini adalah hasil dari kerja keras selama bertahun-tahun," kata sang atlet setelah pertandingan.
      </blockquote>

      <h2>Dukungan Tim dan Pelatih</h2>

      <p>Prestasi ini tidak lepas dari dukungan tim pelatih yang telah mempersiapkan strategi dan program latihan yang intensif. Selama 6 bulan terakhir, atlet Indonesia menjalani program latihan khusus yang dirancang untuk menghadapi kejuaraan dunia.</p>

      <p>Pelatih kepala tim bulutangkis Indonesia menyatakan bahwa prestasi ini adalah hasil dari kolaborasi yang baik antara atlet, pelatih, dan seluruh tim pendukung.</p>
    `,
  },
};

const relatedArticles = [
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
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];
  
  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${article.category.toLowerCase()}`}>
              {article.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{article.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm font-medium text-coral bg-coral/10 px-3 py-1 rounded">
              {article.category.toUpperCase()}
            </span>
            <span className="text-sm text-muted-foreground">TRENDING</span>
          </div>
          
          <h1 className="text-4xl font-bold font-merriweather mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              <Image
                src={article.authorAvatar}
                alt={article.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-foreground">{article.author}</p>
                <p className="text-xs">Jurnalis</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{formatDistanceToNow(article.publishedAt, { addSuffix: true, locale: id })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{article.views.toLocaleString('id-ID')} views</span>
            </div>
            <span>{article.readTime} min baca</span>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-3 pb-6 border-b">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Simpan
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="article-content mb-8">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="px-3 py-1 bg-muted text-sm rounded-full hover:bg-muted/80 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Author Info */}
        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-4">
            <Image
              src={article.authorAvatar}
              alt={article.author}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">{article.author}</h3>
              <p className="text-sm text-muted-foreground mb-2">Jurnalis Senior</p>
              <p className="text-sm">
                Jurnalis berpengalaman dengan fokus pada bidang ekonomi dan teknologi. 
                Telah menulis lebih dari 500 artikel dan meliput berbagai peristiwa penting.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold font-merriweather mb-6">
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} {...relatedArticle} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}