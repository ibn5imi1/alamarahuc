import { header, initMobileMenu } from "./components/header";
import { footer } from "./components/footer";
import { home, initSlider, initCounters } from "./pages/home";
import { initLanguage } from './main_translate';
import { departmentView } from './pages/college_departments/departmentView';

const app = document.getElementById("app");

// 1. بناء الهيكل الثابت (الهيدر + حاوية المحتوى المتغير + الفوتر)
app.innerHTML = `
  ${header()}
  <main id="main-content"></main>
  ${footer()}
`;

// 2. تفعيل الميزات المشتركة للهيدر واللغة مرة واحدة فقط
initMobileMenu();
initLanguage();

// 3. دالة التنقل والتحديث الديناميكي للمحتوى الداخلي فقط
function handleRouting() {
    const mainContent = document.getElementById('main-content');
    const hash = window.location.hash;

    if (hash.startsWith('#department')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        const deptId = params.get('id');

        // عرض صفحة القسم داخل الحاوية الرئيسية
        mainContent.innerHTML = departmentView(deptId);
        window.scrollTo(0, 0);
    } else {
        // عرض الصفحة الرئيسية داخل الحاوية الرئيسية
        mainContent.innerHTML = home();
        initSlider();
        initCounters();
    }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', handleRouting);