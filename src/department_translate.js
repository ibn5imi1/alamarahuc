let deptAr = null;
let deptEn = null;

async function loadDeptTranslations() {
  if (deptAr && deptEn) return;
  try {
    const [arRes, enRes] = await Promise.all([
      fetch('/department_translate_ar.json'),
      fetch('/department_translate_en.json')
    ]);
    deptAr = await arRes.json();
    deptEn = await enRes.json();
  } catch (error) {
    console.error("Error loading department translations:", error);
  }
}

export async function applyDeptLanguage() {
  await loadDeptTranslations();
  
  const currentLang = localStorage.getItem('lang') || 'ar';
  const translations = currentLang === 'ar' ? deptAr : deptEn;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    
    if (translations && key in translations) {
      const val = translations[key];

      // معالجة حالة اسم رئيس القسم إذا كان فارغاً
      if (key.endsWith('.head_name')) {
        if (!val || val.trim() === "") {
          element.style.display = 'none';
          element.textContent = "";
        } else {
          element.style.display = 'block';
          element.textContent = val;
        }
        return;
      }

      if (val && val.trim() !== "") {
        element.textContent = val;
      } else {
        if (!element.textContent.trim() || element.textContent.includes("قيد الإضافة")) {
          element.textContent = currentLang === 'ar' ? "قيد الإضافة..." : "Content coming soon...";
        }
      }
    }
  });
}

document.addEventListener('click', async (e) => {
  const langBtn = e.target.closest('[data-i18n="nav.en"]');
  if (langBtn) {
    setTimeout(() => {
      applyDeptLanguage();
    }, 50);
  }
});