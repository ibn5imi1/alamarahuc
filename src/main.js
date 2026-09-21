// main.js
import { header, initMobileMenu } from "./components/header.js";
import { footer } from "./components/footer.js";
import { initLanguage } from './translate/main_translate.js';
import { initRouter } from './router.js';
import { initAcademicCalendar } from './pages/students/academic_calendar.js';
import { initTopRankingStudents } from './pages/students/top_ranking_students.js';
import { initElectronicLibrary } from './pages/digital_repository/electronic_library.js';

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
  if (typeof initTopRankingStudents === 'function') initTopRankingStudents();
  if (typeof initElectronicLibrary === 'function') initElectronicLibrary();
  
  initRouter();
}