"use client"

import Link from "next/link"

const categories = [
  { name: "Politik", slug: "politik" },
  { name: "Ekonomi", slug: "ekonomi" },
  { name: "Olahraga", slug: "olahraga" },
  { name: "Teknologi", slug: "teknologi" },
  { name: "Internasional", slug: "internasional" },
  { name: "Nasional", slug: "nasional" },
  { name: "Hiburan", slug: "hiburan" },
  { name: "Kesehatan", slug: "kesehatan" },
  { name: "Pendidikan", slug: "pendidikan" },
  { name: "Otomotif", slug: "otomotif" },
  { name: "Langsa", slug: "langsa" },
  { name: "Loker", slug: "loker" },
  { name: "Zodiak", slug: "zodiak" },
]

export default function CategoryNav() {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded transition-colors flex-shrink-0"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
