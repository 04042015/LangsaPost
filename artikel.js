
// Artikel dummy - ini bisa diganti dinamis pakai JSON/API Netlify di masa depan
const artikel = [
  {
    title: "Ketegangan Memuncak: Perang Iran dan Israel Meletus di Timur Tengah",
    date: "20 Juni 2025",
    category: "Internasional",
    excerpt: "Konflik berkepanjangan antara Iran dan Israel kini berubah menjadi perang terbuka...",
    thumbnail: "/assets/images/perang-iran-israel.jpg",
    link: "#"
  }
];

// Menampilkan ke dalam HTML
const container = document.getElementById("artikel-container");

artikel.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.thumbnail}" alt="Thumbnail" />
    <div class="card-content">
      <h3>${item.title}</h3>
      <p><strong>Kategori:</strong> ${item.category} • ${item.date}</p>
      <p>${item.excerpt}</p>
    </div>
  `;
  container.appendChild(card);
});
