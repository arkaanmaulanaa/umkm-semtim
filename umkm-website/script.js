
const produkList = [
  {
    nama: "Kue Kering Bu Nana",
    harga: "Rp25.000",
    deskripsi: "Kue renyah buatan rumahan, tanpa bahan pengawet.",
    gambar: "images/produk1.jpg"
  },
  {
    nama: "Es Teh Warga",
    harga: "Rp3.000",
    deskripsi: "Minuman sederhana, rasa yang akrab. Es Teh Warga — teman ngobrol sejati.",
    gambar: "images/produk2.jpeg"
  },
  {
    nama: "Soto Sapi Pak Agung",
    harga: "mulai dari Rp15.000",
    deskripsi: "Soto sapi bening dengan daging empuk & bumbu rempah tradisional.",
    gambar: "images/produk3.jpg"
  },
  {
    nama: "Chicken Katsu Bu Rini",
    harga: "mulai dari Rp10.000",
    deskripsi: "Chicken Katsu rumahan dengan tepung crispy, saus spesial dan nasi hangat.",
    gambar: "images/produk4.jpg"
  }
];

const container = document.getElementById("produk-container");
const produkSelect = document.getElementById("produk");

produkList.forEach(p => {
  container.innerHTML += `
    <div class="produk-card">
      <img src="\${p.gambar}" alt="\${p.nama}">
      <h3>\${p.nama}</h3>
      <p>\${p.harga}</p>
      <p>\${p.deskripsi}</p>
    </div>
  `;

  const option = document.createElement("option");
  option.value = p.nama;
  option.textContent = p.nama;
  produkSelect.appendChild(option);
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const produk = document.getElementById("produk").value;
  const jumlah = document.getElementById("jumlah").value;
  const nama = document.getElementById("nama").value;
  const noWA = "6285868586877";

  const pesan = \`Halo, saya ingin memesan:\nProduk: \${produk}\nJumlah: \${jumlah}\nNama: \${nama}\`;
  const link = \`https://wa.me/\${noWA}?text=\${encodeURIComponent(pesan)}\`;
  window.open(link, "_blank");
});
