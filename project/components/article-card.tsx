import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Eye } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: Date;
  readTime?: number;
  views?: number;
  featured?: boolean;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readTime,
  views,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={cn(
      "group cursor-pointer",
      featured && "border-l-4 border-coral pl-4"
    )}>
      <Link href={`/artikel/${slug}`}>
        <div className="space-y-3">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {featured && (
              <div className="absolute top-2 left-2 bg-coral text-white px-2 py-1 rounded text-xs font-medium">
                PILIHAN EDITOR
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-2">
            {/* Category */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-coral bg-coral/10 px-2 py-1 rounded">
                {category.toUpperCase()}
              </span>
              {featured && (
                <span className="text-xs text-muted-foreground">TRENDING</span>
              )}
            </div>

            {/* Title */}
            <h3 className={cn(
              "font-semibold line-clamp-2 group-hover:text-coral transition-colors",
              featured ? "text-lg" : "text-base"
            )}>
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{formatDistanceToNow(publishedAt, { addSuffix: true, locale: id })}</span>
              </div>
              {readTime && (
                <span>{readTime} min baca</span>
              )}
              {views && (
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{views.toLocaleString('id-ID')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}