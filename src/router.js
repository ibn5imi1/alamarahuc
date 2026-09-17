// router.js
import { home, initSlider, initCounters } from './pages/home.js';
import { departmentView } from './pages/college_departments/departmentView.js';

// About College
import { aboutTheCollegeView } from './pages/about_college/about/about_the_college.js';
import { visionView } from './pages/about_college/about/vision.js';
import { messageFromTheDeanView } from './pages/about_college/about/message_from_the_dean.js';
import { academicProgramDescriptionView } from './pages/about_college/academic_programs_and_structure/academic_program_description.js';
import { certificationsAndClassificationsView } from './pages/about_college/academic_programs_and_structure/certifications_and_classifications.js';
import { strategicPlanView } from './pages/about_college/academic_programs_and_structure/strategic_plan.js';
import { collegeActivitiesView } from './pages/about_college/facilities_and_information/college_activities.js';
import { locationView } from './pages/about_college/facilities_and_information/location.js';
import { statisticsView } from './pages/about_college/facilities_and_information/statistics.js';
import { thePrincipleOfTransparencyView } from './pages/about_college/facilities_and_information/the_principle_of_transparency.js';
import { collegeInstructionsAndPolicyView } from './pages/about_college/employment_and_policies/college_instructions_and_policy.js';
import { jobsView } from './pages/about_college/employment_and_policies/jobs.js';

// Faculty Members
import { booksView } from './pages/faculty_members/publications/books.js';
import { patentView } from './pages/faculty_members/publications/patent.js';
import { researchView } from './pages/faculty_members/publications/research.js';
import { teachingView } from './pages/faculty_members/teaching_staff.js';

// Students
import { academicCalendarView } from './pages/students/academic_calendar.js';
import { examinationCommitteeNumbersView } from './pages/students/examination_committee_numbers.js';
import { graduatesView } from './pages/students/graduates.js';
import { topRankingStudentsView } from './pages/students/top_ranking_students.js';

// Digital Repository
import { photoGalleryView } from './pages/digital_repository/image_library/photo_gallery.js';
import { videoGalleryView } from './pages/digital_repository/image_library/video_gallery.js';
import { electronicLibraryView } from './pages/digital_repository/electronic_library.js';
import { graduationProjectsView } from './pages/digital_repository/graduation_projects.js';
import { lecturesView } from './pages/digital_repository/lectures.js';
import { theLibraryView } from './pages/digital_repository/the_library.js';

// Electronic Services
// import { googleClassroomView } from './pages/electronic_services/educational_platforms/google_classroom.js';
// import { moodleView } from './pages/electronic_services/educational_platforms/moodle.js';
import { complaintsAndCommentsView } from './pages/electronic_services/complaints_and_comments.js';
// import { emailView } from './pages/electronic_services/email.js';
// import { relatedWebsitesView } from './pages/electronic_services/related_websites.js';

// Contact Us
import { contactUsView } from './pages/contact_us.js';

import { applyDeptLanguage } from './department_translate.js';
import { applyMainLanguage } from './main_translate.js';
import { applyTeachersLanguage } from './teachers_translate.js';

import { initScrollReveal } from './scrollReveal.js';

// دالة مساعدة لاستدعاء الدوال بأمان سواء كانت تعيد String HTML أو تُرجع مخرجات مباشرة
function renderView(viewFunc, params = null) {
  if (typeof viewFunc === 'function') {
    return viewFunc(params);
  }
  return '<div class="container" style="padding: 50px 0; text-align: center;"><h2>الصفحة قيد التطوير</h2></div>';
}

