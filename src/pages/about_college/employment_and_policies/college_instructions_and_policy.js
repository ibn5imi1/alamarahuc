import { heroSection } from '../../../components/hero_section.js';


// Policy and Instruction Files
const POLICY_FILES = [
  {
    id: 'authority_guide',
    titleKey: 'policy.authority_guide.title',
    defaultTitle: 'Authority Delegation Guide',
    fileId: '1oZuRD_1C7XWi4UajkdbnaXbNUmA5NNf2'
  },
  {
    id: 'complaints_suggestions',
    titleKey: 'policy.complaints_suggestions.title',
    defaultTitle: 'Complaints and Suggestions',
    fileId: '1f45g0pjcuiAC0EmQeAJzNDahU0cucVKL'
  },
  {
    id: 'international_awards',
    titleKey: 'policy.international_awards.title',
    defaultTitle: 'International Awards',
    fileId: '1Rz5cNNOcsqs21JgGIATivcmSnJqdadB8'
  },
  {
    id: 'foreign_students',
    titleKey: 'policy.foreign_students.title',
    defaultTitle: 'Foreign Students Policy',
    fileId: '1pXYVJqN7v5wa-pwjnIbMO_JDan6gAz3F'
  },
  {
    id: 'ethical_conduct',
    titleKey: 'policy.ethical_conduct.title',
    defaultTitle: 'Code of Ethical Conduct',
    fileId: '1JDCM0aD1pfFW542rVT7DaUdP2iv3IISR'
  },
  {
    id: 'scientific_research',
    titleKey: 'policy.scientific_research.title',
    defaultTitle: 'Scientific Research Policy',
    fileId: '1jZDVuvBvR0vZNLggMCMcEOsI4Y1g8m9X'
  },
  {
    id: 'smoking_ban',
    titleKey: 'policy.smoking_ban.title',
    defaultTitle: 'College Smoking Ban Policy',
    fileId: '1T4GvnPa9wAV9L7UKrzRJAF8a3ah7e2VT'
  },
  {
    id: 'summer_training',
    titleKey: 'policy.summer_training.title',
    defaultTitle: 'Summer Training Standards',
    fileId: '1HydOWUIPx92WkkFmuLWtTyWQTZ6ElJC-'
  },
  {
    id: 'special_needs_support',
    titleKey: 'policy.special_needs_support.title',
    defaultTitle: 'Special Needs Students Support Policy',
    fileId: '1GWkh8M9L9DnZpZXMmY_HsYOThMxlEKmi'
  },
];

function buildPolicyItems() {
  return POLICY_FILES.map(policy => `
    <div class="policy-card reveal" data-id="${policy.id}">
      <button class="policy-header" type="button">
        <span class="policy-title" data-i18n="${policy.titleKey}">${policy.defaultTitle}</span>
        <span class="toggle-icon">+</span>
      </button>
      <div class="policy-slide-content">
        <div class="iframe-container">
          <iframe
            data-src="https://drive.google.com/file/d/${policy.fileId}/preview"
            title="${policy.defaultTitle}"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  `).join('');
}

