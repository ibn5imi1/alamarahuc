// ============================================
// أقسام "الرؤية والرسالة والأهداف" — كل قسم فيه عنوان وفقرات
// ============================================
const VISION_SECTIONS = [
    {
        titleKey: 'vision.title',
        title: 'Vision',
        paragraphs: [
            { key: 'vision.p1', text: 'Al-Amarah University College seeks to contribute seriously and effectively to building the higher education system in Iraq, integrating with other Iraqi universities and being at the forefront of educational institutions preparing future leaders in society. The college hopes to be a focal point in spreading science and knowledge, and to light the path for ambitious students awaiting the opportunity to contribute to the renaissance and progress of their homeland. Our vision does not stop at the boundaries of academic education, but goes beyond that to preparing a conscious generation believing in noble values, capable of facing contemporary challenges, and participating effectively in achieving sustainable development.' },
            { key: 'vision.p2', text: 'Within the framework of this vision, the college works to establish a culture of scientific research and innovation, and strengthens the spirit of cooperation between various scientific disciplines. It also aims to be an active entity in spreading knowledge that contributes to the knowledge and cultural radiance of Iraqi society. The college is keen to be an educational environment that seeks excellence, keeps pace with modern scientific developments, and qualifies students to be active elements in the labor market, and in positions of social and economic influence, whether within Al-Amarah city or in the rest of Iraq\'s governorates.' },
            { key: 'vision.p3', text: 'This vision reflects the college\'s commitment to being a genuine tributary for making positive change in society, and to work tirelessly for graduates who possess knowledge, understanding, and responsibility in serving their homeland and nation.' },
        ]
    },
    {
        titleKey: 'mission.title',
        title: 'Mission',
        paragraphs: [
            { key: 'mission.p1', text: 'The mission of Al-Amarah University College is to be a beacon of science and knowledge, by providing integrated and attractive academic education that combines a strong theoretical foundation with distinguished practical application. The college seeks to prepare specialized scientific cadres in the various specializations it offers, so that these cadres are able to meet the needs of the labor market in Iraq, and contribute to enhancing professional performance in society. The college is committed to spreading knowledge and modern standards in science, and developing them in line with the requirements of sustainable development, while observing human and professional values.' },
            { key: 'mission.p2', text: 'The mission focuses on developing educational and research processes within the college, and working to improve the quality of education and continuously evaluate work mechanisms. The college also encourages students towards critical thinking and scientific analysis, nurtures their abilities for creativity and innovation, and works to qualify them to be effective elements in society after graduation. To achieve this, the college provides a stimulating educational environment based on interaction between students and faculty members, employs modern scientific and technical laboratories, in addition to supporting scientific and research activities that enrich the academic experience.' },
            { key: 'mission.p3', text: 'The mission also aims to strengthen academic and professional partnerships with various community institutions, with the aim of expanding students\' horizons and practical experiences, and opening continuous training and development opportunities for them. The college affirms its commitment to instilling professional ethics and high values in all aspects of the educational process, contributing to graduating a generation of graduates capable of serving society and the state in accordance with labor laws and the requirements of the modern era.' },
        ]
    },
    {
        titleKey: 'goals.title',
        title: 'Goals',
        paragraphs: [
            { key: 'goals.p1', text: 'Al-Amarah University College seeks to achieve a set of strategic goals that complement its vision and mission in serving higher education and society alike. Among the most prominent of these goals is developing and improving the quality of educational and research processes, ensuring that the college\'s graduates are scientifically and practically qualified to deal with the renewed requirements of the labor market. This includes updating curricula, developing teaching methods, and providing modern laboratories and equipment that help develop knowledge and applied skills among students.' },
            { key: 'goals.p2', text: 'The college also aims to strengthen the principles of scientific analysis and creative thinking within the framework of producing, developing, and disseminating knowledge, contributing to preparing students capable of facing complex problems and analyzing them with well-studied scientific methods. The college also seeks to qualify specialized human resources that meet society\'s needs in various fields, and contribute to meeting sustainable development goals at the level of Iraq in general.' },
            { key: 'goals.p3', text: 'Among the important goals is also developing students\' cognitive and mental skills through a mix of theoretical and applied studies, with continuous communication with them to develop their technical and practical skills needed by the labor market. This includes providing an integrated educational environment that includes advanced scientific, research, and computer laboratories, in addition to equipping classrooms with the latest educational technologies.' },
            { key: 'goals.p4', text: 'The college also aims to open scientific, humanitarian, and applied departments that serve society and achieve a balance between theoretical knowledge and practical application, in addition to supporting sustainable development and community service through projects and educational and research programs that enhance graduates\' contribution to various development fields.' },
        ]
    },
];

function buildSection(section) {
    const paragraphsHtml = section.paragraphs.map(p => `
    <p class="vision-paragraph" data-i18n="${p.key}">${p.text}</p>
  `).join('');

    return `
    <div class="vision-section reveal">
      <h2 data-i18n="${section.titleKey}">${section.title}</h2>
      <div class="section-divider"></div>
      ${paragraphsHtml}
    </div>
  `;
}

export function visionView() {
    return `
  <div class="vision-page">
    <!-- Hero Banner -->
    <section class="vision-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="vision.hero_title">Vision, Mission and Goals</h1>
      </div>
    </section>

    <!-- Content Container -->
    <section class="vision-container">
      ${VISION_SECTIONS.map(buildSection).join('')}
    </section>
  </div>
  `;
}