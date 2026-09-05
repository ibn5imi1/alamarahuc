let arTranslations = {};
let originalTexts = new Map();
let isLoaded = false;

// Download the Arabic subtitle file only once
async function loadArabicTranslations() {
    if (isLoaded) return;
    const response = await fetch('/translate_ar.json');
    arTranslations = await response.json();
    isLoaded = true;
}

// Save the original English texts the first time (before any conversion)
function cacheOriginalTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!originalTexts.has(key)) {
            originalTexts.set(key, element.textContent);
        }
    });
}

// Convert to Arabic
export async function toArabic() {
    await loadArabicTranslations();

    // We memorize the English language before we replace it
    cacheOriginalTexts(); 

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (arTranslations[key]) {
            element.textContent = arTranslations[key];
        }
    });

    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    localStorage.setItem('lang', 'ar');
}

// Return to English
export function toEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (originalTexts.has(key)) {
            element.textContent = originalTexts.get(key);
        }
    });

    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    localStorage.setItem('lang', 'en');
}

// Automatic switching function (used with one button)
export async function toggleLanguage() {
    const current = document.documentElement.lang;
    if (current === 'ar') {
        toEnglish();
    } else {
        await toArabic();
    }
}

// Load the saved language when the page is opened (you call it after you have installed all the HTML on the page)
export async function initLanguage() {
    cacheOriginalTexts();
    const savedLang = localStorage.getItem('lang') || 'en';
    if (savedLang === 'ar') {
        await toArabic();
    }

    // Link the event to the button via data-i18n="nav.en"
    document.body.addEventListener('click', async (e) => {
        const langBtn = e.target.closest('[data-i18n="nav.en"]');
        if (langBtn) {
            e.preventDefault();
            await toggleLanguage();
        }
    });
}