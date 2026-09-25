// main.js
import { header, initMobileMenu } from "./components/header.js";
import { footer } from "./components/footer.js";
import { initLanguage } from './translate/main_translate.js';
import { initRouter } from './router.js';
import { initAcademicCalendar } from './pages/students/academic_calendar.js';
import { initTopRankingStudents } from './pages/students/top_ranking_students.js';
import { initElectronicLibrary } from './pages/digital_repository/electronic_library.js';
import { initVideoGallery } from './pages/digital_repository/media/video_gallery.js';
import { initPhotoGallery } from './pages/digital_repository/media/photo_gallery.js';
import { initComplaintsForm } from './pages/electronic_services/complaints_and_comments.js';
import { initCollegeInstructionsAndPolicy } from './pages/about_college/employment_and_policies/college_instructions_and_policy.js';

// ... inside the main block:
if (typeof initVideoGallery === 'function') initVideoGallery();
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
  if (typeof initVideoGallery === 'function') initVideoGallery();
  if (typeof initPhotoGallery === 'function') initPhotoGallery();
  if (typeof initComplaintsForm === 'function') initComplaintsForm();
  if (typeof initCollegeInstructionsAndPolicy === 'function') initCollegeInstructionsAndPolicy();

  initRouter();
}

