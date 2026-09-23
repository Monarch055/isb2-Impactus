/**
 * ==============================================================================
 * FITUR 7: LANGUAGE / DOM - TRANSLATE EN / ID
 * ==============================================================================
 * Dikerjakan oleh   : [Tulis Nama Anggota di Sini]
 *
 * 🎯 TUJUAN TUGAS:
 * Membuat tombol "Translate EN/ID". Saat diklik, teks pada card (judul atau deskripsi)
 * berubah dari bahasa Indonesia ke bahasa Inggris (atau sebaliknya) menggunakan
 * Object JavaScript dan properti .textContent.
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
 *    - Elemen Wajib: Buat tag <button> dengan atribut id="btn-translate".
 *    - Konten di Dalam Tombol:
 *      * Siapkan penampung teks label (misalnya tag <span> dengan id="translate-label") yang awalnya bertuliskan "Translate (EN)" atau "EN".
 *      * Hiasan: Bisa ditambahkan emoji bola dunia (🌐), bendera, atau ikon bahasa.
 *    - Ide Tampilan & Desain:
 *      * Bentuk: Tombol kapsul atau kotak melengkung rapi (`rounded-xl px-3.5 py-2 text-xs font-semibold`).
 *      * Gaya: Bisa menggunakan gaya outline modern (`border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-400`).
 *      * Responsivitas: Beri efek `active:scale-95 transition` agar terasa hidup ketika ditekan.
 *
 * ------------------------------------------------------------------------------
 * 💻 BAGIAN 2: TUGAS JAVASCRIPT (Di file ini: js/language.js)
 * ------------------------------------------------------------------------------
 * 💡 ALUR LOGIKA / LANGKAH PENGERJAAN:
 * 1. Tunggu DOM siap: document.addEventListener('DOMContentLoaded', () => { ... })
 * 2. Siapkan sebuah Object kamus (dictionary) yang berisi data terjemahan untuk
 *    judul atau deskripsi setiap kartu dalam 2 bahasa (id dan en).
 *    Contoh konsep:
 *    const dictionary = {
 *      id: {
 *        btnText: "Translate (EN)",
 *        // Simpan teks bahasa Indonesia untuk judul/deskripsi kartu
 *      },
 *      en: {
 *        btnText: "Translate (ID)",
 *        // Simpan teks bahasa Inggris untuk judul/deskripsi kartu
 *      }
 *    };
 * 3. Siapkan variabel pelacak bahasa aktif saat ini:
 *    let currentLanguage = 'id';
 * 4. Ambil tombol translate (#btn-translate) dan label teksnya (#translate-label):
 *    const btnTranslate = document.getElementById('btn-translate');
 *    const translateLabel = document.getElementById('translate-label');
 * 5. Pasang event listener 'click' pada tombol translate:
 *    btnTranslate.addEventListener('click', () => {
 *      // a. Balikkan status bahasa (jika saat ini 'id' ubah ke 'en', dan sebaliknya):
 *      currentLanguage = (currentLanguage === 'id') ? 'en' : 'id';
 *
 *      // b. Ambil elemen-elemen teks pada kartu (misal .product-title atau .product-desc)
 *      //    lalu perbarui teksnya menggunakan properti .textContent dari data Object dictionary.
 *
 *      // c. Perbarui teks pada tombol translate (#translate-label) agar pengguna tahu statusnya.
 *    });
 *
 * ⚠️ KETENTUAN TEKNIS:
 * - Wajib gunakan 'const' atau 'let' (dilarang pakai 'var').
 * - Wajib gunakan .addEventListener().
 * - Wajib gunakan Object JS dan properti .textContent untuk mengganti teks.
 * ==============================================================================
 */

// Tulis kodemu di bawah sini:

