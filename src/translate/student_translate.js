// student_translate.js
let studentTranslationCache = { ar: null, en: null };

const STUDENT_TRANSLATION_FILES = {
  ar: '/students_translate_ar.json',
  en: '/students_translate_en.json'
};

async function loadStudentTranslations(lang) {
  if (studentTranslationCache[lang]) {
    return studentTranslationCache[lang];
  }

  let data = {};
  const file = STUDENT_TRANSLATION_FILES[lang];

  try {
    const res = await fetch(file);
    if (res.ok) {
      data = await res.json();
    }
  } catch (err) {
    console.warn(`تعذر تحميل ملف ترجمة الطلبة: ${file}`, err);
  }

  studentTranslationCache[lang] = data;
  return data;
}

export async function applyStudentLanguage(langOverride) {
  try {
    const currentLang = langOverride || localStorage.getItem('lang') || 'ar';
    const translations = await loadStudentTranslations(currentLang);

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
    console.error("حدث خطأ أثناء تطبيق ترجمة الطلبة:", err);
  }
}