import { applyRepositoryLanguage } from '../../translate/repository_translate.js';
import { heroSection } from '../../components/hero_section.js';

const DEPARTMENTS = [
  { slug: 'petroleum_eng', labelKey: 'dept.petroleum_eng.name', label: 'Petroleum Engineering' },
  { slug: 'mechanical_eng', labelKey: 'dept.mechanical_eng.name', label: 'Mechanical Power Engineering Technologies' },
  { slug: 'chemical_eng', labelKey: 'dept.chemical_eng.name', label: 'Chemical Engineering and Petroleum Industries Department' },
  { slug: 'electrical_eng', labelKey: 'dept.electrical_eng.name', label: 'Electrical Power Engineering Technology Department' },
  { slug: 'medical_devices_eng', labelKey: 'dept.medical_devices_eng.name', label: 'Medical Devices Engineering Technologies' },
  { slug: 'accounting', labelKey: 'dept.accounting.name', label: 'Accounting' },
  { slug: 'law', labelKey: 'dept.law.name', label: 'Law' },
];


const BOOKS_DATA = {
  petroleum_eng: [
    { title: 'Fluid Mechanics', titleKey: 'book.petroleum_eng.1.title', url: 'https://drive.google.com/file/d/1Tx0HRzgnSf4nXUBi55xof_dLMgJyMlxm/view' },
    { title: 'Thermodynamics An Engineering Approach', titleKey: 'book.petroleum_eng.2.title', url: 'https://drive.google.com/file/d/15MjlHFY4dY49ieeKy1nTTjtFJopASzlp/view' },
    { title: 'Petroleum geology', titleKey: 'book.petroleum_eng.3.title', url: 'https://drive.google.com/file/d/1Qpx0I_uPVG4qsn80K6RJaorkLUSAJ24-/view' },
    { title: 'Applied Mathematics', titleKey: 'book.petroleum_eng.4.title', url: 'https://drive.google.com/file/d/1aig0RlbTVM2doT4kCCylaVFUqVIM49VF/view' },
    { title: 'General geology', titleKey: 'book.petroleum_eng.5.title', url: 'https://drive.google.com/file/d/12itN5qwtU7-9v1loSeAOX2Xxp_9seV-R/view' },
    { title: 'Fluid Mechanics For Petroleum Engineers', titleKey: 'book.petroleum_eng.6.title', url: 'https://drive.google.com/file/d/1ko3_SdNo87AD0aXj8Zhg8KLikC7tFZhu/view' },
    { title: 'Petroleum Reservoir Engineering', titleKey: 'book.petroleum_eng.7.title', url: 'https://drive.google.com/file/d/1tj4UmXrSVsRAFQT01oA6rce9yQTbiHmy/view' },
    { title: 'Calculus', titleKey: 'book.petroleum_eng.8.title', url: 'https://drive.google.com/file/d/1WOmfWCoEFqLuAsmZrWGYzYdZfhjfCJkm/view' },
    { title: 'fundamentals of thermodynamics', titleKey: 'book.petroleum_eng.9.title', url: 'https://drive.google.com/file/d/1G_BI4CcFyol94il7dXZ1Ao2NnQEwONFl/view' },
    { title: 'Advanced Engineering Mathematics ', titleKey: 'book.petroleum_eng.10.title', url: 'https://drive.google.com/file/d/1fFJ6_iUItXoRUoRw4N8wheIe98eNBnUN/view' },
    { title: 'Refrigeration And Air Conditioning', titleKey: 'book.mechanical_eng.8.title', url: 'https://drive.google.com/file/d/1mVE9LzqSG0aDdzMuhB3zXuOaPBfz-ZHQ/view' },

  ],

  mechanical_eng: [
    { title: 'Fluid Mechanics', titleKey: 'book.petroleum_eng.1.title', url: 'https://drive.google.com/file/d/1Tx0HRzgnSf4nXUBi55xof_dLMgJyMlxm/view' },
    { title: 'Calculus', titleKey: 'book.petroleum_eng.8.title', url: 'https://drive.google.com/file/d/1WOmfWCoEFqLuAsmZrWGYzYdZfhjfCJkm/view' },
    { title: 'fundamentals of thermodynamics', titleKey: 'book.petroleum_eng.9.title', url: 'https://drive.google.com/file/d/1G_BI4CcFyol94il7dXZ1Ao2NnQEwONFl/view' },
    { title: 'Advanced Engineering Mathematics ', titleKey: 'book.petroleum_eng.10.title', url: 'https://drive.google.com/file/d/1fFJ6_iUItXoRUoRw4N8wheIe98eNBnUN/view' },
    { title: 'Fluid Mechanics And Hydraulic Machines', titleKey: 'book.mechanical_eng.1.title', url: 'https://drive.google.com/file/d/1FBnIt6bRbHZOIEmYG2ca8b3s6xNeTJ_X/view' },
    { title: 'Engineering Drawing', titleKey: 'book.mechanical_eng.2.title', url: 'https://drive.google.com/file/d/1OuxnYnerc_YRFmAxosY3jZ43JESheg6b/view' },
    { title: 'Thomas Calculus', titleKey: 'book.mechanical_eng.3.title', url: 'https://drive.google.com/file/d/1PrlLfuiFwmmETdpM9kcoc_6Lp3smG5UJ/view' },
    { title: 'Technical Drawing', titleKey: 'book.mechanical_eng.4.title', url: 'https://drive.google.com/file/d/1osBlwLyKBqyK-BeN8SYUChFL63FO3kQj/view' },
    { title: 'Thermodynamics An Engineering Approach', titleKey: 'book.mechanical_eng.5.title', url: 'https://drive.google.com/file/d/1G_QComdB-Cky7wQgfgPPkv202pH8jbd_/view' },
    { title: 'Strength of Materials', titleKey: 'book.mechanical_eng.6.title', url: 'https://drive.google.com/file/d/1PUkjsE_DwLnjcSP0jek54DXkVeOWLLti/view' },
    { title: 'Solution Manual For Engineering Mechanics Statics', titleKey: 'book.mechanical_eng.7.title', url: 'https://drive.google.com/file/d/1tp9dQ-lOXlYzrPvWoWwJaBtzQCmbAlBu/view' },
    { title: 'Refrigeration And Air Conditioning', titleKey: 'book.mechanical_eng.8.title', url: 'https://drive.google.com/file/d/1mVE9LzqSG0aDdzMuhB3zXuOaPBfz-ZHQ/view' },
    { title: 'Manual Of Engineering Drawing', titleKey: 'book.mechanical_eng.9.title', url: 'https://drive.google.com/file/d/1Sh-A7Xaz3FZ-pplIEVP7ZKqbGjqnCIGx/view' },
    { title: 'Air Conditioning System Design', titleKey: 'book.mechanical_eng.10.title', url: 'https://drive.google.com/file/d/1FkAmc-qxLWGy6aOTt3D-NhgOQ-SLr1EP/view' },
    { title: 'Fundamentals of Electric Circuits', titleKey: 'book.electrical_eng.1.title', url: 'https://drive.google.com/file/d/1CK9ACpBlC6P4uWWlTTQkW0hpbRyBLGq5/view' },
    { title: 'Fundamentals Of Compressible Fluid Dynamics', titleKey: 'book.mechanical_eng.11.title', url: 'https://drive.google.com/file/d/1aV6KmEffpJ9UQaWSug44xVkFCes3lf3P/view' },
    { title: 'Design Of Machine Elements', titleKey: 'book.mechanical_eng.12.title', url: 'https://drive.google.com/file/d/1gObDF4A1fwV8Xeyw5iXKfFpR1d-63Y2g/view' },
    { title: 'Applied Thermodynamics for Engineering Technologists', titleKey: 'book.mechanical_eng.13.title', url: 'https://drive.google.com/file/d/10SdO8-CDQoRr2MiV6NsE7iTLzn6ev3yz/view' },
    { title: '2500 SOLVED PROBLEMS in fluid mechanics & hydraulics', titleKey: 'book.mechanical_eng.14.title', url: 'https://drive.google.com/file/d/1QZhPLfrjrTqOdvY8XAgBXAO1X_tVfRvG/view' },

  ],
  chemical_eng: [
    { title: 'INTRODUCTION TO CHEMICAL ENGINEERING THERMODYNAMICS', titleKey: 'book.chemical_eng.1.title', url: 'https://drive.google.com/file/d/1mxY-pRy11P_pI_fwDsDL7TSHToLXSKME/view' },
    { title: 'General Geology', titleKey: 'book.petroleum_eng.5.title', url: 'https://drive.google.com/file/d/12itN5qwtU7-9v1loSeAOX2Xxp_9seV-R/view' },
    { title: 'Calculus', titleKey: 'book.petroleum_eng.8.title', url: 'https://drive.google.com/file/d/1WOmfWCoEFqLuAsmZrWGYzYdZfhjfCJkm/view' },
    { title: 'ADVANCED ENGINEERING MATHEMATICS ', titleKey: 'book.petroleum_eng.10.title', url: 'https://drive.google.com/file/d/1fFJ6_iUItXoRUoRw4N8wheIe98eNBnUN/view' },
  ],
  electrical_eng: [
    { title: 'Fundamentals of Electric Circuits', titleKey: 'book.electrical_eng.1.title', url: 'https://drive.google.com/file/d/1CK9ACpBlC6P4uWWlTTQkW0hpbRyBLGq5/view' },
  ],
  medical_devices_eng: [
    { title: 'The Skeletal System', titleKey: 'book.medical_devices_eng.1.title', url: 'https://drive.google.com/file/d/1aFKnv60B1gDn706GWTPGG1wzucKoNQ5h/view' },
    { title: 'Fundamentals of Electric Circuits', titleKey: 'book.electrical_eng.1.title', url: 'https://drive.google.com/file/d/1CK9ACpBlC6P4uWWlTTQkW0hpbRyBLGq5/view' },
    { title: 'The Physics Of Radiation Therapy', titleKey: 'book.medical_devices_eng.2.title', url: 'https://drive.google.com/file/d/1BQrHvSnN2YHnhUfHz54Jqkseopx_en91/view' },
    { title: 'Introduction To Medical Physics', titleKey: 'book.medical_devices_eng.3.title', url: 'https://drive.google.com/file/d/1pTuGphodXkSOPH-RbnP_0gVhcDbKywso/view' },
    { title: 'Principles Of Instrumental Analysis', titleKey: 'book.medical_devices_eng.4.title', url: 'https://drive.google.com/file/d/10CJeo0hl6P4ZucNs_z-pUoAXLCYxRmAN/view' },
    { title: 'Modern Analytical Chemistry', titleKey: 'book.medical_devices_eng.5.title', url: 'https://drive.google.com/file/d/1k-aDLwBYkaLwWAwg3ORf7GBv66ze8X_L/view' },
    { title: 'The Physics Of The Human Body Companion', titleKey: 'book.medical_devices_eng.6.title', url: 'https://drive.google.com/file/d/1345pxggkOkMh-r5le_-zo6szH7gYwl2c/view' },

  ],
  accounting: [
    { title: 'Analysis of the Economic Reality of Crop Production in Iraq (1990–2015)', titleKey: 'book.accounting.1.title', url: 'https://drive.google.com/file/d/1_hjX46LJxBd8jqPpxHHCLVgXlbzI96zI/view' },
    { title: 'The Impact of the Rate of Change in Gross Domestic Product on Foreign Direct Investment in the Saudi Oil Sector', titleKey: 'book.accounting.2.title', url: 'https://drive.google.com/file/d/1yHFlRk3fddusA7BU54OM_0O2TqIxxLfA/view' },
    { title: 'A Comparative Study of Renewable Energy and Global Unconventional Energy', titleKey: 'book.accounting.3.title', url: 'https://drive.google.com/file/d/1wvGn2C44VwmjQIY_mPeOV4bNBMCt9opO/view' },
    { title: 'The Effect of Financial Indicators on the Gross Domestic Product of the USA Economy for 1990-2015', titleKey: 'book.accounting.4.title', url: 'https://drive.google.com/file/d/12n_vQokL8XbiXx5p_U_VPWidQnVhwjaz/view' },
    { title: 'The Impact of Certain Economic Factors on Iran\'s Gross Domestic Product (1992–2014)', titleKey: 'book.accounting.5.title', url: 'https://drive.google.com/file/d/1_-Ww1_lKP3sJNwLewXWJ4TZlPY9mW5Db/view' },
    { title: 'The Impact of Electric Power Generation on Carbon Dioxide Emissions and Environmental Pollution in Iraq', titleKey: 'book.accounting.6.title', url: 'https://drive.google.com/file/d/1FoLrTpMOey7-MEPK9tqUWsAWz4zrI9Su/view' },
    { title: 'Measuring exchange rate flexibility and its relation to total exports and imports in Iraq for 1991 – 2016', titleKey: 'book.accounting.7.title', url: 'https://drive.google.com/file/d/1y7Or8JhUzHWyRWjWxrTXPy_E-967tXLi/view' },
    { title: 'Measuring the Impact of Demographic Indicators on Poverty in the Arab World', titleKey: 'book.accounting.8.title', url: 'https://drive.google.com/file/d/1k2749vV3NP5GC4A5AUfD2BOn57SHtd0u/view' },
    { title: 'The Transition to a Market Economy: Selected Experiences (Russian Federation – Iraq)', titleKey: 'book.accounting.9.title', url: 'https://drive.google.com/file/d/1JAJREeYJN4ViknXf4aGrsbbc4goZsZKk/view' },
    { title: 'Foreign Direct Investment and Its Impact on Development and Sustainable Development in Selected Islamic Countries', titleKey: 'book.accounting.10.title', url: 'https://drive.google.com/file/d/1AK989mJ1pfi0h_bLUPjxSYzRZzEmGgUl/view' },
    { title: 'Use The Reduce From Equation To Estimate The Impact Of Rice Prices On Indian Market For Period 1990-2015', titleKey: 'book.accounting.11.title', url: 'https://drive.google.com/file/d/1a5nN8Fq-e39IGrQrvZnY5KN6qDT2ytnn/view' },
    { title: 'Use the Johnson transformation method to Estimation the impact FDI on Economics and social indictors in Pakistan country', titleKey: 'book.accounting.12.title', url: 'https://drive.google.com/file/d/1KiBK8E6sE4neS0eBB_vxSDknECRIWf8t/view' },
    { title: 'THE IMPACT FDI ON THE ECONOMIC SECTORS IN TURKEY COUNTRY (AN ECONOMETRICS STUDY BY USE JOHNSON METHOD FOR TRANSFORMATION DATA)', titleKey: 'book.accounting.13.title', url: 'https://drive.google.com/file/d/1AxdouLTgFgp9dLKbxkKYtHxYGwpfGAn-/view' },
    { title: 'ESTIMATE THE GRAVITY MODEL OF THE UNITED STATES OF AMERICA AND SOME COUNTRIES FOR THE PERIOD FROM 1991-2011 -AN ECONOMETRIC STUDY', titleKey: 'book.accounting.14.title', url: 'https://drive.google.com/file/d/14ngiRL785F6LPVO5MlP6DIg9fMZZOJXL/view' },
    { title: 'THE IMPACT OF ECONOMIC OPENNESS DEGREE ON GDP GROWTH IN MALAYSIA AND SOME NEIGHBORING COUNTRIES FOR THE PERIOD 1990-2010', titleKey: 'book.accounting.15.title', url: 'https://drive.google.com/file/d/1F5c7NT5vM0buQgoxUeByvqtsdn9j19rw/view' },
  ],
  law: [
    { title: 'The Principle of Separation Between the Prosecution and Investigation Authorities in Algerian Criminal Procedure Law', titleKey: 'book.law.1.title', url: 'https://drive.google.com/file/d/1xFGPl6Ta70cAuWnAOuiqjSqdxbw_vn0h/view' },
    { title: 'The Legal Framework for the Protection of Forest Heritage in Light of the Principle of Sustainability and Its Relationship to Biodiversity', titleKey: 'book.law.2.title', url: 'https://drive.google.com/file/d/1j9dyDb3Zmos-_Zw8tIYQbKs_CJWOFx5C/view' },
    { title: 'The Legal Framework for the Protection of Cultural Heritage', titleKey: 'book.law.3.title', url: 'https://drive.google.com/file/d/1DtqiJSX11XQ5W-MtpX7oGy93v23vqVw_/view' },
    { title: 'International Criminal Responsibility of Individuals', titleKey: 'book.law.4.title', url: 'https://drive.google.com/file/d/1eUbGw-8XN41Hb5eggovpx6VtbBOsIxZO/view' },
    { title: 'Criminal liability of the legal person A comparative study', titleKey: 'book.law.5.title', url: 'https://drive.google.com/file/d/1uDYlnrXjJBdRXzes2GxpCIdky1mEZh1o/view' },
    { title: 'Criminal Responsibility of Heads of State and Leaders Before the International Criminal Court', titleKey: 'book.law.6.title', url: 'https://drive.google.com/file/d/1ySAvtwVtA7aZycl56QW7T9vMfzAy2NDc/view' },
    { title: 'International Criminal Liability in International Criminal Jurisprudence and Case Law', titleKey: 'book.law.7.title', url: 'https://drive.google.com/file/d/1dw1xRfwa1hTHcwkmr-zLkZOCtkTocksP/view' },
    { title: 'International Criminal Responsibility for the Crime of Genocide', titleKey: 'book.law.8.title', url: 'https://drive.google.com/file/d/1Rurc-bc1E9RoKAmnFCtapfReWPGX4oXJ/view' },
    { title: 'International Criminal Liability for Crimes Against Humanity', titleKey: 'book.law.9.title', url: 'https://drive.google.com/file/d/1kAyIKPKg6jveNkc2ABRg1FpicMbjCCNn/view' },
    { title: 'International Criminal Law', titleKey: 'book.law.10.title', url: 'https://drive.google.com/file/d/1j1RCJ8Cr-DuJ1JlfnH2oBKAyjMDrNDC1/view' },
    { title: 'The Role of Regional Organizations in Combating the Crime of Terrorist Financing', titleKey: 'book.law.11.title', url: 'https://drive.google.com/file/d/1Rx52wjC7i6A_j8_vARrkLFBWZ2BU-ucL/view' },
    { title: 'The Impossible Crime in Jurisprudence, Law, and Judicial Practice', titleKey: 'book.law.12.title', url: 'https://drive.google.com/file/d/1Is6XQxuc7n5QTj6B3kUTHmxxYExnkkhG/view' },
    { title: 'Abuse of rights with the intent to harm others or to achieve an unlawful interest under Sharia and law', titleKey: 'book.law.13.title', url: 'https://drive.google.com/file/d/1LlMUwhmdBxnBKQwpfeXIbvAo9uGZcs6H/view' },
    { title: 'Smuggling and Human Trafficking under Algerian Penal Legislation', titleKey: 'book.law.14.title', url: 'https://drive.google.com/file/d/1uBIrn7WKYhH7vYrYzQ08CTK4QXXsp8ZS/view' },
    { title: 'Recent Transformations in the UN Human Rights Protection System', titleKey: 'book.law.15.title', url: 'https://drive.google.com/file/d/1y0g78-S0EG-rIoIfIT4kVBUj_AylLO4e/view' },
    { title: 'Examining the nature of the legislative text', titleKey: 'book.law.16.title', url: 'https://drive.google.com/file/d/1-OqYgCgKYmPTMojjOX4T-tRolp5jUAk7/view' },
    { title: 'Legal implications of space activities', titleKey: 'book.law.17.title', url: 'https://drive.google.com/file/d/1zNXcrhkl2pVMaaItHl0VtLBzpudiAoND/view' },
    { title: 'Criminal Fault and Civil Fault', titleKey: 'book.law.18.title', url: 'https://drive.google.com/file/d/1RpwsET-nA1QSNf2spWulmLGCKPKBx1lZ/view' },
  ],
};

