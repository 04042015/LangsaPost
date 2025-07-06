"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [status, setStatus] = useState("draft");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    let image_url = "";

    // Upload gambar jika ada
    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { data, error } = await supabase.storage
        .from("image")
        .upload(fileName, imageFile);

      if (error) {
        setErrorMessage("Gagal upload gambar");
        return;
      }

      image_url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/image/${fileName}`;
    }

    // Simpan artikel ke Supabase
    const { data, error } = await supabase.from("articles").insert([
      {
        title,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        category,
        author,
        content,
        image_url,
        status,
        featured: false,
        views: 0,
      },
    ]);

    if (error) {
      setErrorMessage("Gagal menyimpan artikel");
    } else {
      setSuccessMessage("Artikel berhasil disimpan!");
      setTitle("");
      setCategory("");
      setAuthor("");
      setContent("");
      setImageFile(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Artikel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul"
          className="w-full border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Pilih Kategori</option>
          <option value="Politik">Politik</option>
          <option value="Ekonomi">Ekonomi</option>
          <option value="Olahraga">Olahraga</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Internasional">Internasional</option>
          <option value="Nasional">Nasional</option>
          <option value="Hiburan">Hiburan</option>
          <option value="Kesehatan">Kesehatan</option>
          <option value="Pendidikan">Pendidikan</option>
          <option value="Otomotif">Otomotif</option>
          <option value="Langsa">Langsa</option>
          <option value="Loker">Loker</option>
          <option value="Zodiak">Zodiak</option>
        </select>

        <input
          type="text"
          placeholder="Penulis"
          className="w-full border p-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <textarea
          placeholder="Isi Artikel"
          className="w-full border p-2"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border p-2"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setImageFile(e.target.files[0]);
            }
          }}
        />

        <button
          type="submit"
          className="bg-langsapost-600 text-white px-4 py-2 rounded hover:bg-langsapost-700"
        >
          Simpan Artikel
        </button>

        {successMessage && (
          <p className="text-green-600 font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
