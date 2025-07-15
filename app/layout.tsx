// app/layout.tsx
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "LangsaPost - Portal Berita Terpercaya",
    template: "%s | LangsaPost",
  },
  description: "Portal berita terkini dari Langsa dan sekitarnya, menyajikan informasi akurat dan terpercaya.",
  metadataBase: new URL("https://langsapost-xi.vercel.app"),
  openGraph: {
    title: "LangsaPost",
    description: "Berita terkini dari Langsa dan sekitarnya.",
    url: "https://langsapost-xi.vercel.app",
    siteName: "LangsaPost",
    images: [
      {
        url: "/og-image.png", // ganti sesuai gambar OG kamu
        width: 1200,
        height: 630,
        alt: "LangsaPost",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LangsaPost",
    description: "Portal berita terkini dan terpercaya dari Langsa.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
