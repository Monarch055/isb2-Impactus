/**
 * ==============================================================================
 * FITUR 7: LANGUAGE / DOM - TRANSLATE EN / ID
 * ==============================================================================
 * Dikerjakan oleh : Muhammad Finlandia Rahman Mawlaa
 * ==============================================================================
 */

function initTranslate() {
    if (window.__translateInitialized) return;
    window.__translateInitialized = true;

    console.log('✅ Fitur Translate (Language / DOM) berhasil dimuat');

    // ---------------------------------------------------------------------------
    // 1. KAMUS TERJEMAHAN (DICTIONARY OBJECT)
    // ---------------------------------------------------------------------------
    const dictionary = {
        id: {
            // --- Tombol Translate ---
            btnText: "Translate (EN)",

            // --- Header ---
            badgeBootcamp: "Bootcamp ISB 2",
            badgeWeek: "Week 3: Interactive Edition",
            storeTitle: 'Tim Impactus <span class="text-indigo-600">Store</span>',
            storeSubtitle: "Koleksi 5 produk unggulan karya 5 mentee dengan fitur interaktif JavaScript Modern.",

            // --- Tombol Theme ---
            themeText: "Dark Mode",

            // --- Kartu A: Fil Ardhi ---
            a_category: "Menu Kuliner",
            a_subtitle: "🔥 Level Pedas Koding",
            a_title: "Ayam Geprek Anak IT",
            a_desc: "Ayam krispi gurih dengan sambal bawang segar level koding. Solusi kenyang anti-ngantuk buat booster begadang dan debugging error!",
            a_priceLabel: "Harga Promo",
            a_price: "Rp 10.000",
            a_priceOld: "Rp 15.000",
            a_buyBtn: "Beli Sekarang",

            // --- Kartu B: Nelson Saputra ---
            b_category: "Audio & Aksesoris",
            b_subtitle: "✓ Official Store • Stock Ready",
            b_title: "SonicPro Wireless",
            b_desc: "Headphone wireless suara bass mendalam, peredam kebisingan aktif, dan baterai tahan hingga 30 jam pemakaian nonstop.",
            b_priceLabel: "Harga Diskon",
            b_price: "Rp 240.000",
            b_priceOld: "Rp 300.000",
            b_buyBtn: "Beli Sekarang",

            // --- Kartu C: M. Finlandia ---
            c_category: "Laptop & Gadget",
            c_subtitle: "249 Terjual • Garansi Resmi 2 Th",
            c_title: "Ultrabook Slim",
            c_desc: "Laptop ringan dengan layar bezel tipis dan performa tinggi. Sangat cocok untuk produktivitas kerja koding dan desain grafis.",
            c_priceLabel: "Harga Resmi",
            c_price: "Rp 12.500.000",
            c_badge: "Cicilan 30%",
            c_buyBtn: "Beli Sekarang",

            // --- Kartu D: Zukovski ---
            d_category: "Smartphone AI",
            d_subtitle: "✨ Galaxy AI Powered",
            d_title: "Galaxy S25 FE",
            d_desc: "Smartphone premium-value dengan desain elegan, performa tinggi, dan fitur kecerdasan Galaxy AI terbaru.",
            d_priceLabel: "Harga Resmi",
            d_price: "Rp 10.500.000",
            d_badge: "Tersedia",
            d_buyBtn: "Beli Sekarang",

            // --- Kartu E: Visqya ---
            e_category: "Smartwatch",
            e_title: "HUAWEI WATCH GT 5",
            e_desc: "Smartwatch premium AMOLED display, pemantauan kesehatan & olahraga komprehensif, dan baterai tahan hingga 14 hari.",
            e_priceLabel: "Harga Resmi",
            e_price: "Rp 3.499.000",
            e_badge: "Bestseller",
            e_buyBtn: "Beli Sekarang",

            // --- Footer ---
            footer: "© 2026 Tim Impactus • Frontend Bootcamp ISB 2 - Tugas Week 3 Interactive Edition"
        },

        en: {
            // --- Translate Button ---
            btnText: "Translate (ID)",

            // --- Header ---
            badgeBootcamp: "ISB 2 Bootcamp",
            badgeWeek: "Week 3: Interactive Edition",
            storeTitle: 'Impactus Team <span class="text-indigo-600">Store</span>',
            storeSubtitle: "A collection of 5 featured products by 5 mentees with Modern JavaScript interactive features.",

            // --- Theme Button ---
            themeText: "Dark Mode",

            // --- Card A: Fil Ardhi ---
            a_category: "Culinary Menu",
            a_subtitle: "🔥 Coding Spicy Level",
            a_title: "IT Kid's Geprek Chicken",
            a_desc: "Crispy savory chicken with fresh garlic chili at coding level. A filling anti-sleepy solution to boost your all-nighter and debugging sessions!",
            a_priceLabel: "Promo Price",
            a_price: "Rp 10,000",
            a_priceOld: "Rp 15,000",
            a_buyBtn: "Buy Now",

            // --- Card B: Nelson Saputra ---
            b_category: "Audio & Accessories",
            b_subtitle: "✓ Official Store • Stock Ready",
            b_title: "SonicPro Wireless",
            b_desc: "Wireless headphone with deep bass sound, active noise cancellation, and a battery that lasts up to 30 hours of nonstop use.",
            b_priceLabel: "Discounted Price",
            b_price: "Rp 240,000",
            b_priceOld: "Rp 300,000",
            b_buyBtn: "Buy Now",

            // --- Card C: M. Finlandia ---
            c_category: "Laptops & Gadgets",
            c_subtitle: "249 Sold • 2-Year Official Warranty",
            c_title: "Ultrabook Slim",
            c_desc: "A lightweight laptop with a thin bezel screen and high performance. Perfect for coding productivity and graphic design work.",
            c_priceLabel: "Official Price",
            c_price: "Rp 12,500,000",
            c_badge: "30% Installment",
            c_buyBtn: "Buy Now",

            // --- Card D: Zukovski ---
            d_category: "AI Smartphone",
            d_subtitle: "✨ Galaxy AI Powered",
            d_title: "Galaxy S25 FE",
            d_desc: "A premium-value smartphone with an elegant design, high performance, and the latest Galaxy AI intelligence features.",
            d_priceLabel: "Official Price",
            d_price: "Rp 10,500,000",
            d_badge: "Available",
            d_buyBtn: "Buy Now",

            // --- Card E: Visqya ---
            e_category: "Smartwatch",
            e_title: "HUAWEI WATCH GT 5",
            e_desc: "Premium smartwatch with AMOLED display, comprehensive health & sports tracking, and a battery that lasts up to 14 days.",
            e_priceLabel: "Official Price",
            e_price: "Rp 3,499,000",
            e_badge: "Bestseller",
            e_buyBtn: "Buy Now",

            // --- Footer ---
            footer: "© 2026 Impactus Team • Frontend Bootcamp ISB 2 - Week 3 Interactive Edition Assignment"
        }
    };

    // ---------------------------------------------------------------------------
    // 2. STATE BAHASA AKTIF
    // ---------------------------------------------------------------------------
    let currentLanguage = 'id';

    // ---------------------------------------------------------------------------
    // 3. HELPER: Ambil elemen berdasarkan selector di dalam kartu tertentu
    // ---------------------------------------------------------------------------
    const getEl = (slotId, selector) => {
        const slot = document.getElementById(slotId);
        return slot ? slot.querySelector(selector) : null;
    };

    // ---------------------------------------------------------------------------
    // 4. FUNGSI UNTUK MEMPERBARUI SELURUH TEKS DI HALAMAN
    // ---------------------------------------------------------------------------
    const applyTranslation = (lang) => {
        const t = dictionary[lang];
        if (!t) return;

        // Update html lang attribute
        document.documentElement.lang = lang;

        // ----- Header -----
        const badgeBootcamp = document.querySelector('header .bg-indigo-600');
        if (badgeBootcamp) badgeBootcamp.textContent = t.badgeBootcamp;

        const badgeWeek = document.querySelector('header .text-indigo-600.dark\\:text-indigo-400') || document.querySelector('header .text-xs.font-semibold');
        if (badgeWeek) badgeWeek.textContent = t.badgeWeek;

        const storeTitle = document.querySelector('header h1');
        if (storeTitle) storeTitle.innerHTML = t.storeTitle;

        const storeSubtitle = document.querySelector('header p.text-xs') || document.querySelector('header p');
        if (storeSubtitle) storeSubtitle.textContent = t.storeSubtitle;

        // Tombol theme
        const themeText = document.getElementById('theme-text');
        if (themeText) themeText.textContent = t.themeText;

        // ----- KARTU A -----
        const aCat = getEl('slot-a', '.product-category');
        if (aCat) aCat.textContent = t.a_category;

        const aSub = getEl('slot-a', '.product-subtitle');
        if (aSub) aSub.textContent = t.a_subtitle;

        const aTitle = getEl('slot-a', '.product-title');
        if (aTitle) { aTitle.textContent = t.a_title; aTitle.title = t.a_title; }

        const aDesc = getEl('slot-a', '.product-desc');
        if (aDesc) aDesc.textContent = t.a_desc;

        const aPriceLabel = getEl('slot-a', '.price-label');
        if (aPriceLabel) aPriceLabel.textContent = t.a_priceLabel;

        const aPrice = getEl('slot-a', '.product-price');
        if (aPrice) aPrice.textContent = t.a_price;

        const aPriceOld = getEl('slot-a', '.price-old');
        if (aPriceOld) aPriceOld.textContent = t.a_priceOld;

        const aBuy = getEl('slot-a', '.buy-btn');
        if (aBuy) aBuy.textContent = t.a_buyBtn;

        // ----- KARTU B -----
        const bCat = getEl('slot-b', '.product-category');
        if (bCat) bCat.textContent = t.b_category;

        const bSub = getEl('slot-b', '.product-subtitle');
        if (bSub) bSub.textContent = t.b_subtitle;

        const bTitle = getEl('slot-b', '.product-title');
        if (bTitle) { bTitle.textContent = t.b_title; bTitle.title = t.b_title; }

        const bDesc = getEl('slot-b', '.product-desc');
        if (bDesc) bDesc.textContent = t.b_desc;

        const bPriceLabel = getEl('slot-b', '.price-label');
        if (bPriceLabel) bPriceLabel.textContent = t.b_priceLabel;

        const bPrice = getEl('slot-b', '.product-price');
        if (bPrice) bPrice.textContent = t.b_price;

        const bPriceOld = getEl('slot-b', '.price-old');
        if (bPriceOld) bPriceOld.textContent = t.b_priceOld;

        const bBuy = getEl('slot-b', '.buy-btn');
        if (bBuy) bBuy.textContent = t.b_buyBtn;

        // ----- KARTU C -----
        const cCat = getEl('slot-c', '.product-category');
        if (cCat) cCat.textContent = t.c_category;

        const cSub = getEl('slot-c', '.product-subtitle');
        if (cSub) cSub.textContent = t.c_subtitle;

        const cTitle = getEl('slot-c', '.product-title');
        if (cTitle) { cTitle.textContent = t.c_title; cTitle.title = t.c_title; }

        const cDesc = getEl('slot-c', '.product-desc');
        if (cDesc) cDesc.textContent = t.c_desc;

        const cPriceLabel = getEl('slot-c', '.price-label');
        if (cPriceLabel) cPriceLabel.textContent = t.c_priceLabel;

        const cPrice = getEl('slot-c', '.product-price');
        if (cPrice) cPrice.textContent = t.c_price;

        const cBadge = getEl('slot-c', '.price-badge');
        if (cBadge) cBadge.textContent = t.c_badge;

        const cBuy = getEl('slot-c', '.buy-btn');
        if (cBuy) cBuy.textContent = t.c_buyBtn;

        // ----- KARTU D -----
        const dCat = getEl('slot-d', '.product-category');
        if (dCat) dCat.textContent = t.d_category;

        const dSub = getEl('slot-d', '.product-subtitle');
        if (dSub) dSub.textContent = t.d_subtitle;

        const dTitle = getEl('slot-d', '.product-title');
        if (dTitle) { dTitle.textContent = t.d_title; dTitle.title = t.d_title; }

        const dDesc = getEl('slot-d', '.product-desc');
        if (dDesc) dDesc.textContent = t.d_desc;

        const dPriceLabel = getEl('slot-d', '.price-label');
        if (dPriceLabel) dPriceLabel.textContent = t.d_priceLabel;

        const dPrice = getEl('slot-d', '.product-price');
        if (dPrice) dPrice.textContent = t.d_price;

        const dBadge = getEl('slot-d', '.price-badge');
        if (dBadge) dBadge.textContent = t.d_badge;

        const dBuy = getEl('slot-d', '.buy-btn');
        if (dBuy) dBuy.textContent = t.d_buyBtn;

        // ----- KARTU E -----
        const eCat = getEl('slot-e', '.product-category');
        if (eCat) eCat.textContent = t.e_category;

        const eTitle = getEl('slot-e', '.product-title');
        if (eTitle) { eTitle.textContent = t.e_title; eTitle.title = t.e_title; }

        const eDesc = getEl('slot-e', '.product-desc');
        if (eDesc) eDesc.textContent = t.e_desc;

        const ePriceLabel = getEl('slot-e', '.price-label');
        if (ePriceLabel) ePriceLabel.textContent = t.e_priceLabel;

        const ePrice = getEl('slot-e', '.product-price');
        if (ePrice) ePrice.textContent = t.e_price;

        const eBadge = getEl('slot-e', '.price-badge');
        if (eBadge) eBadge.textContent = t.e_badge;

        const eBuy = getEl('slot-e', '.buy-btn');
        if (eBuy) eBuy.textContent = t.e_buyBtn;

        // ----- Footer -----
        const footer = document.querySelector('footer.text-center') || document.querySelector('footer');
        if (footer) footer.textContent = t.footer;

        // ----- Tombol Translate Label -----
        const translateLabels = document.querySelectorAll('#translate-label, .translate-label');
        translateLabels.forEach(el => {
            el.textContent = t.btnText;
        });

        console.log('🌐 Bahasa berhasil diubah ke:', lang);
    };

    // ---------------------------------------------------------------------------
    // 5. PASANG EVENT LISTENER KE TOMBOL TRANSLATE
    // ---------------------------------------------------------------------------
    const toggleLanguage = () => {
        currentLanguage = (currentLanguage === 'id') ? 'en' : 'id';
        applyTranslation(currentLanguage);
    };

    // Cari semua kemungkinan tombol translate (header / card)
    const translateButtons = document.querySelectorAll('#btn-translate, #btn-translate-ultrabook, .btn-translate');
    if (translateButtons.length > 0) {
        translateButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleLanguage();
            });
        });
        console.log(`✅ ${translateButtons.length} tombol translate terhubung event listener.`);
    } else {
        console.warn('⚠️ Tombol translate tidak ditemukan dengan selector standar. Memasang listener dokumen...');
        document.addEventListener('click', (e) => {
            const target = e.target.closest('#btn-translate, #btn-translate-ultrabook, .btn-translate');
            if (target) {
                e.preventDefault();
                toggleLanguage();
            }
        });
    }
}

// Inisialisasi aman
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTranslate);
} else {
    initTranslate();
}
