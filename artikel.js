// Menggunakan marked.js untuk parse markdown
document.write('<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>');

document.addEventListener("DOMContentLoaded", function () {
  const artikelContainer = document.getElementById("artikel-container");
  const kategoriAktif = typeof kategori !== "undefined" ? kategori : null;

  fetch("/artikel/index.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        if (kategoriAktif && item.kategori !== kategoriAktif) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = \`
          <h3><a href="/artikel/\${item.slug}.html">\${item.title}</a></h3>
          <p><em>Kategori: \${item.kategori} - \${new Date(item.date).toLocaleDateString()}</em></p>
          <p>\${item.excerpt}</p>
        \`;

        artikelContainer.appendChild(card);
      });
    });
});