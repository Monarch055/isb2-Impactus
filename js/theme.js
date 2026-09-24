/**
 * ==============================================================================
 * FITUR 5: THEME TOGGLE - DARK MODE / LIGHT MODE
 * ==============================================================================
 * Dikerjakan oleh   : Zukovski Tangguh Dirgantara
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat tombol Dark Mode / Light Mode yang mengubah warna latar belakang dan teks
 * secara keseluruhan menggunakan manipulasi class (misal: .classList.toggle('dark')).
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
 *    - Elemen Wajib: Buat tag <button> dengan atribut id="btn-theme-toggle".
 *    - Konten di Dalam Tombol:
 *      * Siapkan penampung ikon (misal tag <span> dengan id="theme-icon") berisi emoji 🌙 atau ☀️.
 *      * Siapkan penampung teks (misal tag <span> dengan id="theme-text") berisi tulisan "Dark Mode".
 *    - Ide Tampilan & Desain:
 *      * Model Kapsul Modern: Tombol berbentuk rounded lonjong (`rounded-full px-4 py-2 text-xs font-semibold`) dengan bayangan halus (`shadow-sm`).
 *      * Model Kartu Minimalis: Tombol kotak bersudut tumpul (`rounded-xl px-3.5 py-2 border border-slate-200 dark:border-slate-700`).
 *      * Skema Warna: Background putih bersih di light mode dan abu-abu gelap di dark mode (`bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200`).
 *      * Efek Klik: Tambahkan class `active:scale-95 transition` agar terasa empuk saat ditekan.
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/theme.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Ambil elemen tombol toggle dan teks/ikon di dalamnya:
 *    const toggleBtn = document.getElementById('btn-theme-toggle');
 *    const themeIcon = document.getElementById('theme-icon');
 *    const themeText = document.getElementById('theme-text');
 * 3. Pasang event listener 'click' pada tombol toggle:
 *    toggleBtn.addEventListener('click', () => { ... });
 * 4. Di dalam fungsi callback klik:
 *    a. Lakukan toggle class 'dark' pada elemen root <html>:
 *       const isDark = document.documentElement.classList.toggle('dark');
 *    b. Cek kondisi isDark (apakah dark mode sedang aktif):
 *       - Jika aktif: ganti ikon jadi ☀️ dan teks jadi "Light Mode".
 *       - Jika tidak aktif: ganti ikon jadi 🌙 dan teks jadi "Dark Mode".
 *    c. (Bonus Nilai Tambah): Simpan pilihan ke localStorage agar saat halaman
 *       di-refresh, tema pilihan pengguna tidak hilang:
 *       localStorage.setItem('theme', isDark ? 'dark' : 'light');
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Gunakan manipulasi class (misal .classList.toggle('dark')).
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:
document.addEventListener('DOMContentLoaded', () => {
  // 1. Ambil elemen tombol dan teks/ikon di dalamnya
  const toggleBtn = document.getElementById('btn-theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  // Cek localStorage saat halaman pertama dimuat
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
  }

  // 2. Pasang event listener untuk mendeteksi klik
  toggleBtn.addEventListener('click', () => {
    // 3. Toggle class 'dark' pada elemen <html> (<html class="dark">)
    const isDark = document.documentElement.classList.toggle('dark');

    // 4. Ubah tampilan ikon dan teks berdasarkan status
    if (isDark) {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark'); // Simpan preferensi
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light'); // Simpan preferensi
    }
  });
});