export function collegeInstructionsAndPolicyView() {
  return `
  <div class="college-policy-page">
  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'policy.hero_title',
    titleDefault: 'College Instructions And Policy'
  })}

    <!-- Main Content Container -->
    <section class="policy-container">
      <div class="section-header reveal">
        <h2 data-i18n="policy.section_title">Official Documents and Policies</h2>
        <div class="header-line"></div>
      </div>

      <!-- Accordion List -->
      <div class="policies-accordion">
        ${buildPolicyItems()}
      </div>

      <!-- Academic Freedom Policy Section -->
      <div class="academic-freedom-section reveal">
        <div class="section-header">
          <h2 data-i18n="policy.freedom_title">Academic Freedom Policy</h2>
          <div class="header-line"></div>
        </div>

        <div class="academic-freedom-content">
          <p data-i18n="policy.freedom_intro">Academic freedom represents the freedom of teaching, research, and the dissemination of knowledge, and includes the rights of faculty members, students, and researchers to pursue their scientific and educational activities in accordance with the principles of open dialogue and discussion. Al-Amarah University College values the role of academic freedom as essential for the advancement of knowledge, the promotion of critical thinking, and the development of an academic community based on research and application.</p>

          <h3 data-i18n="policy.freedom_principles_title">(Principles of Academic Freedom)</h3>
          <p data-i18n="policy.freedom_principles_intro">The academic freedom policy is guided by the following principles:</p>
          <ul class="freedom-list">
            <li data-i18n="policy.freedom_principle_1"><strong>Freedom of Inquiry:</strong> Faculty members, students, and researchers have the right to pose and pursue inquiries related to research projects.</li>
            <li data-i18n="policy.freedom_principle_2"><strong>Freedom of Expression:</strong> Faculty members, students, and researchers have the right to express their views, opinions, and ideas inside and outside the classroom, in accordance with applicable scientific research policies.</li>
            <li data-i18n="policy.freedom_principle_3"><strong>Freedom of Publication:</strong> Faculty members, students, and researchers have the right to publish and disseminate their scientific work, including research findings, academic papers, books, and other publications, in accordance with applicable scientific research policies.</li>
            <li data-i18n="policy.freedom_principle_4"><strong>Freedom of Teaching:</strong> Faculty members enjoy academic freedom in selecting course materials in accordance with plans set by the relevant departments, and in designing modern curricula that provide added value to students.</li>
          </ul>

          <h3 data-i18n="policy.freedom_rights_title">(Rights and Responsibilities)</h3>
          <p data-i18n="policy.freedom_rights_intro">Academic freedom is associated with certain rights and responsibilities, including the following:</p>
          <ul class="freedom-list">
            <li data-i18n="policy.freedom_right_1"><strong>Accuracy in Scientific Research:</strong> Faculty members, students, and researchers bear the responsibility of adhering to the principles of academic integrity and intellectual honesty in their scientific work, including publishing research results and accurately citing sources.</li>
            <li data-i18n="policy.freedom_right_2"><strong>Responsibility of Respect:</strong> Faculty members, students, and researchers bear the responsibility of respecting the rights, viewpoints, and opinions of others.</li>
            <li data-i18n="policy.freedom_right_3"><strong>Professionalism:</strong> Faculty members, students, and researchers bear the responsibility of acting professionally, and adhering to the ethics and governing policies of scientific research.</li>
          </ul>

          <h3 data-i18n="policy.freedom_limits_title">(Limits of Academic Freedom)</h3>
          <p data-i18n="policy.freedom_limits_intro">Although academic freedom is a fundamental principle, it is not absolute and is subject to certain restrictions in accordance with legal, ethical, and professional standards. The college may impose restrictions on academic freedom in cases where it conflicts with other important values or interests, such as:</p>
          <ul class="freedom-list">
            <li data-i18n="policy.freedom_limit_1"><strong>Respect for Human Dignity:</strong> Academic freedom does not extend to activities that violate the rights or dignity of others.</li>
            <li data-i18n="policy.freedom_limit_2"><strong>Compliance with the Law:</strong> Academic freedom does not exempt faculty members, students, or researchers from complying with applicable laws, regulations, or college policies.</li>
            <li data-i18n="policy.freedom_limit_3"><strong>Responsibility Toward the College:</strong> Academic freedom does not exempt faculty members, students, or researchers from their responsibilities toward the college, including fulfilling their educational duties and supporting the college's values, mission, and goals.</li>
          </ul>

          <h3 data-i18n="policy.freedom_protection_title">(Protection of Academic Freedom)</h3>
          <p data-i18n="policy.freedom_protection_text">The college is committed to providing and protecting academic freedom for its staff, and strives to ensure that faculty members, students, and researchers are able to exercise their rights. This includes providing support and resources to individuals in a way that enhances their academic freedom.</p>
        </div>
      </div>
    </section>
  </div>
  `;
}

export function initCollegeInstructionsAndPolicy() {
  document.body.addEventListener('click', (e) => {
    const headerBtn = e.target.closest('.policy-header');
    if (!headerBtn) return;

    const pageContainer = document.querySelector('.college-policy-page');
    if (!pageContainer) return; // We verify that we are indeed on the policies page.

    const card = headerBtn.closest('.policy-card');
    const iframe = card.querySelector('iframe');
    const isOpen = card.classList.contains('active');

    // Close remaining open tabs
    document.querySelectorAll('.college-policy-page .policy-card.active').forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('active');
      }
    });

    if (isOpen) {
      card.classList.remove('active');
    } else {
      card.classList.add('active');
      // Load the PDF file via iframe only upon first opening (performance optimization)
      if (iframe && !iframe.src && iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
      }
    }
  });
}