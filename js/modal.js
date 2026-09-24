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
 * 📝 BAGIAN 1: TUGAS HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI 1 (Tombol di Setiap Kartu):
 *    Buka file index.html. Pada footer setiap kartu (Slot A sampai Slot E), temukan komentar:
 *    <!-- [SLOT KARTU ...: FITUR 6 (MODAL DETAIL)] -->
 *    Tambahkan tag <button> detail ini di samping tombol "Beli Sekarang":
 *
 *    <button type="button" class="btn-detail p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition active:scale-95" title="Lihat Detail Produk">
 *      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 *        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
 *        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
 *      </svg>
 *    </button>
 *
 * 📍 LOKASI 2 (Wadah Modal Popup):
 *    Di bagian bawah file index.html sebelum tag <footer>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 6: WADAH POPUP MODAL DETAIL] -->
 *    Tambahkan kerangka modal berikut (awalnya tersembunyi dengan class 'hidden'):
 *
 *    <div id="modal-detail" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
 *      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
 *        <button id="btn-close-modal" type="button" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg">✕</button>
 *        <img id="modal-image" src="" alt="Detail Produk" class="h-44 w-full object-contain mb-4" />
 *        <h3 id="modal-title" class="text-xl font-bold text-slate-900 dark:text-white mb-2">Nama Produk</h3>
 *        <p id="modal-desc" class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Deskripsi produk...</p>
 *        <span id="modal-price" class="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">Rp 0</span>
 *      </div>
 *    </div>
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/modal.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil elemen modal, tombol close, dan semua tombol detail:
 *    const modal = document.getElementById('modal-detail');
 *    const btnClose = document.getElementById('btn-close-modal');
 *    const detailButtons = document.querySelectorAll('.btn-detail');
 * 3. Loop setiap tombol detail dengan .forEach():
 *    detailButtons.forEach((btn) => {
 *      btn.addEventListener('click', (event) => {
 *        // a. Temukan kartu induk terdekat:
 *        const card = btn.closest('.product-card');
 *        // b. Ambil data dari dalam kartu (judul, gambar, deskripsi, harga):
 *        const title = card.querySelector('.product-title').textContent;
 *        const img = card.querySelector('figure img').src;
 *        const desc = card.querySelector('.product-desc').textContent;
 *        const price = card.querySelector('.product-price').textContent;
 *        // c. Masukkan data ke dalam elemen modal:
 *        document.getElementById('modal-title').textContent = title;
 *        document.getElementById('modal-image').src = img;
 *        document.getElementById('modal-desc').textContent = desc;
 *        document.getElementById('modal-price').textContent = price;
 *        // d. Tampilkan modal:
 *        modal.classList.remove('hidden');
 *      });
 *    });
 * 4. Tambahkan event listener untuk tombol tutup:
 *    btnClose.addEventListener('click', () => {
 *      modal.classList.add('hidden'); // Sembunyikan modal
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

});
