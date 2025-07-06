/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: ['batyohvfirsxgduloyvq.supabase.co'], // tambahkan domain supabase-mu
  },
  // Konfigurasi untuk App Router - tidak perlu exportPathMap
}

export default nextConfig
