"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import MdEditor from "react-markdown-editor-lite"
import MarkdownIt from "markdown-it"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

const mdParser = new MarkdownIt()
const supabase = createClient()

export default function TambahArtikel() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const router = useRouter()

  const handleImageUpload = async (file: File) => {
    const fileExt = file.name.split(".").pop()
    const filePath = `artikel/${Date.now()}.${fileExt}`

    const { data, error } = await supabase.storage.from("artikel-images").upload(filePath, file)

    if (error) {
      toast({ title: "Gagal upload gambar", description: error.message, variant: "destructive" })
      return Promise.reject(error)
    }

    const { data: urlData } = supabase.storage.from("artikel-images").getPublicUrl(filePath)
    return urlData.publicUrl
  }

  const handleSubmit = async () => {
    if (!title || !content || !author) {
      toast({ title: "Harap isi semua field", variant: "destructive" })
      return
    }

    const { error } = await supabase.from("artikel").insert({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      category,
      content,
      author,
      status: "draft",
      views: 0,
      featured: false,
    })

    if (error) {
      toast({ title: "Gagal menyimpan", description: error.message, variant: "destructive" })
    } else {
      toast({ title: "Berhasil disimpan", description: "Artikel ditambahkan" })
      router.push("/admin")
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tambah Artikel</h1>
      <div className="space-y-4">
        <Input placeholder="Judul Artikel" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Kategori" value={category} onChange={(e) => setCategory(e.target.value)} />
        <Input placeholder="Penulis" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <MdEditor
          value={content}
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setContent(text)}
          onImageUpload={handleImageUpload}
        />

        <Button onClick={handleSubmit} className="bg-red-500 hover:bg-red-600">
          Simpan Artikel
        </Button>
      </div>
    </div>
  )
}
