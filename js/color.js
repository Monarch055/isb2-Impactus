/**
 * ==============================================================================
 * FITUR 8: STYLE / DOM - RANDOM COLOR CARD
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat tombol "Random Color" yang mengubah warna background salah satu card
 * secara acak ketika tombol tersebut diklik.
 *
 * ------------------------------------------------------------------------------
 * 📝 BAGIAN 1: PANDUAN HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Di dalam tag <header>, temukan komentar:
 *    <!-- [SLOT HTML TOMBOL AKSI HEADER] -->
 *    di dalam tag <div id="header-actions" ...>.
 *
 * 💡 IDE BENTUK & STYLING HTML/CSS (Bebas Berkreasi!):
 *    - Elemen Wajib: Buat tag <button> dengan atribut id="btn-random-color".
 *    - Konten di Dalam Tombol:
 *      * Tuliskan teks seperti "Random Color" atau "Acak Warna".
 *      * Hiasan: Bisa ditambahkan emoji palet cat (🎨), kuas lukis (🖌️), atau dadu acak (🎲).
 *    - Ide Tampilan & Desain:
 *      * Gaya Playful / Ceria: Gunakan latar gradasi warna mencolok (`bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl px-3.5 py-2 font-semibold shadow-sm`).
 *      * Gaya Minimalis Elegan: Tombol putih/gelap bersih dengan border abu-abu (`border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl px-3.5 py-2`).
 *      * Animasi Interaksi: Tambahkan `active:scale-95 transition hover:rotate-1` agar tombol terasa hidup dan interaktif saat diklik.
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/color.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Siapkan fungsi untuk menghasilkan atau memilih warna acak:
 *    - Pilihan A: Mengambil warna pastel/cerah dari sebuah Array warna pilihanmu:
 *      const colors = ['#fef3c7', '#dbeafe', '#e0e7ff', '#fce7f3', '#dcfce7', '#ffedd5'];
 *    - Pilihan B: Menggunakan rumus generator kode warna Hex acak dengan Math.random().
 * 3. Ambil tombol Random Color menggunakan document.getElementById('btn-random-color').
 * 4. Pasang event listener 'click' pada tombol tersebut:
 *    btnColor.addEventListener('click', () => {
 *      // a. Ambil semua elemen kartu produk di halaman:
 *      const cards = document.querySelectorAll('.product-card');
 *      if (cards.length === 0) return;
 *
 *      // b. Pilih salah satu kartu secara acak menggunakan rumus index acak:
 *      const randomIndex = Math.floor(Math.random() * cards.length);
 *      const selectedCard = cards[randomIndex];
 *
 *      // c. Ubah warna latar belakang (background) kartu terpilih tersebut:
 *      selectedCard.style.backgroundColor = warnaAcak;
 *    });
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi style DOM (misal .style.backgroundColor).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

