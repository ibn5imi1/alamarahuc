// main_translate.js
let arTranslations = {};
let originalTexts = new Map();
let isLoaded = false;

async function loadArabicTranslations() {
  if (isLoaded) return;
  try {
    const response = await fetch('/main_translate_ar.json');
    arTranslations = await response.json();
    isLoaded = true;
  } catch (error) {
    console.error("Failed to load translation file:", error);
  }
}

export function cacheOriginalTexts() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (!originalTexts.has(key)) {
      originalTexts.set(key, element.textContent);
    }
  });
}

export async function toArabic() {
  await loadArabicTranslations();
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

export async function toggleLanguage() {
  const current = document.documentElement.lang;
  if (current === 'ar') {
    toEnglish();
  } else {
    await toArabic();
  }
}

// دالة يتم استدعاؤها من الـ Router عند التنقل لإعادة تطبيق اللغة الحالية
export async function applyMainLanguage() {
  cacheOriginalTexts();
  const savedLang = localStorage.getItem('lang') || 'en';
  if (savedLang === 'ar') {
    await toArabic();
  } else {
    toEnglish();
  }
}

// دالة تفعيل زر اللغة
export function initLanguage() {
  applyMainLanguage();

  document.body.addEventListener('click', async (e) => {
    const langBtn = e.target.closest('[data-i18n="nav.en"]');
    if (langBtn) {
      e.preventDefault();
      await toggleLanguage();
    }
  });
}