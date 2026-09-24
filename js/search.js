/**
 * ==============================================================================
 * FITUR 4: FILTER / SEARCH - PENCARIAN PRODUK REALTIME
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat kolom pencarian (search bar) sederhana. Saat pengguna mengetik sesuatu,
 * halaman hanya akan menampilkan card yang judulnya sesuai dengan teks yang diketik.
 *
 * ------------------------------------------------------------------------------
 * 📝 BAGIAN 1: TUGAS HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Di bagian bawah tag <header>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 4: SEARCH BAR & COUNTER PRODUK] -->
 *    di dalam tag <div id="search-section" ...>.
 *
 * 🏷️ REKOMENDASI STRUKTUR HTML YANG PERLU KAMU BUAT:
 *    Tambahkan tag <input> search bar berikut di dalam slot tersebut:
 *
 *    <div class="relative flex-1 max-w-md">
 *      <input 
 *        type="text" 
 *        id="search-input" 
 *        placeholder="🔍 Cari produk (contoh: ayam, headphone, ultrabook, galaxy)..." 
 *        class="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
 *      />
 *    </div>
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/search.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil elemen input pencarian:
 *    const searchInput = document.getElementById('search-input');
 * 3. Pasang event listener 'input' pada elemen search input (terpicu saat mengetik):
 *    searchInput.addEventListener('input', (event) => { ... });
 * 4. Di dalam fungsi event listener:
 *    a. Ambil nilai ketikan pengguna, ubah ke huruf kecil dan hapus spasi berlebih:
 *       const keyword = event.target.value.toLowerCase().trim();
 *    b. Ambil semua elemen kartu produk di halaman:
 *       const cards = document.querySelectorAll('.product-card');
 *    c. Loop setiap kartu dengan .forEach():
 *       cards.forEach((card) => {
 *         // Ambil judul produk di dalam kartu
 *         const title = card.querySelector('.product-title').textContent.toLowerCase();
 *         // Periksa apakah judul mengandung kata kunci yang diketik
 *         if (title.includes(keyword)) {
 *           card.classList.remove('hidden'); // Tampilkan jika cocok
 *         } else {
 *           card.classList.add('hidden');    // Sembunyikan jika tidak cocok
 *         }
 *       });
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const keyword = event.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.product-card');

            cards.forEach((card) => {
                const titleElement = card.querySelector('.product-title');
                if (titleElement) {
                    const title = titleElement.textContent.toLowerCase();
                    if (title.includes(keyword)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    }
});

