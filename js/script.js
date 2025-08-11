// Data menu (simpan di JS sebagai placeholder)
const menuItems = [
  { id: 1, name: "Nasi Goreng", price: 10000, image: "nasi-goreng.jpg" },
  { id: 2, name: "Mie Ayam", price: 8000, image: "mie-ayam.jpg" },
];

// Tampilkan menu di halaman beranda
function displayMenuHighlights() {
  const container = document.querySelector('.menu-highlight');
  menuItems.slice(0, 3).forEach(item => {  // Ambil 3 item pertama
    container.innerHTML += `
      <div class="menu-item">
        <img src="images/${item.image}" alt="${item.name}" width="100">
        <h3>${item.name}</h3>
        <p>Rp ${item.price.toLocaleString()}</p>
      </div>
    `;
  });
}

// Jalankan saat halaman dimuat
window.onload = displayMenuHighlights;