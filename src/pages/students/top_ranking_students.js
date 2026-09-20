import { applyStudentLanguage } from '../../translate/student_translate.js';

// ============================================
// بيانات الطلبة — النص الإنجليزي هنا هو الأساسي (يظهر افتراضيًا)
// وكل حقل نصي له مفتاح ترجمة مقابل بملف students_translate_ar.json فقط
// ============================================
const STUDENTS_DATA = [
  {
    name: 'Eisa Maad Naji Abbas', nameKey: 'student.1.name',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Ali Majeed Mohammed Shamikh', nameKey: 'student.2.name',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Ayman Faraj Manati', nameKey: 'student.3.name',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Alaa Abdul-Zahra Muhaibis', nameKey: 'student.4.name',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Zahraa Hamad Wahid Habib', nameKey: 'student.5.name',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Murtada Haidar Hussein Sawadi', nameKey: 'student.6.name',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Mohammed Hussein Taloubi Armout', nameKey: 'student.7.name',
    department: 'Power Mechanics Engineering Technology Department', deptKey: 'dept.mechanical_eng.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Qusay Jassim Hamid Tahir', nameKey: 'student.8.name',
    department: 'Power Mechanics Engineering Technology Department', deptKey: 'dept.mechanical_eng.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Milad Talib Abdul Hamid Youssef', nameKey: 'student.9.name',
    department: 'Power Mechanics Engineering Technology Department', deptKey: 'dept.mechanical_eng.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Ali Hussein Zghair Attia', nameKey: 'student.10.name',
    department: 'Power Mechanics Engineering Technology Department', deptKey: 'dept.mechanical_eng.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Mohammed Aoun Jassim Sahin', nameKey: 'student.11.name',
    department: 'Power Mechanics Engineering Technology Department', deptKey: 'dept.mechanical_eng.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Mohammed Aoun Jassim Sahin', nameKey: 'student.12.name',
    department: 'Power Mechanics Engineering Technology Department', deptKey: 'dept.mechanical_eng.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Duha Majid Abboud Adday', nameKey: 'student.13.name',
    department: 'Law Department', deptKey: 'dept.law.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'first', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Nour Haitham Abd al-Latif Jassim', nameKey: 'student.14.name',
    department: 'Law Department', deptKey: 'dept.law.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Haider Khalaf Ahmed Murad', nameKey: 'student.15.name',
    department: 'Law Department', deptKey: 'dept.law.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Adhraa Majid Lafta Fayyad', nameKey: 'student.16.name',
    department: 'Law Department', deptKey: 'dept.law.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Zahraa Nasser Naeem Laibi', nameKey: 'student.17.name',
    department: 'Law Department', deptKey: 'dept.law.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Hamza Hassan Sharoud Aliwi', nameKey: 'student.18.name',
    department: 'Law Department', deptKey: 'dept.law.name',
    stage: 'Second Stage', stageKey: 'stage.second',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Zahraa Raed Adnan Hanoun', nameKey: 'student.19.name',
    department: 'Law Department', deptKey: 'dept.accounting.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Zainab Hatem Ismail Hassan', nameKey: 'student.20.name',
    department: 'Law Department', deptKey: 'dept.accounting.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Ammar Kadhim Finjan Sahn', nameKey: 'student.21.name',
    department: 'Law Department', deptKey: 'dept.accounting.name',
    stage: 'First Stage', stageKey: 'stage.first',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
  {
    name: 'Inaam Jabbar Abdul Rahim', nameKey: 'student.22.name',
    department: 'Law Department', deptKey: 'dept.accounting.name',
    stage: 'First Second', stageKey: 'stage.second',
    position: 'First', positionKey: 'position.first',
    year: '2019-2020'
  },
  {
    name: 'Hawraa Ali Abdul-Hussein', nameKey: 'student.23.name',
    department: 'Law Department', deptKey: 'dept.accounting.name',
    stage: 'First Second', stageKey: 'stage.second',
    position: 'Second', positionKey: 'position.second',
    year: '2019-2020'
  },
  {
    name: 'Fatima Ghanem Hamid Washah', nameKey: 'student.24.name',
    department: 'Law Department', deptKey: 'dept.accounting.name',
    stage: 'First Second', stageKey: 'stage.second',
    position: 'Third', positionKey: 'position.third',
    year: '2019-2020'
  },
]

const PAGE_SIZE = 10;
let currentPage = 1;

function getTotalPages() {
  return Math.ceil(STUDENTS_DATA.length / PAGE_SIZE);
}

function renderRows(page) {
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = STUDENTS_DATA.slice(start, start + PAGE_SIZE);

  return pageItems.map((student, index) => `
    <tr>
      <td>${start + index + 1}</td>
      <td data-i18n="${student.nameKey}">${student.name}</td>
      <td data-i18n="${student.deptKey}">${student.department}</td>
      <td data-i18n="${student.stageKey}">${student.stage}</td>
      <td data-i18n="${student.positionKey}">${student.position}</td>
      <td data-i18n-skip>${student.year}</td>
    </tr>
  `).join('');
}

function renderPagination(page) {
  const totalPages = getTotalPages();
  let buttons = '';
  for (let i = 1; i <= totalPages; i++) {
    buttons += `<button class="page-btn ${i === page ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  return buttons;
}

export function topRankingStudentsView() {
  currentPage = 1;

  return `
  <div class="top-ranking-page">
    <section class="ranking-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="ranking.hero_title">Top Ranking Students</h1>
      </div>
    </section>

    <section class="ranking-container">
      <div class="section-header reveal">
        <h2 data-i18n="ranking.section_title">Top Ranking Students List</h2>
        <div class="header-line"></div>
      </div>

      <div class="table-wrapper reveal">
        <table>
          <thead>
            <tr>
              <th data-i18n="ranking.col_number">#</th>
              <th data-i18n="ranking.col_name">Student Name</th>
              <th data-i18n="ranking.col_department">Department</th>
              <th data-i18n="ranking.col_stage">Stage</th>
              <th data-i18n="ranking.col_position">Rank Order</th>
              <th data-i18n="ranking.col_year">Academic Year</th>
            </tr>
          </thead>
          <tbody id="ranking-table-body" class="fade-transition">
            ${renderRows(currentPage)}
          </tbody>
        </table>
      </div>

      <div class="pagination" id="ranking-pagination">
        ${renderPagination(currentPage)}
      </div>
    </section>
  </div>
  `;
}

export function initTopRankingStudents() {
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.page-btn');
    if (!btn) return;

    const pageContainer = document.querySelector('.top-ranking-page');
    if (!pageContainer) return;

    const newPage = parseInt(btn.getAttribute('data-page'), 10);
    if (newPage === currentPage) return;

    const tbody = document.getElementById('ranking-table-body');
    const paginationEl = document.getElementById('ranking-pagination');
    if (!tbody || !paginationEl) return;

    tbody.classList.add('fade-out');

    setTimeout(async () => {
      currentPage = newPage;
      tbody.innerHTML = renderRows(currentPage);
      paginationEl.innerHTML = renderPagination(currentPage);
      tbody.classList.remove('fade-out');

      await applyStudentLanguage();
    }, 200);
  });
}