import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-coral rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LP</span>
              </div>
              <span className="text-xl font-bold font-merriweather">LangsaPost</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Portal berita online yang menyajikan informasi terkini dan terpercaya dari berbagai bidang.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-coral transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-coral transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-coral transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-coral transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/politik" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Politik
                </Link>
              </li>
              <li>
                <Link href="/ekonomi" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Ekonomi
                </Link>
              </li>
              <li>
                <Link href="/olahraga" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Olahraga
                </Link>
              </li>
              <li>
                <Link href="/teknologi" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Teknologi
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kategori Lainnya</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kesehatan" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Kesehatan
                </Link>
              </li>
              <li>
                <Link href="/pendidikan" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Pendidikan
                </Link>
              </li>
              <li>
                <Link href="/hiburan" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Hiburan
                </Link>
              </li>
              <li>
                <Link href="/arsip" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  Arsip
                </Link>
              </li>
              <li>
                <Link href="/rss" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontak Kami</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>redaksi@langsapost.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="pt-4">
              <Link 
                href="/tentang" 
                className="text-sm text-muted-foreground hover:text-coral transition-colors"
              >
                Tentang Kami
              </Link>
              <span className="mx-2 text-muted-foreground">|</span>
              <Link 
                href="/kontak" 
                className="text-sm text-muted-foreground hover:text-coral transition-colors"
              >
                Kontak Redaksi
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} LangsaPost. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}