let activeDept = DEPARTMENTS[0].slug;

function buildDeptButtons() {
  return DEPARTMENTS.map(dept => `
    <button
      class="dept-btn ${dept.slug === activeDept ? 'active' : ''}"
      data-dept="${dept.slug}"
      data-i18n="${dept.labelKey}"
    >${dept.label}</button>
  `).join('');
}

function buildBookRows(deptSlug) {
  const books = BOOKS_DATA[deptSlug] || [];

  if (books.length === 0) {
    return `<tr><td colspan="2" class="empty-row" data-i18n="repository.no_books">No books available yet</td></tr>`;
  }

  return books.map(book => `
    <tr>
      <td data-i18n="${book.titleKey}">${book.title}</td>
      <td>
        <a href="${book.url}" target="_blank" rel="noopener" class="view-link" data-i18n="repository.view_label">View</a>
      </td>
    </tr>
  `).join('');
}

export function electronicLibraryView() {
  activeDept = DEPARTMENTS[0].slug;

  return `
  <div class="electronic-library-page">

  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'repository.library_hero_title',
    titleDefault: 'Electronic Library'
  })}

    <!-- Content Container -->
    <section class="library-container">
      <div class="section-header reveal">
        <h2 data-i18n="repository.library_section_title">Select Department</h2>
        <div class="header-line"></div>
      </div>

      <div class="dept-filters reveal" id="dept-filters">
        ${buildDeptButtons()}
      </div>

      <div class="table-wrapper reveal">
        <table>
          <thead>
            <tr>
              <th data-i18n="repository.col_book_title">Book Title</th>
              <th data-i18n="repository.col_view">View</th>
            </tr>
          </thead>
          <tbody id="library-table-body" class="fade-transition">
            ${buildBookRows(activeDept)}
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
}

export function initElectronicLibrary() {
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.dept-btn');
    if (!btn) return;

    const pageContainer = document.querySelector('.electronic-library-page');
    if (!pageContainer) return;

    const newDept = btn.getAttribute('data-dept');
    if (newDept === activeDept) return;

    const tbody = document.getElementById('library-table-body');
    if (!tbody) return;

    // Immediately update the active button (without waiting for the transition)
    document.querySelectorAll('.dept-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Smooth transition for table content only
    tbody.classList.add('fade-out');

    setTimeout(async () => {
      activeDept = newDept;
      tbody.innerHTML = buildBookRows(activeDept);
      tbody.classList.remove('fade-out');

      await applyRepositoryLanguage();
    }, 200);
  });
}