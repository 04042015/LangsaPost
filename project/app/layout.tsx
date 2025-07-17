import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700'],
  variable: '--font-merriweather'
});

export const metadata: Metadata = {
  title: 'LangsaPost - Portal Berita Terpercaya',
  description: 'LangsaPost adalah portal berita online yang menyajikan informasi terkini dan terpercaya dari berbagai bidang seperti politik, ekonomi, olahraga, dan lainnya.',
  keywords: 'berita, news, politik, ekonomi, olahraga, teknologi, kesehatan',
  authors: [{ name: 'LangsaPost' }],
  creator: 'LangsaPost',
  publisher: 'LangsaPost',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'LangsaPost - Portal Berita Terpercaya',
    description: 'Portal berita online yang menyajikan informasi terkini dan terpercaya',
    url: 'https://langsapost.com',
    siteName: 'LangsaPost',
    images: [
      {
        url: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'LangsaPost',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LangsaPost - Portal Berita Terpercaya',
    description: 'Portal berita online yang menyajikan informasi terkini dan terpercaya',
    images: ['https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}