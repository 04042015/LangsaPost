/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // ubah jadi false agar bisa pakai <Image />
    domains: ['batyohvfirsxgduloyvq.supabase.co'], // tambahkan ini
  },
}

export default nextConfig
