document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("artikel-list");
  const artikelContainer = document.getElementById("konten-artikel");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id && artikelContainer) {
    fetch(`artikel/${id}.md`)
      .then(res => {
        if (!res.ok) throw new Error("Artikel tidak ditemukan.");
        return res.text();
      })
      .then(md => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(md);
        artikelContainer.innerHTML = html;
      })
      .catch(err => {
        artikelContainer.innerHTML = `<p>${err.message}</p>`;
      });
  }

  if (listContainer) {
    const artikelList = ["2025-06-18-perang-iran-israel.md"];
    artikelList.forEach(filename => {
      const slug = filename.replace(/\.md$/, "");
      const judul = slug.split("-").slice(3).join(" ");
      const link = document.createElement("a");
      link.href = `artikel.html?id=${slug}`;
      link.textContent = judul;
      link.style.display = "block";
      listContainer.appendChild(link);
    });
  }
});