"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Politik', href: '/politik' },
  { name: 'Ekonomi', href: '/ekonomi' },
  { name: 'Olahraga', href: '/olahraga' },
  { name: 'Teknologi', href: '/teknologi' },
  { name: 'Kesehatan', href: '/kesehatan' },
  { name: 'Pendidikan', href: '/pendidikan' },
  { name: 'Hiburan', href: '/hiburan' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-coral rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="text-xl font-bold font-merriweather">LangsaPost</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={cn(
                "font-medium transition-colors hover:text-coral",
                pathname === "/" ? "text-coral" : "text-foreground"
              )}
            >
              Beranda
            </Link>
            <div className="relative group">
              <button className="font-medium transition-colors hover:text-coral">
                Kategori
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-4 py-2 text-sm hover:bg-muted hover:text-coral transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/arsip" 
              className={cn(
                "font-medium transition-colors hover:text-coral",
                pathname === "/arsip" ? "text-coral" : "text-foreground"
              )}
            >
              Arsip
            </Link>
            <Link 
              href="/tentang" 
              className={cn(
                "font-medium transition-colors hover:text-coral",
                pathname === "/tentang" ? "text-coral" : "text-foreground"
              )}
            >
              Tentang Kami
            </Link>
            <Link 
              href="/kontak" 
              className={cn(
                "font-medium transition-colors hover:text-coral",
                pathname === "/kontak" ? "text-coral" : "text-foreground"
              )}
            >
              Kontak
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="hover:bg-muted hover:text-coral"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-muted hover:text-coral"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-muted hover:text-coral"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari berita..."
                className="pl-10"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={cn(
                  "font-medium transition-colors hover:text-coral",
                  pathname === "/" ? "text-coral" : "text-foreground"
                )}
                onClick={toggleMenu}
              >
                Beranda
              </Link>
              <div className="space-y-2">
                <span className="font-medium text-muted-foreground">Kategori</span>
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block pl-4 text-sm hover:text-coral transition-colors"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link 
                href="/arsip" 
                className={cn(
                  "font-medium transition-colors hover:text-coral",
                  pathname === "/arsip" ? "text-coral" : "text-foreground"
                )}
                onClick={toggleMenu}
              >
                Arsip
              </Link>
              <Link 
                href="/tentang" 
                className={cn(
                  "font-medium transition-colors hover:text-coral",
                  pathname === "/tentang" ? "text-coral" : "text-foreground"
                )}
                onClick={toggleMenu}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/kontak" 
                className={cn(
                  "font-medium transition-colors hover:text-coral",
                  pathname === "/kontak" ? "text-coral" : "text-foreground"
                )}
                onClick={toggleMenu}
              >
                Kontak
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}