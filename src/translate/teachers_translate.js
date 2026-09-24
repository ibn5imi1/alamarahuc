// teachers_translate.js
let teachersTranslationCache = { ar: null, en: null };

const TEACHERS_TRANSLATION_FILES = {
    ar: '/teachers_translate_ar.json',
    en: '/teachers_translate_en.json'
};

async function loadTeachersTranslations(lang) {
    if (teachersTranslationCache[lang]) {
        return teachersTranslationCache[lang];
    }

    let data = {};
    const file = TEACHERS_TRANSLATION_FILES[lang];

    try {
        const res = await fetch(file);
        if (res.ok) {
            data = await res.json();
        }
    } catch (err) {
        console.warn(`Unable to load the instructors' translation file: ${file}`, err);
    }

    teachersTranslationCache[lang] = data;
    return data;
}

export async function applyTeachersLanguage(langOverride) {
    try {
        const currentLang = langOverride || localStorage.getItem('lang') || 'ar';
        const translations = await loadTeachersTranslations(currentLang);

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
        console.error("An error occurred while applying the faculty members' translation.", err);
    }
}