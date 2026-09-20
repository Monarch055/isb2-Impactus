/**
 * ==============================================================================
 * FITUR 2: DELETE / DOM - TOMBOL HAPUS KARTU
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Menambahkan tombol "Hapus" pada setiap card yang berfungsi untuk menghilangkan
 * elemen card tersebut dari halaman ketika diklik menggunakan Manipulasi DOM.
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
 *    <button type="button" class="btn-delete flex items-center justify-center p-1 text-slate-400 hover:text-rose-600 transition active:scale-95" title="Hapus Produk">
 *      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 *        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
 *      </svg>
 *    </button>
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/delete.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil semua tombol hapus dengan class '.btn-delete':
 *    const deleteButtons = document.querySelectorAll('.btn-delete');
 * 3. Loop semua tombol hapus menggunakan .forEach():
 *    deleteButtons.forEach((button) => { ... });
 * 4. Pasang event listener 'click' pada masing-masing tombol:
 *    button.addEventListener('click', (event) => { ... });
 * 5. Di dalam fungsi event listener:
 *    a. Cegah event bubbling dengan event.stopPropagation().
 *    b. Temukan elemen kartu induk terdekat menggunakan method:
 *       const card = button.closest('.product-card');
 *    c. (Opsional tapi bagus) Tampilkan konfirmasi dialog dengan:
 *       const setuju = confirm("Apakah Anda yakin ingin menghapus kartu ini?");
 *    d. Jika pengguna setuju (if (setuju)):
 *       - Hapus elemen kartu tersebut dari DOM menggunakan: card.remove();
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi DOM (misal .remove()).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

