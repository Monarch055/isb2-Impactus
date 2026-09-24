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
 * 📝 BAGIAN 1: PANDUAN HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Di bagian bawah tag <header>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 4: SEARCH BAR & COUNTER PRODUK] -->
 *    di dalam tag <div id="search-section" ...>.
 *
 * 💡 IDE BENTUK & STYLING HTML/CSS (Bebas Berkreasi!):
 *    - Elemen Wajib: Buat tag <input type="text"> yang memiliki atribut id="search-input".
 *    - Teks Petunjuk (Placeholder): Tuliskan kalimat bantuan yang jelas, misalnya `placeholder="Cari produk impianmu..."`.
 *    - Ide Tampilan & Desain:
 *      * Bentuk Modern Pill: Input dibuat rounded penuh (`rounded-full px-5 py-2.5`) dengan border abu-abu halus (`border border-slate-200 dark:border-slate-800`).
 *      * Bentuk Kotak Elegan: Input kotak melengkung (`rounded-xl px-4 py-2.5`) dengan lebar yang nyaman di mata (misal dibatasi `max-w-md w-full`).
 *      * Efek Fokus (Focus Ring): Berikan highlight saat kolom diklik pengguna, seperti `focus:ring-2 focus:ring-indigo-500 focus:outline-none`.
 *      * Hiasan Ikon: Kamu bisa menambahkan ikon kaca pembesar (🔍 atau ikon SVG search) di dalam atau di samping input.
 *      * (Opsional Tambahan): Tambahkan teks counter di samping input (misal tag <span> dengan id="product-count") untuk menampilkan jumlah produk yang ditemukan.
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/search.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil elemen input pencarian:
 *    const searchInput = document.getElementById('search-input');
 * 3. Pasang event listener 'input' pada elemen input tersebut (event 'input' akan otomatis terpicu setiap ada huruf baru yang diketik):
 *    searchInput.addEventListener('input', (event) => { ... });
 * 4. Di dalam fungsi callback input:
 *    a. Ambil nilai ketikan pengguna, ubah ke huruf kecil dan buang spasi ujung:
 *       const keyword = event.target.value.toLowerCase().trim();
 *    b. Ambil seluruh elemen kartu produk di halaman:
 *       const cards = document.querySelectorAll('.product-card');
 *    c. Loop setiap kartu dengan .forEach():
 *       cards.forEach((card) => {
 *         // Ambil teks judul produk di dalam kartu
 *         const title = card.querySelector('.product-title').textContent.toLowerCase();
 *         // Periksa kecocokan menggunakan method .includes()
 *         if (title.includes(keyword)) {
 *           card.classList.remove('hidden'); // Munculkan kartu jika cocok
 *         } else {
 *           card.classList.add('hidden');    // Sembunyikan kartu jika tidak cocok
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

    searchInput.addEventListener('input', (event) => {
        const keyword = event.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.product-card');

        cards.forEach((card) => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(keyword)) {
                card.classList.remove('hidden'); // ✅ BENAR (gunakan 'card' tunggal)
            }
            else {
                card.classList.add('hidden');    // ✅ BENAR (gunakan 'card' tunggal)
            }
        });
    });
});



