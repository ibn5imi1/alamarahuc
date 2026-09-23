// electronic_services_translate.js
let electronicServicesTranslationCache = { ar: null, en: null };

const ELECTRONIC_SERVICES_TRANSLATION_FILES = {
  ar: '/electronic_services_translate_ar.json',
  en: '/electronic_services_translate_en.json'
};

async function loadElectronicServicesTranslations(lang) {
  if (electronicServicesTranslationCache[lang]) {
    return electronicServicesTranslationCache[lang];
  }

  let data = {};
  const file = ELECTRONIC_SERVICES_TRANSLATION_FILES[lang];

  try {
    const res = await fetch(file);
    if (res.ok) {
      data = await res.json();
    }
  } catch (err) {
    console.warn(`تعذر تحميل ملف ترجمة الخدمات الإلكترونية: ${file}`, err);
  }

  electronicServicesTranslationCache[lang] = data;
  return data;
}

export async function applyElectronicServicesLanguage(langOverride) {
  try {
    const currentLang = langOverride || localStorage.getItem('lang') || 'ar';
    const translations = await loadElectronicServicesTranslations(currentLang);

    // مقصور فقط على #main-content — ما يلمس الهيدر أو الفوتر أبدًا
    document.querySelectorAll('#main-content [data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');

      if (!element.hasAttribute('data-en-default')) {
        element.setAttribute('data-en-default', element.textContent.trim());
      }

      const val = translations ? translations[key] : null;

      if (val && val.trim() !== '') {
        element.textContent = val;
      } else if (currentLang === 'en' && element.hasAttribute('data-en-default')) {
        element.textContent = element.getAttribute('data-en-default');
      }
    });

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  } catch (err) {
    console.error("حدث خطأ أثناء تطبيق ترجمة الخدمات الإلكترونية:", err);
  }
}