// app/layout.tsx
export const metadata = {
  title: 'LangsaPost',
  description: 'Portal Berita Langsa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
