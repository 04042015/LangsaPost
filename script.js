// Mode gelap
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Load artikel dari JSON
fetch("artikel.json")
  .then(res => res.json())
  .then(data => {
    const artikelList = document.getElementById("artikelList");
    const artikelPopuler = document.getElementById("artikelPopuler");
    const slider = document.getElementById("slider");

    data.forEach((artikel, i) => {
      const card = `
        <div class="artikel">
          <h3><a href="artikel.html?id=${i}">${artikel.judul}</a></h3>
          <small>${artikel.tanggal} - ${artikel.kategori}</small>
          <p>${artikel.deskripsi}</p>
        </div>
      `;
      artikelList.innerHTML += card;
      if (i < 2) artikelPopuler.innerHTML += card;
      if (i < 3) {
        slider.innerHTML += `
          <div class="item">
            <img src="${artikel.gambar}" />
            <div class="caption">
              <h3><a href="artikel.html?id=${i}">${artikel.judul}</a></h3>
            </div>
          </div>
        `;
      }
    });

    // Auto-slider
    let index = 0;
    setInterval(() => {
      const items = document.querySelectorAll(".slider .item");
      if (items.length > 0) {
        index = (index + 1) % items.length;
        items[index].scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);
  });


function filterKategori() {
  const kategori = document.getElementById("kategori-filter").value;
  fetch("artikel.json")
    .then(response => response.json())
    .then(data => tampilkanArtikel(data, kategori));
}

function tampilkanArtikel(data, kategori = null) {
  const container = document.getElementById("daftar-artikel");
  container.innerHTML = "";

  data.forEach((artikel) => {
    if (!kategori || artikel.kategori === kategori) {
      const div = document.createElement("div");
      div.classList.add("artikel");
      div.innerHTML = `
        <h2>${artikel.judul}</h2>
        <p><strong>Penulis:</strong> ${artikel.penulis} | <strong>Tanggal:</strong> ${artikel.tanggal} | <strong>Kategori:</strong> ${artikel.kategori}</p>
        <p>${artikel.isi}</p>
      `;
      container.appendChild(div);
    }
  });
}



function cariArtikel() {
  const input = document.getElementById("pencarian").value.toLowerCase();
  fetch("artikel.json")
    .then(response => response.json())
    .then(data => {
      const hasil = data.filter(artikel =>
        artikel.judul.toLowerCase().includes(input) ||
        artikel.isi.toLowerCase().includes(input) ||
        artikel.kategori.toLowerCase().includes(input)
      );
      tampilkanArtikel(hasil);
    });
}
