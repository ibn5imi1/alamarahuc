import { heroSection } from '../../../components/hero_section.js';
export function statisticsView() {
  return `
  <div class="statistics-page">
  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'statistics.hero_title',
    titleDefault: 'Statistics'
  })}
    

    <!-- Main Content Container -->
    <section class="statistics-container">
      <!-- Table 1: Departments -->
      <div class="table-card reveal">
        <h2 class="table-title" data-i18n="depts_title">Departments Growth Statistics</h2>
        <div class="table-responsive">
          <table class="data-table-custom">
            <thead>
              <tr>
                <th data-i18n="academic_year">Academic Year</th>
                <th data-i18n="depts_count">Number of Departments</th>
                <th data-i18n="departments_list">Departments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2018-2019</td>
                <td>4</td>
                <td data-i18n="depts_2018_2019">Petroleum Engineering - Power Mechanics Engineering - Law - Accounting</td>
              </tr>
              <tr>
                <td>2019-2020</td>
                <td>4</td>
                <td data-i18n="depts_2018_2019">Petroleum Engineering - Power Mechanics Engineering - Law - Accounting</td>
              </tr>
              <tr>
                <td>2020-2021</td>
                <td>6</td>
                <td data-i18n="depts_2020_2021">Petroleum Engineering – Power Mechanics Technology Engineering – Law – Accounting – Medical Instrumentation Technology Engineering – Dental Technology</td>
              </tr>
              <tr>
                <td>2021-2022</td>
                <td>7</td>
                <td data-i18n="depts_2021_2022">Petroleum Engineering – Power Mechanics Technology Engineering – Law – Accounting – Medical Instrumentation Technology Engineering – Dental Technology – Electric Power Technology Engineering</td>
              </tr>
              <tr>
                <td>2026-2027</td>
                <td>18</td>
                <td data-i18n="depts_2026_2027">Petroleum Engineering – Power Mechanics Technology Engineering – Law – Accounting – Medical Device Technology Engineering – Dental Technology – Electric Power Technology Engineering – Dentistry – Pharmacy – Radiology and Ultrasound Technology – Aesthetics and Laser Technology – Pathological Analysis Sciences – Chemical Engineering and Petroleum Industries – Cybersecurity Technology Engineering – Artificial Intelligence Engineering – Civil Engineering – English Education – Oil and Gas Marketing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Table 2: Faculty Members -->
      <div class="table-card reveal">
        <h2 class="table-title" data-i18n="teachers_title">Faculty Members Statistics</h2>
        <div class="table-responsive">
          <table class="data-table-custom">
            <thead>
              <tr>
                <th data-i18n="academic_year">Academic Year</th>
                <th data-i18n="teachers_count">Number of Faculty Members</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2018-2019</td>
                <td>38</td>
              </tr>
              <tr>
                <td>2019-2020</td>
                <td>59</td>
              </tr>
              <tr>
                <td>2020-2021</td>
                <td>95</td>
              </tr>
              <tr>
                <td>2021-2022</td>
                <td>92</td>
              </tr>
              <tr>
                <td>2022-2023</td>
                <td>95</td>
              </tr>
              <tr>
                <td>2023-2024</td>
                <td>138</td>
              </tr>
              <tr>
                <td>2024-2025</td>
                <td>159</td>
              </tr>
              <tr>
                <td>2025-2026</td>
                <td>198</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Table 3: Students -->
      <div class="table-card reveal">
        <h2 class="table-title" data-i18n="students_title">Students Statistics</h2>
        <div class="table-responsive">
          <table class="data-table-custom">
            <thead>
              <tr>
                <th data-i18n="academic_year">Academic Year</th>
                <th data-i18n="students_count">Number of Students</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2018-2019</td>
                <td>721</td>
              </tr>
              <tr>
                <td>2019-2020</td>
                <td>1456</td>
              </tr>
              <tr>
                <td>2020-2021</td>
                <td>1856</td>
              </tr>
              <tr>
                <td>2021-2022</td>
                <td>2475</td>
              </tr>
              <tr>
                <td>2025-2026</td>
                <td>4669</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
  `;
}