"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [artikel, setArtikel] = useState<any[]>([])
  const [zodiak, setZodiak] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/artikel")
      .then((res) => res.json())
      .then((data) => setArtikel(data))

    fetch("/api/zodiak-harian")
      .then((res) => res.json())
      .then((data) => setZodiak(data))
  }, [])

  const kategori = [
    "Politik",
    "Internasional",
    "Nasional",
    "Ekonomi",
    "Teknologi",
    "Olahraga",
    "Kesehatan",
    "Pendidikan",
    "Hiburan",
    "Otomotif",
    "Langsa",
    "Loker",
    "Zodiak",
  ]

  return (
    <main className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">LangsaPost</h1>

      {/* Kategori */}
      <div className="flex overflow-x-auto gap-2 mb-6 scrollbar-hide">
        {kategori.map((kat) => (
          <Link
            key={kat}
            href={`/kategori/${kat.toLowerCase()}`}
            className="px-4 py-2 whitespace-nowrap bg-gray-100 dark:bg-gray-800 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {kat}
          </Link>
        ))}
      </div>

      {/* Artikel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {artikel.map((item) => (
          <Link
            key={item.slug}
            href={`/artikel/${item.slug}`}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-xs text-gray-500 mt-2">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Zodiak Harian */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Zodiak Hari Ini</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {zodiak.map((zod: any) => (
            <div
              key={zod.slug}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
            >
              <h3 className="font-bold">{zod.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mt-1">{zod.content}</p>
              <Link
                href={`/zodiak/${zod.slug}`}
                className="text-blue-600 text-xs underline mt-2 inline-block"
              >
                Baca selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}