// router.js

// Page View and Component Imports
import { home, initSlider, initCounters } from './pages/home.js';
import { departmentView } from './pages/college_departments/departmentView.js';

// About College
import { aboutTheCollegeView } from './pages/about_college/about/about_the_college.js';
import { visionView } from './pages/about_college/about/vision.js';
import { messageFromTheDeanView } from './pages/about_college/about/message_from_the_dean.js';
import { academicProgramDescriptionView, initAcademicProgramDescription } from './pages/about_college/academic_programs_and_structure/academic_program_description.js';
import { certificationsAndClassificationsView } from './pages/about_college/academic_programs_and_structure/certifications_and_classifications.js';
import { strategicPlanView } from './pages/about_college/academic_programs_and_structure/strategic_plan.js';
import { organizationalStructureView } from './pages/about_college/academic_programs_and_structure/the_college\'s_organizational_structure.js';

import { collegeActivitiesView } from './pages/about_college/facilities_and_information/college_activities.js';
import { locationView } from './pages/about_college/facilities_and_information/location.js';
import { statisticsView } from './pages/about_college/facilities_and_information/statistics.js';
import { thePrincipleOfTransparencyView } from './pages/about_college/facilities_and_information/the_principle_of_transparency.js';
import { collegeInstructionsAndPolicyView } from './pages/about_college/employment_and_policies/college_instructions_and_policy.js';
import { jobsView } from './pages/about_college/employment_and_policies/jobs.js';

// Faculty Members
import { booksView } from './pages/faculty_members/publications/books.js';
import { patentView } from './pages/faculty_members/publications/patents.js';
import { researchView } from './pages/faculty_members/publications/research.js';
import { teachingView } from './pages/faculty_members/teaching_staff.js';

// Students
import { academicCalendarView } from './pages/students/academic_calendar.js';
import { graduatesView } from './pages/students/graduates.js';
import { topRankingStudentsView } from './pages/students/top_ranking_students.js';

// Digital Repository
import { photoGalleryView, initPhotoGalleryGrid } from './pages/digital_repository/media/photo_gallery.js';
import { videoGalleryView } from './pages/digital_repository/media/video_gallery.js';
import { graduationProjectsView } from './pages/digital_repository/graduation_projects.js';
import { theLibraryView, initTheLibraryStats } from './pages/digital_repository/the_library.js';
import { electronicLibraryView } from './pages/digital_repository/electronic_library.js';

// Electronic Services
import { complaintsAndCommentsView } from './pages/electronic_services/complaints_and_comments.js';
import { relatedWebsitesView } from './pages/electronic_services/related_websites.js';

// Contact Us
import { contactUsView } from './pages/contact_us.js';

// Translation Module Imports
import { applyDeptLanguage } from './translate/department_translate.js';
import { applyMainLanguage } from './translate/main_translate.js';
import { applyTeachersLanguage } from './translate/teachers_translate.js';
import { applyStudentLanguage } from './translate/student_translate.js';
import { applyRepositoryLanguage } from './translate/repository_translate.js';
import { applyElectronicServicesLanguage } from './translate/electronic_services_translate.js';
import { applyAboutCollegeLanguage } from './translate/about_college_translate.js';

import { initScrollReveal } from './scrollReveal.js';

/**
 * Safely executes a view rendering function.
 * @param {Function} viewFunc - Function returning HTML string for a route.
 * @param {Object|string|null} params - Parameters to pass to the view function.
 * @returns {string} The rendered HTML content or a fallback template if undefined.
 */
function renderView(viewFunc, params = null) {
  if (typeof viewFunc === 'function') {
    return viewFunc(params);
  }
  return '<div class="container" style="padding: 50px 0; text-align: center;"><h2>الصفحة قيد التطوير</h2></div>';
}

