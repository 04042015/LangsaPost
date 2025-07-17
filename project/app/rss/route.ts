import { NextResponse } from 'next/server';

export async function GET() {
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LangsaPost - Portal Berita Terpercaya</title>
    <link>https://langsapost.com</link>
    <description>Portal berita online yang menyajikan informasi terkini dan terpercaya dari berbagai bidang</description>
    <language>id-ID</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://langsapost.com/rss" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Ekonomi Digital Indonesia Tumbuh 30% di Tahun 2024</title>
      <link>https://langsapost.com/artikel/ekonomi-digital-indonesia-2024</link>
      <description>Pertumbuhan ekonomi digital Indonesia mencapai rekor tertinggi dalam sejarah, didorong oleh inovasi fintech dan e-commerce.</description>
      <author>Ahmad Fauzi</author>
      <category>Ekonomi</category>
      <pubDate>Mon, 15 Jan 2024 10:00:00 +0700</pubDate>
      <guid>https://langsapost.com/artikel/ekonomi-digital-indonesia-2024</guid>
    </item>
    
    <item>
      <title>Atlet Indonesia Raih Medali Emas di Kejuaraan Dunia</title>
      <link>https://langsapost.com/artikel/olahraga-nasional-prestasi</link>
      <description>Prestasi membanggakan dari atlet bulutangkis Indonesia yang berhasil meraih medali emas di kejuaraan dunia.</description>
      <author>Siti Nurhaliza</author>
      <category>Olahraga</category>
      <pubDate>Sun, 14 Jan 2024 08:00:00 +0700</pubDate>
      <guid>https://langsapost.com/artikel/olahraga-nasional-prestasi</guid>
    </item>
    
    <item>
      <title>Implementasi AI dalam Sistem Pendidikan Indonesia</title>
      <link>https://langsapost.com/artikel/teknologi-ai-pendidikan</link>
      <description>Kementerian Pendidikan mengumumkan program pilot penggunaan artificial intelligence dalam kurikulum.</description>
      <author>Budi Santoso</author>
      <category>Teknologi</category>
      <pubDate>Sat, 13 Jan 2024 14:30:00 +0700</pubDate>
      <guid>https://langsapost.com/artikel/teknologi-ai-pendidikan</guid>
    </item>
    
  </channel>
</rss>`;

  return new NextResponse(rssContent, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}