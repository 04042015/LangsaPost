const form = document.getElementById("formArtikel");
const listAdminArtikel = document.getElementById("listAdminArtikel");
let artikelAdmin = JSON.parse(localStorage.getItem("adminArtikel")) || [];

function renderAdminArtikel() {
  listAdminArtikel.innerHTML = "";
  artikelAdmin.forEach((a, i) => {
    const el = document.createElement("div");
    el.classList.add("artikel");
    el.innerHTML = \`
      <h3><a href="artikel.html?id=local-\${i}">\${a.judul}</a></h3>
      <small>\${a.tanggal} - \${a.kategori}</small>
      <p>\${a.deskripsi}</p>
    \`;
    listAdminArtikel.appendChild(el);
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const artikel = {
    judul: document.getElementById("judul").value,
    kategori: document.getElementById("kategori").value,
    tanggal: document.getElementById("tanggal").value,
    gambar: document.getElementById("gambar").value,
    deskripsi: document.getElementById("deskripsi").value
  };
  artikelAdmin.push(artikel);
  localStorage.setItem("adminArtikel", JSON.stringify(artikelAdmin));
  renderAdminArtikel();
  form.reset();
};

renderAdminArtikel();
