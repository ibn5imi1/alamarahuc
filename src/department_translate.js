let deptAr = {};
let deptEn = {};
let isDeptLoaded = false;

async function loadDeptTranslations() {
    if (isDeptLoaded) return;
    const [arRes, enRes] = await Promise.all([
        fetch('/department_translate_ar.json'),
        fetch('/department_translate_en.json')
    ]);
    deptAr = await arRes.json();
    deptEn = await enRes.json();
    isDeptLoaded = true;
}

export async function applyDeptLanguage() {
    await loadDeptTranslations();
    const currentLang = localStorage.getItem('lang') || 'en';
    const translations = currentLang === 'ar' ? deptAr : deptEn;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}