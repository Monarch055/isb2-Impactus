/**
 * ==============================================================================
 * FITUR 6: MODAL / POPUP - DETAIL INFORMASI PRODUK
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat fitur Pop-up Modal. Jika gambar atau tombol pada card diklik, akan muncul
 * kotak pop-up di layar yang berisi detail informasi produk, dan memiliki tombol "X"
 * untuk menutupnya.
 *
 * ------------------------------------------------------------------------------
 * 📝 BAGIAN 1: PANDUAN HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI 1 (Tombol Detail di Setiap Kartu):
 *    Buka file index.html. Pada footer setiap kartu (Slot A sampai Slot E), temukan komentar:
 *    <!-- [SLOT KARTU ...: FITUR 6 (MODAL DETAIL)] -->
 *
 * 💡 IDE BENTUK & STYLING TOMBOL DETAIL:
 *    - Elemen Wajib: Buat tag <button> dengan class "btn-detail".
 *    - Tampilan:
 *      * Model Ikon Kotak: Tombol kecil persegi bersudut melengkung (`rounded-xl p-2 bg-slate-100 dark:bg-slate-800`) berisi ikon mata (👁️ atau SVG eye).
 *      * Model Tombol Berlabel: Tombol bertuliskan "Detail" atau "Lihat Info" dengan border halus (`border border-slate-200 text-xs font-medium px-3 py-2`).
 *      * Posisikan berdampingan secara rapi di samping tombol "Beli Sekarang".
 *
 * 📍 LOKASI 2 (Wadah Modal Popup):
 *    Di bagian bawah file index.html sebelum tag <footer>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 6: WADAH POPUP MODAL DETAIL] -->
 *
 * 💡 IDE BENTUK & STYLING WADAH MODAL (POPUP):
 *    - Wadah Latar Belakang (Backdrop Overlay):
 *      * Buat tag <div> dengan atribut id="modal-detail" dan class "hidden" (wajib ada class 'hidden' agar tersembunyi saat awal).
 *      * Berikan efek gelap tembus pandang menutupi seluruh layar: `fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4`.
 *    - Kotak Dialog Isi Modal:
 *      * Di dalam backdrop, buat kotak konten dialog dengan kartu putih/gelap melayang (`bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative`).
 *      * Elemen-elemen yang perlu kamu sediakan di dalam kotak dialog:
 *        1. Tombol Tutup: tag <button id="btn-close-modal"> (bisa berupa tanda silang '✕' di pojok kanan atas).
 *        2. Gambar Produk: tag <img id="modal-image"> dengan tinggi yang cukup lega (misal `h-44 object-contain`).
 *        3. Judul Produk: tag <h3 id="modal-title"> dengan font tebal (`text-xl font-bold`).
 *        4. Deskripsi Lengkap: tag <p id="modal-desc"> dengan ukuran teks nyaman dibaca (`text-sm leading-relaxed`).
 *        5. Harga Produk: tag <span id="modal-price"> dengan warna mencolok (`text-lg font-extrabold text-indigo-600`).
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/modal.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil elemen wadah modal (#modal-detail), tombol close (#btn-close-modal), dan semua tombol detail (.btn-detail):
 *    const modal = document.getElementById('modal-detail');
 *    const btnClose = document.getElementById('btn-close-modal');
 *    const detailButtons = document.querySelectorAll('.btn-detail');
 * 3. Loop semua tombol detail menggunakan .forEach():
 *    detailButtons.forEach((btn) => {
 *      btn.addEventListener('click', (event) => {
 *        // a. Temukan kartu induk terdekat tempat tombol ini berada:
 *        const card = btn.closest('.product-card');
 *        // b. Ambil informasi dari dalam kartu tersebut:
 *        const title = card.querySelector('.product-title').textContent;
 *        const img = card.querySelector('figure img').src;
 *        const desc = card.querySelector('.product-desc').textContent;
 *        const price = card.querySelector('.product-price').textContent;
 *        // c. Pindahkan data-data tersebut ke dalam elemen modal:
 *        document.getElementById('modal-title').textContent = title;
 *        document.getElementById('modal-image').src = img;
 *        document.getElementById('modal-desc').textContent = desc;
 *        document.getElementById('modal-price').textContent = price;
 *        // d. Tampilkan modal ke layar dengan menghapus class 'hidden':
 *        modal.classList.remove('hidden');
 *      });
 *    });
 * 4. Tambahkan event listener pada tombol close untuk menutup modal:
 *    btnClose.addEventListener('click', () => {
 *      modal.classList.add('hidden'); // Sembunyikan kembali modal
 *    });
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-detail');
    const btnClose = document.getElementById('btn-close-modal');
    const detailButtons = document.querySelectorAll('.btn-detail');

    detailButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const card = btn.closest('.product-card');
            const title = card.querySelector('.product-title').textContent;
            const img = card.querySelector('figure img').src;
            const desc = card.querySelector('.product-desc').textContent;
            const price = card.querySelector('.product-price').textContent;

            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-image').src = img;
            document.getElementById('modal-desc').textContent = desc;
            document.getElementById('modal-price').textContent = price;

            modal.classList.remove('hidden');
        });
    });

    btnClose.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

});
