import { heroSection } from '../../../components/hero_section.js';

const ABOUT_PARAGRAPHS = [
  {
    key: 'about.p1',
    text: 'Al-Amarah University College was established in 2017 by Cabinet Resolution No. (358) of 2017, based in Maysan Governorate — Al-Amarah city, at the northern entrance of the governorate, aiming to expand higher education in the province and Iraq, and to provide an educational environment enabling ambitious youth to obtain distinguished academic education in line with contemporary developments. The founding of the college stemmed from ambitious visions to build a scientific and cultural edifice contributing to preparing specialized scientific cadres that play an active role in building and developing society, and enhancing Iraq\'s modern renaissance by preparing a generation capable of facing future challenges and participating in national development.'
  },
  {
    key: 'about.p2',
    text: 'Upon its establishment, the college included four departments in engineering, legal, and accounting fields. Over time, with the increasing needs of society and the labor market in Maysan Governorate, the college expanded to include more than 18 scientific departments across diverse specializations spanning engineering, medical sciences, technology, and humanities, with continuous interest in adding new specializations aligned with modern transformations in the labor market.'
  },
  {
    key: 'about.p3',
    text: 'Since its establishment, the college has responded rapidly to development requirements and educational plans by increasing the number of students admitted across various specializations, and attracting distinguished teaching staff from Iraqi and international universities to build a strong scientific foundation. The college also works to enhance the quality of academic and applied education by developing curricula, equipping scientific laboratories, and providing an active research environment that encourages creativity and innovation.'
  },
  {
    key: 'about.p4',
    text: 'The college has achieved important accomplishments at the local and international levels, obtaining several international quality certificates and standards, such as ISO 9001 for quality management systems, ISO 14001 for environmental management, ISO 45001 for occupational health and safety, and ISO 50001 for energy management, reflecting the college\'s commitment to international standards in academic and operational management, and confirming its keenness to provide high-quality education in line with the highest global standards.'
  },
  {
    key: 'about.p5',
    text: 'The college has also achieved advanced rankings in global classifications through its participation in the UI GreenMetric World University Ranking, which measures the sustainability of universities worldwide, achieving advanced positions among Iraqi and international universities, reflecting its progress and efforts in the fields of environmental conservation and sustainability.'
  },
  {
    key: 'about.p6',
    text: 'Al-Amarah University College seeks to strengthen cooperation with the local community, health and industrial centers, and higher education institutions, in order to support practical training opportunities for students, exchange academic expertise, and contribute to implementing projects that serve the community. The college also works to support scientific research and encourage students to participate in scientific conferences and seminars to enhance their research skills and prepare them to compete in local and international scientific arenas.'
  },
  {
    key: 'about.p7',
    text: 'Through these continuous efforts, Al-Amarah University College continues its journey towards achieving ambitious visions in providing distinguished education, preparing qualified graduates capable of facing the challenges of the era, and contributing to building society and supporting development in Al-Amarah city and its surrounding areas, thereby enhancing the college\'s standing at both the academic and community levels.'
  },
];

function buildParagraphs() {
  return ABOUT_PARAGRAPHS.map(p => `
    <p class="about-paragraph reveal" data-i18n="${p.key}">${p.text}</p>
  `).join('');
}

export function aboutTheCollegeView() {
  return `
  <div class="about-the-college-page">
  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'about.hero_title',
    titleDefault: 'About The College'
  })}

    <!-- Content Container -->
    <section class="about-container">
      <div class="section-header reveal">
        <h2 data-i18n="about.section_title">Al-Amarah University College</h2>
        <div class="header-line"></div>
      </div>

      <div class="about-content">
        ${buildParagraphs()}
      </div>
    </section>
  </div>
  `;
}