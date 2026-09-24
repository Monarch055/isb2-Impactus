/**
 * ==============================================================================
 * FITUR 3: INTERACTIVITY - TOMBOL LIKE / FAVORITE
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Menambahkan tombol "Like" atau "Favorite" di setiap card produk. Saat tombol diklik,
 * angkanya bertambah atau ikonnya berubah warna (Event Handling).
 *
 * ------------------------------------------------------------------------------
 * 📝 BAGIAN 1: PANDUAN HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Pada setiap kartu produk (Slot A sampai Slot E), temukan komentar:
 *    <!-- [SLOT KARTU ...: FITUR 3 (LIKE) & FITUR 2 (DELETE)] -->
 *    di dalam tag <div class="card-actions ...">.
 *
 * 💡 IDE BENTUK & STYLING HTML/CSS (Bebas Berkreasi!):
 *    - Elemen Wajib: Buat tag <button> yang memiliki class "btn-like".
 *    - Konten di Dalam Tombol:
 *      * Siapkan ikon hati (bisa menggunakan emoji ❤️ / 🤍, atau ikon SVG hati) dan beri class "heart-icon".
 *      * Siapkan elemen angka (misalnya tag <span>) dengan class "like-count" untuk menampilkan angka like (mulai dari 0 atau angka awal).
 *    - Ide Tampilan & Desain:
 *      * Bentuk: Bebas! Bisa dibuat lingkaran melayang (gunakan class `rounded-full p-1.5`), atau kapsul memanjang kecil (`rounded-xl px-2 py-1`).
 *      * Warna: Beri warna netral saat belum di-like (seperti abu-abu `text-slate-400`), dan warna cerah saat di-hover/aktif (seperti merah `hover:text-red-500` atau latar pink lembut `bg-rose-50`).
 *      * Animasi Interaksi: Tambahkan class transisi seperti `transition duration-200 active:scale-90` agar tombol membal/mengecil sesaat ketika dipencet.
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/like.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil semua tombol like yang memiliki class '.btn-like':
 *    const likeButtons = document.querySelectorAll('.btn-like');
 * 3. Lakukan perulangan pada setiap tombol like menggunakan .forEach():
 *    likeButtons.forEach((button) => { ... });
 * 4. Pasang event listener 'click' pada masing-masing tombol:
 *    button.addEventListener('click', (event) => { ... });
 * 5. Di dalam fungsi callback klik:
 *    a. Temukan elemen angka (.like-count) dan ikon (.heart-icon) di dalam tombol yang diklik.
 *    b. Ambil angka saat ini lalu ubah ke tipe angka (parseInt).
 *    c. Cek apakah tombol sedang aktif/sudah di-like (misal dengan button.classList.contains('is-liked')).
 *    d. Jika BELUM di-like:
 *       - Tambahkan nilainya (+1).
 *       - Tandai tombolnya (button.classList.add('is-liked')).
 *       - Ubah warna ikon hati jadi merah (misal: tambah class 'text-red-500').
 *    e. Jika SUDAH di-like (klik kedua untuk batal):
 *       - Kurangi nilainya (-1).
 *       - Hapus tandanya (button.classList.remove('is-liked')).
 *       - Kembalikan warna ikon hati ke warna semula.
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    const likeBtn = event.target.closest(".btn-like");
    if (!likeBtn) return;
    const countElement = likeBtn.querySelector(".like-count");
    const iconElement = likeBtn.querySelector(".like-icon");
    let currentCount = parseInt(countElement.textContent) || 0;
    const isLiked = likeBtn.classList.contains("is-liked");

    if (!isLiked) {
      //Turn On
      likeBtn.classList.add("is-liked");
      countElement.textContent = currentCount + 1;
      // Mengubah tombol
      likeBtn.classList.add("text-rose-500");
      likeBtn.classList.remove("text-slate-600", "dark:text-slate-300");
      if (iconElement) {
        iconElement.setAttribute("fill", "currentColor");
      }
    } else {
      // Mode Off
      likeBtn.classList.remove("is-liked");
      countElement.textContent = currentCount - 1;
      // Mengembalikan tombol
      likeBtn.classList.remove("text-rose-500");
      likeBtn.classList.add("text-slate-600", "dark:text-slate-300");
      if (iconElement) {
        iconElement.setAttribute("fill", "none");
      }
    }
  });
});