/**
 * Route Mapping Table.
 * Associates URL pathnames with their corresponding view rendering functions 
 * and post-render initialization scripts (via setTimeout to run after DOM injection).
 */
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

  // Digital Repository Routes
  '/repository/library': () => {
    const html = theLibraryView();
    setTimeout(() => {
      if (typeof initTheLibraryStats === 'function') initTheLibraryStats();
    }, 0);
    return html;
  },
  '/repository/photos': () => {
    const html = photoGalleryView();
    setTimeout(() => {
      if (typeof initPhotoGalleryGrid === 'function') initPhotoGalleryGrid();
    }, 0);
    return html;
  },
  '/repository/videos': () => renderView(videoGalleryView),
  '/repository/projects': () => renderView(graduationProjectsView),
  '/repository/e-library': () => renderView(electronicLibraryView),

  // About College Routes
  '/about/college': () => renderView(aboutTheCollegeView),
  '/about/vision': () => renderView(visionView),
  '/about/dean-speech': () => renderView(messageFromTheDeanView),
  '/about/academic-program': () => {
    const html = academicProgramDescriptionView();
    setTimeout(() => {
      if (typeof initAcademicProgramDescription === 'function') {
        initAcademicProgramDescription();
      }
    }, 0);
    return html;
  },
  '/about/certifications': () => renderView(certificationsAndClassificationsView),
  '/about/strategic-plan': () => renderView(strategicPlanView),
  '/about/organization-stricture': () => renderView(organizationalStructureView),
  '/about/activities': () => renderView(collegeActivitiesView),
  '/about/location': () => renderView(locationView),
  '/about/statistics': () => renderView(statisticsView),
  '/about/transparency': () => renderView(thePrincipleOfTransparencyView),
  '/about/instructions': () => renderView(collegeInstructionsAndPolicyView),
  '/about/jobs': () => renderView(jobsView),

  // Faculty Members Routes
  '/faculty/books': () => renderView(booksView),
  '/faculty/patents': () => renderView(patentView),
  '/faculty/research': () => renderView(researchView),
  '/faculty/teaching': () => renderView(teachingView),

  // Students Routes
  '/students/calendar': () => renderView(academicCalendarView),
  '/students/graduates': () => renderView(graduatesView),
  '/students/top-rank': () => renderView(topRankingStudentsView),

  // Electronic Services Routes
  '/services/complaints': () => renderView(complaintsAndCommentsView),
  '/services/websites': () => renderView(relatedWebsitesView),

  // Contact Us
  '/contact_us': () => renderView(contactUsView)
};

// Route Groups for Translation Scoping
const REPOSITORY_PATHS = [
  '/repository/projects',
  '/repository/photos',
  '/repository/videos',
  '/repository/e-library',
  '/repository/library',
];
const ELECTRONIC_SERVICES_PATHS = [
  '/services/websites',
  '/services/complaints',
];
const ABOUT_COLLEGE_PATHS = [
  '/about/college',
  '/about/vision',
  '/about/dean-speech',
  '/about/academic-program',
  '/about/organization-stricture',
  '/about/certifications',
  '/about/strategic-plan',
  '/about/activities',
  '/about/location',
  '/about/statistics',
  '/about/transparency',
  '/about/instructions',
  '/about/jobs',
];

/**
 * Applies the matching translation dictionary based on the target URL path.
 * @param {string} path - Current window pathname.
 */
function applyRouteLanguage(path) {
  if (path === '/department') {
    if (typeof applyDeptLanguage === 'function') applyDeptLanguage();
  } else if (
    path === '/faculty/teaching' ||
    path === '/faculty/research' ||
    path === '/faculty/books' ||
    path === '/faculty/patents'
  ) {
    if (typeof applyTeachersLanguage === 'function') applyTeachersLanguage();
  } else if (
    path === '/students/calendar' ||
    path === '/students/graduates' ||
    path === '/students/top-rank'
  ) {
    if (typeof applyStudentLanguage === 'function') applyStudentLanguage();
  } else if (REPOSITORY_PATHS.includes(path)) {
    if (typeof applyRepositoryLanguage === 'function') applyRepositoryLanguage();
  } else if (ELECTRONIC_SERVICES_PATHS.includes(path)) {
    if (typeof applyElectronicServicesLanguage === 'function') applyElectronicServicesLanguage();
  } else if (ABOUT_COLLEGE_PATHS.includes(path)) {
    if (typeof applyAboutCollegeLanguage === 'function') applyAboutCollegeLanguage();
  } else {
    if (typeof applyMainLanguage === 'function') applyMainLanguage();
  }
}

/**
 * Main routing handler. 
 * Renders page views into the main content container, applies active translations,
 * initializes scroll animations, and resets window scroll position to top.
 */
export function handleRouting() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const path = window.location.pathname;
  const renderPage = routes[path] || routes['/'];

  const content = renderPage();
  if (content !== undefined) {
    mainContent.innerHTML = content;
  }

  applyRouteLanguage(path);
  initScrollReveal();
  window.scrollTo(0, 0);
}

/**
 * Updates browser history state using HTML5 History API and triggers view rendering.
 * @param {string} url - Target URL path to navigate to.
 */
export function navigateTo(url) {
  window.history.pushState(null, null, url);
  handleRouting();
}

/**
 * Initializes single-page application (SPA) router settings and event listeners.
 * Intercepts anchor tag click events for internal client-side navigation.
 */
export function initRouter() {
  // Event Delegation: Intercept link clicks for SPA routing
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (link && link.origin === window.location.origin) {
      const href = link.getAttribute('href');

      if (!href || href === '#' || href.startsWith('javascript:')) return;

      e.preventDefault();
      navigateTo(href);

      // Close mobile navigation menu upon clicking a link
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

  // Handle browser navigation actions (Back/Forward buttons)
  window.addEventListener('popstate', handleRouting);

  // Perform initial route rendering
  handleRouting();
}

/**
 * Global Event Listener for language updates.
 * Re-applies translations without triggering a full page reload or route transition.
 */
window.addEventListener('languageChanged', () => {
  const path = window.location.pathname;
  applyRouteLanguage(path);
});