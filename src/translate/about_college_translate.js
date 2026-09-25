let aboutCollegeTranslationCache = null;

const ABOUT_COLLEGE_TRANSLATION_FILE = '/about_college_translate_ar.json';

async function loadAboutCollegeTranslations() {
    if (aboutCollegeTranslationCache) {
        return aboutCollegeTranslationCache;
    }

    let data = {};
    try {
        const res = await fetch(ABOUT_COLLEGE_TRANSLATION_FILE);
        if (res.ok) {
            data = await res.json();
        }
    } catch (err) {
        console.warn(`Unable to load the translation file for the college overview: ${ABOUT_COLLEGE_TRANSLATION_FILE}`, err);
    }

    aboutCollegeTranslationCache = data;
    return data;
}

export async function applyAboutCollegeLanguage(langOverride) {
    try {
        const currentLang = langOverride || localStorage.getItem('lang') || 'ar';

        document.querySelectorAll('#main-content [data-i18n]').forEach((element) => {
            if (!element.hasAttribute('data-en-default')) {
                element.setAttribute('data-en-default', element.innerHTML.trim()); // ✅ innerHTML بدل textContent هنا
            }
        });

        if (currentLang === 'en') {
            document.querySelectorAll('#main-content [data-i18n]').forEach((element) => {
                element.innerHTML = element.getAttribute('data-en-default'); // ✅ innerHTML
            });
        } else {
            const translations = await loadAboutCollegeTranslations();

            document.querySelectorAll('#main-content [data-i18n]').forEach((element) => {
                const key = element.getAttribute('data-i18n');
                const val = translations ? translations[key] : null;

                if (val && val.trim() !== '') {
                    element.innerHTML = val; // ✅ innerHTML بدل textContent
                }
            });
        }

        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    } catch (err) {
        console.error("حدث خطأ أثناء تطبيق ترجمة نبذة الكلية:", err);
    }
}