// repository_translate.js
let repositoryTranslationCache = { ar: null, en: null };

const REPOSITORY_TRANSLATION_FILES = {
  ar: '/repository_translate_ar.json',
  en: '/repository_translate_en.json'
};

async function loadRepositoryTranslations(lang) {
  if (repositoryTranslationCache[lang]) {
    return repositoryTranslationCache[lang];
  }

  let data = {};
  const file = REPOSITORY_TRANSLATION_FILES[lang];

  try {
    const res = await fetch(file);
    if (res.ok) {
      data = await res.json();
    }
  } catch (err) {
    console.warn(`تعذر تحميل ملف ترجمة المستودع الرقمي: ${file}`, err);
  }

  repositoryTranslationCache[lang] = data;
  return data;
}

export async function applyRepositoryLanguage(langOverride) {
  try {
    const currentLang = langOverride || localStorage.getItem('lang') || 'ar';
    const translations = await loadRepositoryTranslations(currentLang);

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
    console.error("An error occurred while applying the digital repository translation:", err);
  }
}