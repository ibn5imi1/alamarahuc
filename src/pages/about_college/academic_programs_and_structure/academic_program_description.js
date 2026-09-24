const ACADEMIC_PROGRAMS = [
    {
        id: 'petroleum',
        i18nKey: 'dept.petroleum_eng.name',
        defaultTitle: 'Department of Petroleum Engineering',
        url: 'https://drive.google.com/file/d/1kU84ddsRpGf0qaAmOcxQeL1RgCJ5RZVA/preview'
    },
    {
        id: 'medical_devices',
        i18nKey: 'dept.medical_devices_eng.name',
        defaultTitle: 'Department of Medical Instrumentation Techniques Engineering',
        url: 'https://drive.google.com/file/d/1JNKdhiNMGadzA83pDDfGna3LtpWWRx4_/preview'
    },
    {
        id: 'mechanical',
        i18nKey: 'dept.mechanical_eng.name',
        defaultTitle: 'Department of Power Mechanics Techniques Engineering',
        url: 'https://drive.google.com/file/d/1qJS_53eiK-HzjH9SqzEpsDFGJMcB1Wfr/preview'
    },
    {
        id: 'dental',
        i18nKey: 'dept.dental_industry.name',
        defaultTitle: 'Department of Dental Technology',
        url: 'https://drive.google.com/file/d/1nxOdtdjsBxYbh_4HddqfuOzOJk2wKzdt/preview'
    },
    {
        id: 'law',
        i18nKey: 'dept.law.name',
        defaultTitle: 'Department of Law',
        url: 'https://drive.google.com/file/d/19HOnPNJvb-SDvYZEGNAEzrdlf4rkVgIR/preview'
    },
    {
        id: 'accounting',
        i18nKey: 'dept.accounting.name',
        defaultTitle: 'Department of Accounting',
        url: 'https://drive.google.com/file/d/105dVh1CbTWyexYNbaDhP-o9V2ZSx71aD/preview'
    },
    {
        id: 'pharmacy',
        i18nKey: 'dept.pharmacy.name',
        defaultTitle: 'Department of Pharmacy',
        url: 'https://drive.google.com/file/d/1dfX7c__0Clsy3fRtSLjO38YB96BnvLVq/preview'
    },
    {
        id: 'chemical',
        i18nKey: 'dept.chemical_eng.name',
        defaultTitle: 'Department of Chemical Engineering and Oil Industries',
        url: 'https://drive.google.com/file/d/1nbC7ioRAa_oPM_8tDAeshotRjCA2F5dy/preview'
    },
    {
        id: 'electrical',
        i18nKey: 'dept.electrical_eng.name',
        defaultTitle: 'Department of Electrical Power Techniques Engineering',
        url: 'https://drive.google.com/file/d/18im8yAdsc7z9LVGJCWK5YTUjAcVU96DO/preview'
    },
    {
        id: 'english',
        i18nKey: 'dept.english_edu.name',
        defaultTitle: 'Department of English Education',
        url: 'https://drive.google.com/file/d/1uebHLVI8uHT5yqyjbIPibu4568KgnsGN/preview'
    }
];

function buildProgramItems() {
    return ACADEMIC_PROGRAMS.map(prog => `
    <div class="program-card reveal" data-id="${prog.id}">
      <button class="program-header" type="button">
        <span class="program-title" data-i18n="${prog.i18nKey}">${prog.defaultTitle}</span>
        <span class="toggle-icon">+</span>
      </button>
      <div class="program-slide-content">
        <div class="iframe-container">
          <iframe 
            data-src="${prog.url}" 
            title="${prog.defaultTitle}"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  `).join('');
}

export function academicProgramDescriptionView() {
    return `
  <div class="academic-program-page">
    <!-- Hero Section -->
    <section class="program-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="program_hero_title">Academic Program Description</h1>
      </div>
    </section>

    <!-- Main Content Container -->
    <section class="program-container">
      <div class="section-header reveal">
        <h2 data-i18n="program_section_title">Academic Programs Specifications</h2>
        <div class="header-line"></div>
      </div>

      <!-- Accordion List -->
      <div class="programs-accordion">
        ${buildProgramItems()}
      </div>
    </section>
  </div>
  `;
}

export function initAcademicProgramDescription() {
    const accordion = document.querySelector('.programs-accordion');
    if (!accordion) return;

    accordion.addEventListener('click', (e) => {
        const headerBtn = e.target.closest('.program-header');
        if (!headerBtn) return;

        const card = headerBtn.closest('.program-card');
        const iframe = card.querySelector('iframe');
        const isOpen = card.classList.contains('active');

        // Close the remaining cards
        document.querySelectorAll('.program-card.active').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });

        if (isOpen) {
            card.classList.remove('active');
        } else {
            card.classList.add('active');
            // Load the PDF file via the iframe only upon the initial opening
            if (iframe && !iframe.src && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
            }
        }
    });
}