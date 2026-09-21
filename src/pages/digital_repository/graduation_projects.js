// ============================================
// بيانات بحوث التخرج — النص الإنجليزي هو الأساسي، ويُترجم عبر المفاتيح
// url: رابط بحث التخرج الفعلي (يفتح بتبويب جديد)
// ============================================
const PROJECTS_DATA = [
  {
    title: 'Reduction of Heavy Crude Oil Viscosity in Pipeline Transportation', titleKey: 'project.1.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1V55cMvxL_N0wmE9HAHpQc9LesXKwzD_W/view'
  },
  {
    title: 'Wet Oil Processing and Gas Separation Plants To produce crude oil in oil fields', titleKey: 'project.2.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1_pPeDsgMCs-E-BZ-axydwd7uRPx91uZ_/view'
  },
  {
    title: 'Studying the types of separators in oil fields', titleKey: 'project.3.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1Ii16__-HtgHoS-tUyu8qGSmNohiGQyf4/view'
  },
  {
    title: 'Improve Oil Recovery by Water Injection', titleKey: 'project.4.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1iMJiTq9BLCfzhmamkbz_jkd4r9osziL8/view'
  },
  {
    title: 'Study The Productivity Improvement Using Stimulation Methods In Buzurgan Oil Field', titleKey: 'project.5.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1af2ia2spuIMFnnspKFy1T9UqvsPkEsmZ/view'
  },
  {
    title: 'Study of Utilizing of Environmentally-Friendly Corn husks Powders to Minimize the Use of Traditional Chemical Additives in Drilling Fluids', titleKey: 'project.6.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1Rd_O8A60xSg_mmzHi_CtMuEHORT48zG-/view'
  },
  {
    title: 'creating A three dimensional model of producing formations in Halfaya oil field', titleKey: 'project.7.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1tRiI1o0Zt7Akc2JhzRT77W5eoL95N-bF/view'
  },
  {
    title: 'Carbon Dioxide and Sulfur Dioxide Capture from Gas : review', titleKey: 'project.8.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1BIalUqbEIOKnJRGRWQu7DxXhmI08CzJX/view'
  },
  {
    title: 'Study of Petro-physical Characteristics of Mishrif Formation in the Amara Oil field', titleKey: 'project.9.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1XB9TveOPhgYtfYp43mIGcan4Qxe-ItQG/view'
  },
  {
    title: 'STATISTICAL REGRESSION METHODS OF RATE OF PENTERATION IN AL-HALFAYA OIL FIELD USING MUD LOGGING DATA', titleKey: 'project.10.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1fVMbHCqy_j_JNbWdmsCDhWkjinX5yW5U/view'
  },
  {
    title: 'Sea Water Flooding Into Oil Reservoir', titleKey: 'project.11.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1KlCh1mFZeaepX8cAfVAU8Wywp9IJp5Nx/view'
  },
  {
    title: 'Low Salinity Water Flooding into Buzurgan Core Samples', titleKey: 'project.12.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1JyeGpMVoI1_XGesjXtjLky1eUOrj1C_1/view'
  },
  {
    title: 'Flow of Heavy Oils at Low Temperatures Potential Challenges and Solutions', titleKey: 'project.13.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1yX8EywH7naZC_-UKr33_lPZqLk8yTjqK/view'
  },
  {
    title: 'THE EFFECT OF WEIGHTED MATERIALS ON DRILLING FLUID', titleKey: 'project.14.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1x3kCUDrvX8TteBjo_qtw9udlzPPGhOXI/view'
  },
  {
    title: 'Treatment of Produced Watr to Meet API Standards', titleKey: 'project.15.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/164Rs7vPxT9hduZZS2vpsuF9-2t5yBOfo/view'
  },
  {
    title: 'Using Neural Network To predict Pump Pressure', titleKey: 'project.16.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/14IPU_sJxOhlHZaDacZb1FsyjOYktyESw/view'
  },
  {
    title: 'Geostructural Analysis of Buzurgan Oilfield', titleKey: 'project.17.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1g0rCs46SwEXV4Nya8K_MSbB_baSKw_y9/view'
  },
  {
    title: '3D Reservoir Modeling Of Buzurgan Oil Field and Reservoir Of The Mishrif Formation', titleKey: 'project.18.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1WnQJc6QQ5ABkf8zirH98fZSPwydyk-8t/view'
  },
  {
    title: 'Geological buried history of Al- Mishrif formation in Buzurgan oil field and its potential impact on petroleum generation', titleKey: 'project.19.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/11lFLVco_hZJbhCkwbSgKb1xjq-dEdK2K/view'
  },
  {
    title: 'Determination Of In-Situ State of Stress around Wellbore Using Advanced Wireline Technology', titleKey: 'project.20.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1K5bZsoJLw2h9wb6iMY_L6OEgD7x1Rn5G/view'
  },
  {
    title: 'Design of separation units for crude oil at the wells', titleKey: 'project.21.title',
    department: 'Petroleum Engineering', deptKey: 'dept.petroleum_eng.name',
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1upNKY0B-OnuWg_c0o-HR_prTeUPpF9mh/view'
  },
]

function buildRows() {
  return PROJECTS_DATA.map(item => `
    <tr>
      <td data-i18n="${item.titleKey}">${item.title}</td>
      <td data-i18n="${item.deptKey}">${item.department}</td>
      <td data-i18n-skip>${item.year}</td>
      <td>
        <a href="${item.url}" target="_blank" rel="noopener" class="view-link" data-i18n="repository.view_label">View</a>
      </td>
    </tr>
  `).join('');
}

export function graduationProjectsView() {
  return `
  <div class="graduation-projects-page">
    <!-- Hero Banner -->
    <section class="projects-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="repository.projects_hero_title">Graduation Projects</h1>
      </div>
    </section>

    <!-- Content Container -->
    <section class="projects-container">
      <div class="section-header reveal">
        <h2 data-i18n="repository.projects_section_title">Graduation Research List</h2>
        <div class="header-line"></div>
      </div>

      <div class="table-wrapper reveal">
        <table>
          <thead>
            <tr>
              <th data-i18n="repository.col_title">Research Title</th>
              <th data-i18n="repository.col_department">Department</th>
              <th data-i18n="repository.col_year">Academic Year</th>
              <th data-i18n="repository.col_view">View</th>
            </tr>
          </thead>
          <tbody>
            ${buildRows()}
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
}