import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white px-4 py-3 shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-600">
        <span className="text-black">Langsa</span>Post
      </h1>
      <Link href="/artikel" className="text-blue-600 hover:underline text-sm">
        Semua Artikel
      </Link>
    </header>
  );
}
