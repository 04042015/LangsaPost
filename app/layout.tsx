import Header from "@/components/Header"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LangsaPost - Portal Berita Terpercaya Indonesia",
  description: "Menyajikan berita terkini dan terpercaya dari berbagai bidang untuk masyarakat Indonesia. Politik, Ekonomi, Olahraga, Teknologi, dan berita lokal Langsa.",
  keywords: "berita indonesia, news, politik, ekonomi, olahraga, teknologi, langsa, aceh, berita terkini",
  authors: [{ name: "LangsaPost Team" }],
  openGraph: {
    title: "LangsaPost - Portal Berita Terpercaya Indonesia",
    description: "Portal berita terpercaya dengan informasi terkini dari seluruh Indonesia",
    type: "website",
    locale: "id_ID",
    url: "https://langsapost.vercel.app",
    siteName: "LangsaPost",
  },
  twitter: {
    card: "summary_large_image",
    title: "LangsaPost - Portal Berita Terpercaya",
    description: "Berita terkini dan terpercaya dari Indonesia",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192x192.png",
  },
}

export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LangsaPost" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
