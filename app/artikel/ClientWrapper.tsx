"use client"

import dynamic from "next/dynamic"
import type { Article } from "./types" // kamu bisa pindahkan interface ke file types.ts agar bersih

const ArtikelClient = dynamic(() => import("./ArtikelClient"), { ssr: false })

export default function ClientWrapper({ articles }: { articles: Article[] }) {
  return <ArtikelClient articles={articles} />
}
