/**
 * ==============================================================================
 * FITUR 5: THEME TOGGLE - DARK MODE / LIGHT MODE
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat tombol Dark Mode / Light Mode yang mengubah warna latar belakang dan teks
 * secara keseluruhan menggunakan manipulasi class (misal: .classList.toggle('dark')).
 *
 * ------------------------------------------------------------------------------
 * 📝 BAGIAN 1: TUGAS HTML & CSS (Di file index.html)
 * ------------------------------------------------------------------------------
 * 📍 LOKASI DI index.html:
 *    Buka file index.html. Di dalam tag <header>, temukan komentar:
 *    <!-- [SLOT HTML FITUR 5 & FITUR 1: TOMBOL AKSI HEADER] -->
 *    di dalam tag <div id="header-actions" ...>.
 *
 * 🏷️ REKOMENDASI STRUKTUR HTML YANG PERLU KAMU BUAT:
 *    Tambahkan tag <button> berikut di dalam div tersebut:
 *
 *    <button id="btn-theme-toggle" type="button" class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition active:scale-95" title="Ganti Tema">
 *      <span id="theme-icon">🌙</span>
 *      <span id="theme-text">Dark Mode</span>
 *    </button>
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/theme.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil tombol toggle tema dan elemen teks/ikon di dalamnya:
 *    const toggleBtn = document.getElementById('btn-theme-toggle');
 *    const themeIcon = document.getElementById('theme-icon');
 *    const themeText = document.getElementById('theme-text');
 * 3. Pasang event listener 'click' pada tombol toggle:
 *    toggleBtn.addEventListener('click', () => { ... });
 * 4. Di dalam fungsi event listener:
 *    a. Lakukan toggle class 'dark' pada elemen root HTML:
 *       const isDark = document.documentElement.classList.toggle('dark');
 *    b. Cek kondisi isDark (apakah dark mode aktif):
 *       - Jika aktif: ubah ikon jadi ☀️ dan teks jadi "Light Mode".
 *       - Jika tidak aktif: ubah ikon jadi 🌙 dan teks jadi "Dark Mode".
 *    c. (Bonus Nilai Tambah): Simpan preferensi pengguna ke localStorage agar
 *       pilihan dark/light mode tidak hilang saat halaman direfresh:
 *       localStorage.setItem('theme', isDark ? 'dark' : 'light');
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi class (misal .classList.toggle('dark')).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

