"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Semua', href: '/' },
  { name: 'Politik', href: '/politik' },
  { name: 'Ekonomi', href: '/ekonomi' },
  { name: 'Olahraga', href: '/olahraga' },
  { name: 'Teknologi', href: '/teknologi' },
  { name: 'Kesehatan', href: '/kesehatan' },
  { name: 'Pendidikan', href: '/pendidikan' },
  { name: 'Hiburan', href: '/hiburan' },
];

export function CategoryNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center py-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute left-0 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto category-scroll md:mx-8 flex-1"
          >
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  pathname === category.href
                    ? "bg-coral text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-coral"
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute right-0 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}