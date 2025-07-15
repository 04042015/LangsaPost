import "./globals.css"

export const metadata = {
  title: "LangsaPost",
  description: "Portal berita Langsa",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
