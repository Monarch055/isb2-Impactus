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
 * 📝 BAGIAN 1: PANDUAN HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI 1 (Tombol Buka Form di Header):
 *    Buka file index.html. Di dalam tag <header>, temukan komentar:
 *    <!-- [SLOT HTML TOMBOL AKSI HEADER] -->
 *
 * 💡 IDE BENTUK & STYLING TOMBOL TAMBAH:
 *    - Elemen Wajib: Buat tag <button> dengan atribut id="btn-open-create-modal".
 *    - Tampilan: Buat tombol mencolok bernuansa warna brand utama (`bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 py-2 font-semibold text-xs shadow-md`) dengan teks "+ Tambah Produk" atau ikon plus.
 *
 * 📍 LOKASI 2 (Wadah Form Modal):
 *    Di bagian bawah file index.html sebelum tag <footer>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 1: WADAH FORM / MODAL TAMBAH PRODUK] -->
 *
 * 💡 IDE BENTUK & STYLING FORM TAMBAH PRODUK:
 *    - Wadah Modal (Popup): Buat tag <div> dengan id="modal-create" dan class "hidden fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4".
 *    - Kotak Form: Di dalamnya, buat kotak berlatar terang/gelap (`bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative`).
 *    - Elemen Form:
 *      * Tombol Tutup: <button id="btn-close-create" type="button">✕</button> di pojok kanan atas.
 *      * Form Input: Buat tag <form id="form-create-product"> dengan susunan input vertikal rapi (misal gunakan flex flex-col gap-3):
 *        1. Input Nama Produk: <input type="text" id="input-name" required placeholder="Nama Produk">
 *        2. Input Harga: <input type="text" id="input-price" required placeholder="Harga (misal: Rp 150.000)">
 *        3. Input Link Gambar: <input type="url" id="input-image" placeholder="URL Gambar">
 *        4. Input Deskripsi: <textarea id="input-desc" placeholder="Deskripsi Singkat"></textarea>
 *        5. Tombol Submit: <button type="submit">Simpan & Tampilkan</button>
 *      * Tips Styling Input: Beri border halus dan padding nyaman (`rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-slate-50 dark:bg-slate-800`).
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/create.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Logika Buka & Tutup Form Modal:
 *    - Ambil tombol #btn-open-create-modal dan wadah #modal-create.
 *    - Saat tombol diklik, munculkan modal (hapus class 'hidden').
 *    - Saat tombol #btn-close-create diklik, sembunyikan kembali modal (tambah class 'hidden').
 * 3. Logika Submit Form:
 *    - Ambil form: const form = document.getElementById('form-create-product');
 *    - Pasang event listener 'submit' pada form:
 *      form.addEventListener('submit', (event) => {
 *        event.preventDefault(); // PENTING: Mencegah halaman reload otomatis!
 *        
 *        // a. Ambil nilai dari setiap input teks (.value)
 *        const name = document.getElementById('input-name').value;
 *        const price = document.getElementById('input-price').value;
 *        const image = document.getElementById('input-image').value || 'images/Laptop.jfif';
 *        const desc = document.getElementById('input-desc').value;
 *
 *        // b. Buat elemen kartu baru menggunakan Manipulasi DOM:
 *        const newCard = document.createElement('article');
 *        newCard.className = 'product-card group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full';
 *        
 *        // c. Masukkan struktur konten HTML kartu baru tersebut dengan template literal (backtick `...`)
 *        //    Gunakan data-data yang baru saja diinput di atas.
 *
 *        // d. Tempelkan kartu baru tersebut ke dalam grid katalog:
 *        document.getElementById('product-grid').appendChild(newCard);
 *
 *        // e. Bersihkan form (.reset()) dan tutup modal form (tambah class 'hidden')
 *      });
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi DOM (document.createElement dan .appendChild()).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

