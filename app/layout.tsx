import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LangsaPost - Portal Berita Terpercaya",
  description: "Menyajikan berita terkini dan terpercaya dari berbagai bidang untuk masyarakat Indonesia",
  keywords: "berita, news, indonesia, politik, ekonomi, olahraga, teknologi",
  authors: [{ name: "LangsaPost Team" }],
  openGraph: {
    title: "LangsaPost - Portal Berita Terpercaya",
    description: "Menyajikan berita terkini dan terpercaya dari berbagai bidang untuk masyarakat Indonesia",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
