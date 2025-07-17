import React from 'react';
import Link from 'next/link';
import { Calendar, Archive, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ArsipPage() {
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const yearlyArchive = [
    {
      year: 2024,
      totalArticles: 1250,
      months: [
        { month: 'Januari', articles: 125, slug: '2024/01' },
        { month: 'Februari', articles: 118, slug: '2024/02' },
        { month: 'Maret', articles: 132, slug: '2024/03' },
        { month: 'April', articles: 145, slug: '2024/04' },
        { month: 'Mei', articles: 138, slug: '2024/05' },
        { month: 'Juni', articles: 142, slug: '2024/06' },
        { month: 'Juli', articles: 155, slug: '2024/07' },
        { month: 'Agustus', articles: 148, slug: '2024/08' },
        { month: 'September', articles: 134, slug: '2024/09' },
        { month: 'Oktober', articles: 126, slug: '2024/10' },
        { month: 'November', articles: 135, slug: '2024/11' },
        { month: 'Desember', articles: 152, slug: '2024/12' },
      ]
    },
    {
      year: 2023,
      totalArticles: 1180,
      months: [
        { month: 'Januari', articles: 95, slug: '2023/01' },
        { month: 'Februari', articles: 88, slug: '2023/02' },
        { month: 'Maret', articles: 102, slug: '2023/03' },
        { month: 'April', articles: 115, slug: '2023/04' },
        { month: 'Mei', articles: 108, slug: '2023/05' },
        { month: 'Juni', articles: 112, slug: '2023/06' },
        { month: 'Juli', articles: 125, slug: '2023/07' },
        { month: 'Agustus', articles: 118, slug: '2023/08' },
        { month: 'September', articles: 104, slug: '2023/09' },
        { month: 'Oktober', articles: 96, slug: '2023/10' },
        { month: 'November', articles: 105, slug: '2023/11' },
        { month: 'Desember', articles: 112, slug: '2023/12' },
      ]
    },
    {
      year: 2022,
      totalArticles: 980,
      months: [
        { month: 'Januari', articles: 75, slug: '2022/01' },
        { month: 'Februari', articles: 68, slug: '2022/02' },
        { month: 'Maret', articles: 82, slug: '2022/03' },
        { month: 'April', articles: 85, slug: '2022/04' },
        { month: 'Mei', articles: 78, slug: '2022/05' },
        { month: 'Juni', articles: 92, slug: '2022/06' },
        { month: 'Juli', articles: 95, slug: '2022/07' },
        { month: 'Agustus', articles: 88, slug: '2022/08' },
        { month: 'September', articles: 84, slug: '2022/09' },
        { month: 'Oktober', articles: 76, slug: '2022/10' },
        { month: 'November', articles: 85, slug: '2022/11' },
        { month: 'Desember', articles: 92, slug: '2022/12' },
      ]
    },
  ];

  const categoryStats = [
    { name: 'Politik', articles: 845, percentage: 25 },
    { name: 'Ekonomi', articles: 678, percentage: 20 },
    { name: 'Olahraga', articles: 567, percentage: 17 },
    { name: 'Teknologi', articles: 456, percentage: 13 },
    { name: 'Kesehatan', articles: 389, percentage: 12 },
    { name: 'Hiburan', articles: 234, percentage: 7 },
    { name: 'Pendidikan', articles: 201, percentage: 6 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-merriweather mb-4 flex items-center justify-center">
            <Archive className="h-8 w-8 mr-3 text-coral" />
            Arsip Berita
          </h1>
          <p className="text-xl text-muted-foreground">
            Jelajahi koleksi berita kami berdasarkan tanggal dan kategori
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-coral mb-2">3,410</div>
              <div className="text-sm text-muted-foreground">Total Artikel</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-coral mb-2">7</div>
              <div className="text-sm text-muted-foreground">Kategori</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-coral mb-2">3</div>
              <div className="text-sm text-muted-foreground">Tahun Arsip</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Monthly Archive */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-coral" />
                  Arsip Bulanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {yearlyArchive.map((yearData) => (
                    <div key={yearData.year}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{yearData.year}</h3>
                        <span className="text-sm text-muted-foreground">
                          {yearData.totalArticles} artikel
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {yearData.months.map((monthData) => (
                          <Link
                            key={monthData.slug}
                            href={`/arsip/${monthData.slug}`}
                            className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{monthData.month}</p>
                                <p className="text-xs text-muted-foreground">
                                  {monthData.articles} artikel
                                </p>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-coral transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Stats */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Statistik Kategori</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryStats.map((category) => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {category.articles}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-coral h-2 rounded-full transition-all duration-300"
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Tag Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'pemilu', 'ekonomi digital', 'olahraga', 'covid-19', 'teknologi',
                    'pendidikan', 'kesehatan', 'UMKM', 'investasi', 'startup',
                    'lingkungan', 'budaya', 'pariwisata', 'kuliner', 'otomotif'
                  ].map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag}`}
                      className="px-2 py-1 bg-muted text-sm rounded-full hover:bg-coral hover:text-white transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Akses Cepat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/arsip/2024/01"
                  className="p-4 bg-gradient-to-r from-coral/10 to-coral/20 rounded-lg hover:from-coral/20 hover:to-coral/30 transition-all"
                >
                  <h3 className="font-semibold mb-2">Januari 2024</h3>
                  <p className="text-sm text-muted-foreground">
                    Artikel terbaru bulan ini
                  </p>
                </Link>
                <Link
                  href="/politik"
                  className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all"
                >
                  <h3 className="font-semibold mb-2">Politik</h3>
                  <p className="text-sm text-muted-foreground">
                    Berita politik terkini
                  </p>
                </Link>
                <Link
                  href="/rss"
                  className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg hover:from-orange-100 hover:to-orange-200 transition-all"
                >
                  <h3 className="font-semibold mb-2">RSS Feed</h3>
                  <p className="text-sm text-muted-foreground">
                    Berlangganan feed RSS
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}