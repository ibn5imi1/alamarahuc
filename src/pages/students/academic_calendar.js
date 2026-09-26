import { heroSection } from "../../components/hero_section";

const CALENDAR_DATA = [
  { id: 'y1', year: '2025-2026', fileId: '1IgAHCXFw7695gRV2quBWgw9fD3TBjb_S' },
  { id: 'y2', year: '2024-2025', fileId: '1K2JYON0r_fosHlKLpXTJ80bibFMJi1dY' },
  { id: 'y3', year: '2023-2024', fileId: '1kZXtdq7sonA7YFDXYwZXclUojLchea-X' },
  { id: 'y4', year: '2022-2023', fileId: '1iuZx7y3XFRK1r0cHKmZrdbJGUZSO4ILg' },
  { id: 'y5', year: '2021-2022', fileId: '1md91uH0k27x0s9IlRXXTgJTwNX6z0bZN' },
  { id: 'y6', year: '2020-2021', fileId: '13Xi1udzwtRky6g3NnostrD7QUFbH8aK-' },
  { id: 'y7', year: '2019-2020', fileId: '1JoTj2n7SpAQnkwFZHqmIeguRwT5-wn5L' },
  { id: 'y8', year: '2018-2019', fileId: '1nb0w6oTsJa3Jj68rDvG6WtOz0QB4Y6Ho' },
];

function buildCards() {
  return CALENDAR_DATA.map(item => `
    <div class="year-card reveal" data-file-id="${item.fileId}" data-year="${item.year}">
      <div class="year-icon">📅</div>
      <h3>${item.year}</h3>
      <span class="view-label" data-i18n="calendar.view_label">View Calendar</span>
    </div>
  `).join('');
}

export function academicCalendarView() {
  return `
  <div class="academic-calendar-page">

  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'calendar.hero_title',
    titleDefault: 'Academic Calendar'
  })}

    <section class="calendar-container">
      <div class="section-header reveal">
        <h2 data-i18n="calendar.section_title">Select Academic Year</h2>
        <div class="header-line"></div>
      </div>

      <div class="years-list">
        ${buildCards()}
      </div>
    </section>

    <div class="pdf-modal" id="pdf-modal">
      <div class="pdf-modal-content">
        <div class="pdf-modal-header">
          <h3 id="pdf-modal-title"></h3>
          <div class="pdf-modal-actions">
            <a id="pdf-download-link" href="#" download data-i18n="calendar.download_link">Download File</a>
            <button id="pdf-modal-close" aria-label="Close">&times;</button>
          </div>
        </div>
        <div class="pdf-modal-body">
          <iframe id="pdf-modal-iframe" src="" frameborder="0" scrolling="yes"></iframe>
        </div>
      </div>
    </div>
  </div>
  `;
}

export function initAcademicCalendar() {
  let savedScrollY = 0;

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.year-card');
    if (card) {
      const modal = document.getElementById('pdf-modal');
      if (!modal) return;

      const iframe = document.getElementById('pdf-modal-iframe');
      const titleEl = document.getElementById('pdf-modal-title');
      const downloadLink = document.getElementById('pdf-download-link');

      const fileId = card.getAttribute('data-file-id');
      const year = card.getAttribute('data-year');

      iframe.src = `https://drive.google.com/file/d/${fileId}/preview`;
      downloadLink.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
      titleEl.textContent = year;

      modal.classList.add('active');
      lockBodyScroll();
      return;
    }

    if (e.target.id === 'pdf-modal-close') {
      closeModal();
      return;
    }

    if (e.target.id === 'pdf-modal') {
      closeModal();
    }
  });

  function lockBodyScroll() {
    savedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
  }

  function unlockBodyScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
  }

  function closeModal() {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-modal-iframe');
    if (!modal) return;

    modal.classList.remove('active');
    if (iframe) iframe.src = '';
    unlockBodyScroll();
  }
}