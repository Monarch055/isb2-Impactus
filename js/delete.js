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
 * 📝 BAGIAN 1: PANDUAN HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Pada setiap kartu produk (Slot A sampai Slot E), temukan komentar:
 *    <!-- [SLOT KARTU ...: FITUR 3 (LIKE) & FITUR 2 (DELETE)] -->
 *    di dalam tag <div class="card-actions ...">.
 *
 * 💡 IDE BENTUK & STYLING HTML/CSS (Bebas Berkreasi!):
 *    - Elemen Wajib: Buat tag <button> yang memiliki class "btn-delete".
 *    - Konten di Dalam Tombol:
 *      * Bisa berupa ikon tempat sampah (SVG trash icon, emoji 🗑️), atau teks singkat "Hapus" / "Delete".
 *    - Ide Tampilan & Desain:
 *      * Bentuk: Tombol lingkaran kecil minimalis (`rounded-full p-1.5`), atau tombol kotak bersudut halus (`rounded-lg p-1`).
 *      * Warna: Karena fungsinya menghapus (destructive action), berikan warna dasar abu-abu netral (`text-slate-400`), dan saat disentuh kursor (hover) berikan aksen merah/merah muda (`hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40`).
 *      * Tooltip: Tambahkan atribut `title="Hapus Kartu Ini"` agar pengguna tahu fungsinya saat mouse diarahkan ke tombol.
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/delete.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil semua tombol hapus yang memiliki class '.btn-delete':
 *    const deleteButtons = document.querySelectorAll('.btn-delete');
 * 3. Loop semua tombol hapus menggunakan .forEach():
 *    deleteButtons.forEach((button) => { ... });
 * 4. Pasang event listener 'click' pada masing-masing tombol:
 *    button.addEventListener('click', (event) => { ... });
 * 5. Di dalam fungsi callback klik:
 *    a. Cegah klik tembus ke elemen kartu lain dengan: event.stopPropagation();
 *    b. Cari pembungkus kartu produk induk terdekat ke atas menggunakan method:
 *       const card = button.closest('.product-card');
 *    c. (Sangat disarankan) Munculkan konfirmasi dengan confirm(), misalnya:
 *       const yakin = confirm("Apakah Anda yakin ingin menghapus produk ini?");
 *    d. Jika pengguna menyetujui konfirmasi tersebut:
 *       - Hapus elemen kartu dari tampilan DOM menggunakan method: card.remove();
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi DOM (misal .remove()).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

