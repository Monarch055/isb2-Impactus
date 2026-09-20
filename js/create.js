/**
 * ==============================================================================
 * FITUR 1: CREATE / DOM - FORM TAMBAH PRODUK BARU
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat form input (misal: input nama, kategori, harga, link gambar, deskripsi)
 * untuk menambahkan card baru secara dinamis ke dalam halaman menggunakan Manipulasi DOM.
 *
 * ------------------------------------------------------------------------------
 * 📝 BAGIAN 1: TUGAS HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI 1 (Tombol Tambah Produk di Header):
 *    Buka file index.html. Di dalam tag <header>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 5 & FITUR 1: TOMBOL AKSI HEADER] -->
 *    Tambahkan tag <button> berikut di dalam div tersebut:
 *
 *    <button id="btn-open-create-modal" type="button" class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white shadow-sm transition" title="Tambah Produk Baru">
 *      <span>➕ Tambah Produk</span>
 *    </button>
 *
 * 📍 LOKASI 2 (Wadah Modal Form Tambah Produk):
 *    Di bagian bawah file index.html sebelum tag <footer>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 1: WADAH FORM / MODAL TAMBAH PRODUK] -->
 *    Tambahkan kerangka modal form berikut:
 *
 *    <div id="modal-create" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
 *      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
 *        <button id="btn-close-create" type="button" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg">✕</button>
 *        <h2 class="text-xl font-bold mb-4">Tambah Produk Baru</h2>
 *        <form id="form-create-product" class="flex flex-col gap-3">
 *          <input type="text" id="input-name" required placeholder="Nama Produk" class="w-full px-3 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
 *          <input type="text" id="input-price" required placeholder="Harga (misal: Rp 150.000)" class="w-full px-3 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
 *          <input type="url" id="input-image" placeholder="URL Link Gambar" class="w-full px-3 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
 *          <textarea id="input-desc" placeholder="Deskripsi Singkat" class="w-full px-3 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"></textarea>
 *          <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2.5 rounded-xl shadow-md transition">Simpan Produk</button>
 *        </form>
 *      </div>
 *    </div>
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/create.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Logika Buka / Tutup Modal Form:
 *    - Ambil tombol #btn-open-create-modal dan modal #modal-create.
 *    - Saat tombol diklik, hilangkan class 'hidden' dari modal.
 *    - Saat tombol #btn-close-create diklik, tambahkan kembali class 'hidden'.
 * 3. Logika Submit Form:
 *    - Ambil elemen form: const form = document.getElementById('form-create-product');
 *    - Pasang event listener 'submit' pada form:
 *      form.addEventListener('submit', (event) => {
 *        event.preventDefault(); // Cegah reload browser!
 *        // a. Ambil nilai dari input:
 *        const name = document.getElementById('input-name').value;
 *        const price = document.getElementById('input-price').value;
 *        const image = document.getElementById('input-image').value || 'images/Laptop.jfif';
 *        const desc = document.getElementById('input-desc').value;
 *        // b. Buat elemen card baru dengan DOM:
 *        const newCard = document.createElement('article');
 *        newCard.className = 'product-card group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full';
 *        newCard.innerHTML = `
 *          <figure class="h-48 w-full bg-slate-50 flex items-center justify-center p-3">
 *            <img src="${image}" alt="${name}" class="h-full w-full object-contain" />
 *          </figure>
 *          <div class="p-4 flex flex-col flex-grow justify-between gap-3">
 *            <h3 class="product-title font-bold text-base">${name}</h3>
 *            <p class="product-desc text-xs text-slate-500 line-clamp-2">${desc}</p>
 *            <span class="product-price font-bold text-indigo-600">${price}</span>
 *          </div>
 *        `;
 *        // c. Tempelkan kartu baru ke kontainer grid:
 *        document.getElementById('product-grid').appendChild(newCard);
 *        // d. Reset form dan tutup modal:
 *        form.reset();
 *        document.getElementById('modal-create').classList.add('hidden');
 *      });
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi DOM (document.createElement dan .appendChild()).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

