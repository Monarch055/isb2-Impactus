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
 * 📝 BAGIAN 1: TUGAS HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Pada setiap kartu produk (Slot A sampai Slot E), temukan komentar:
 *    <!-- [SLOT KARTU ...: FITUR 3 (LIKE) & FITUR 2 (DELETE)] -->
 *    di dalam tag <div class="card-actions ...">.
 *
 * 🏷️ REKOMENDASI STRUKTUR HTML YANG PERLU KAMU BUAT:
 *    Tambahkan tag <button> berikut di dalam slot tersebut pada ke-5 kartu:
 *
 *    <button type="button" class="btn-like flex items-center justify-center p-1 text-slate-400 hover:text-red-500 transition active:scale-95" title="Sukai Produk">
 *      <svg class="heart-icon w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
 *        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
 *      </svg>
 *      <span class="like-count text-[11px] font-bold ml-1 text-slate-600 dark:text-slate-300">0</span>
 *    </button>
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/like.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil semua tombol like dengan class '.btn-like':
 *    const likeButtons = document.querySelectorAll('.btn-like');
 * 3. Loop semua tombol like menggunakan perulangan .forEach():
 *    likeButtons.forEach((button) => { ... });
 * 4. Pasang event listener 'click' pada masing-masing tombol:
 *    button.addEventListener('click', (event) => { ... });
 * 5. Di dalam fungsi event listener:
 *    a. Ambil elemen angka (.like-count) dan ikon (.heart-icon) di dalam tombol yang diklik.
 *    b. Ambil nilai angka saat ini dan ubah ke integer (parseInt).
 *    c. Cek apakah tombol sudah aktif di-like (misal cek button.classList.contains('is-liked')).
 *    d. Jika BELUM di-like:
 *       - Tambahkan angka (+1).
 *       - Tandai tombol (button.classList.add('is-liked')).
 *       - Ubah warna ikon hati jadi merah (tambah class 'text-red-500').
 *    e. Jika SUDAH di-like (klik kedua kali):
 *       - Kurangi angka (-1).
 *       - Hapus tanda (button.classList.remove('is-liked')).
 *       - Kembalikan warna ikon hati semula.
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

