// components/NavBar.tsx
import Link from 'next/link';

const categories = [
  'Politik', 
  'Internasional', 
  'Nasional', 
  'Ekonomi', 
  'Teknologi',
  'Olahraga', 
  'Kesehatan', 
  'Pendidikan', 
  'Hiburan',
  'Otomotif',
  'Langsa', 
  'Loker', 
  'Zodiak'
];

export default function NavBar() {
  return (
    <nav className="bg-black text-white px-4 py-2 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/kategori/${cat.toLowerCase()}`}
            className="hover:underline text-sm capitalize"
          >
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}