const routes = {
  '/': () => {
    const html = home();
    setTimeout(() => {
      if (typeof initSlider === 'function') initSlider();
      if (typeof initCounters === 'function') initCounters();
    }, 0);
    return html;
  },
  '/department': () => {
    const urlParams = new URLSearchParams(window.location.search);
    const deptId = urlParams.get('id');
    return renderView(departmentView, deptId);
  },

  // About College
  '/about/college': () => renderView(aboutTheCollegeView),
  '/about/vision': () => renderView(visionView),
  '/about/dean-speech': () => renderView(messageFromTheDeanView),
  '/about/academic-program': () => renderView(academicProgramDescriptionView),
  '/about/certifications': () => renderView(certificationsAndClassificationsView),
  '/about/strategic-plan': () => renderView(strategicPlanView),
  '/about/activities': () => renderView(collegeActivitiesView),
  '/about/location': () => renderView(locationView),
  '/about/statistics': () => renderView(statisticsView),
  '/about/transparency': () => renderView(thePrincipleOfTransparencyView),
  '/about/instructions': () => renderView(collegeInstructionsAndPolicyView),
  '/about/jobs': () => renderView(jobsView),



  // Faculty Members
  '/faculty/books': () => renderView(booksView),
  '/faculty/patents': () => renderView(patentView),
  '/faculty/research': () => renderView(researchView),
  '/faculty/teaching': () => renderView(teachingView),

  // Students
  '/students/calendar': () => renderView(academicCalendarView),
  '/students/exams': () => renderView(examinationCommitteeNumbersView),
  '/students/graduates': () => renderView(graduatesView),
  '/students/top-rank': () => renderView(topRankingStudentsView),

  // Digital Repository
  '/repository/photos': () => renderView(photoGalleryView),
  '/repository/videos': () => renderView(videoGalleryView),
  '/repository/e-library': () => renderView(electronicLibraryView),
  '/repository/projects': () => renderView(graduationProjectsView),
  '/repository/lectures': () => renderView(lecturesView),
  '/repository/library': () => renderView(theLibraryView),

  // Electronic Services
  '/services/google-classroom': () => renderView(googleClassroomView),
  '/services/moodle': () => renderView(moodleView),
  '/services/complaints': () => renderView(complaintsAndCommentsView),
  '/services/email': () => renderView(emailView),
  '/services/websites': () => renderView(relatedWebsitesView),

  // Contact Us
  '/contact_us': () => renderView(contactUsView)
};

export function handleRouting() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const path = window.location.pathname;
  const renderPage = routes[path] || routes['/'];

  const content = renderPage();
  if (content !== undefined) {
    mainContent.innerHTML = content;
  }

  // تطبيق الترجمة المناسبة بعد استبدال محتوى mainContent
  if (path === '/department') {
    if (typeof applyDeptLanguage === 'function') applyDeptLanguage();
  } else if (path === '/faculty/teaching') {
    if (typeof applyTeachersLanguage === 'function') applyTeachersLanguage();
  } else {
    if (typeof applyMainLanguage === 'function') applyMainLanguage();
  }

  initScrollReveal();

  window.scrollTo(0, 0);
}

export function navigateTo(url) {
  window.history.pushState(null, null, url);
  handleRouting();
}

export function initRouter() {
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (link && link.origin === window.location.origin) {
      const href = link.getAttribute('href');

      // إذا كان الرابط فارغ أو # أو رابط جافاسكريبت نتركه (خاص بالقوائم المنسدلة في الموبايل)
      if (!href || href === '#' || href.startsWith('javascript:')) return;

      e.preventDefault();

      // التوجيه وتغيير الصفحة
      navigateTo(href);

      // غلق قائمة الهواتف عند اختيار أي صفحة
      const navList = document.getElementById('nav-list');
      const overlay = document.getElementById('nav-overlay');
      const toggleBtn = document.getElementById('menu-toggle');
      if (navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (toggleBtn) toggleBtn.classList.remove('active');
      }
    }
  });

  window.addEventListener('popstate', handleRouting);
  handleRouting();
}

// إعادة تطبيق ترجمة الصفحة الحالية فقط عند تبديل اللغة، بدون Reload أو تغيير المسار
window.addEventListener('languageChanged', () => {
  const path = window.location.pathname;

  if (path === '/department') {
    if (typeof applyDeptLanguage === 'function') applyDeptLanguage();
  } else if (path === '/faculty/teaching') {
    if (typeof applyTeachersLanguage === 'function') applyTeachersLanguage();
  } else {
    if (typeof applyMainLanguage === 'function') applyMainLanguage();
  }
});