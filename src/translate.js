let arTranslations = {};
let originalTexts = new Map();
let isLoaded = false;

// تحميل ملف الترجمة العربي مرة وحدة بس
async function loadArabicTranslations() {
    if (isLoaded) return;
    const response = await fetch('/translate_ar.json');
    arTranslations = await response.json();
    isLoaded = true;
}

// حفظ النصوص الانكليزية الأصلية أول مرة (قبل أي تحويل)
function cacheOriginalTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!originalTexts.has(key)) {
            originalTexts.set(key, element.textContent);
        }
    });
}

// التحويل للعربي
export async function toArabic() {
    await loadArabicTranslations();
    cacheOriginalTexts(); // نحفظ الانكليزي قبل ما نستبدله

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

// الرجوع للانجليزي
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

// دالة تبديل تلقائية (تستخدمها بزر واحد)
export async function toggleLanguage() {
    const current = document.documentElement.lang;
    if (current === 'ar') {
        toEnglish();
    } else {
        await toArabic();
    }
}

// تحميل اللغة المحفوظة عند فتح الصفحة (تستدعيها بعد ما تركب كل الـ HTML بالصفحة)
export async function initLanguage() {
    cacheOriginalTexts();
    const savedLang = localStorage.getItem('lang') || 'en';
    if (savedLang === 'ar') {
        await toArabic();
    }
}