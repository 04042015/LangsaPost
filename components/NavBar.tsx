// components/NavBar.tsx
'use client';
import Link from 'next/link';

const categories = [
  'Politik', 'Ekonomi', 'Olahraga', 'Teknologi', 'Internasional',
  'Nasional', 'Kesehatan', 'Pendidikan', 'Hiburan', 'Otomotif',
  'Langsa', 'Loker', 'Zodiak'
];

export default function NavBar() {
  return (
    <nav className="bg-black text-white px-4 py-2 overflow-x-auto">
      <div className="flex space-x-4 whitespace-nowrap text-sm font-medium">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/kategori/${category.toLowerCase()}`}
            className="hover:underline hover:underline-offset-4 transition duration-200"
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}
