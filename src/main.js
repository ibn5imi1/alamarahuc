// main.js
import { header, initMobileMenu } from "./components/header.js";
import { footer } from "./components/footer.js";
import { initLanguage } from './translate/main_translate.js';
import { initRouter } from './router.js';
import { initAcademicCalendar } from './pages/students/academic_calendar.js';

const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    ${header()}
    <main id="main-content"></main>
    ${footer()}
  `;

  if (typeof initMobileMenu === 'function') initMobileMenu();
  if (typeof initLanguage === 'function') initLanguage();
  if (typeof initAcademicCalendar === 'function') initAcademicCalendar();

  initRouter();
}