export function certificationsAndClassificationsView() {
    return `
  <div class="certifications-classifications-page">
    <!-- Hero Section -->
    <section class="certifications-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="hero_title">Certifications & Classifications</h1>
      </div>
    </section>

    <!-- Main Container -->
    <section class="certifications-container">
      <div class="section-header reveal">
        <h2 data-i18n="section_title">College Certifications & Rankings</h2>
        <div class="header-line"></div>
      </div>

      <!-- Table Wrapper -->
      <div class="table-responsive reveal">
        <table class="certifications-table">
          <thead>
            <tr>
              <th data-i18n="col_certification">Certification / Classification</th>
              <th data-i18n="col_rank">Rank / Status</th>
              <th data-i18n="col_year">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RUR</td>
              <td>39</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>webometrics</td>
              <td>110</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>iso 9001:2015</td>
              <td></td>
              <td>2020</td>
            </tr>
            <tr>
              <td data-i18n="item4_title">ISO Certification: Educational Organizations Management System</td>
              <td></td>
              <td>2021</td>
            </tr>
            <tr>
              <td data-i18n="item5_title">Greenmetric</td>
              <td>19</td>
              <td>2020</td>
            </tr>
            <tr>
              <td data-i18n="item6_title">ISO 14001:2015 : Environmental Management System</td>
              <td></td>
              <td>2025</td>
            </tr>
            <tr>
              <td data-i18n="item7_title">ISO 9001:2015 : Quality Management Systems</td>
              <td></td>
              <td>2025</td>
            </tr>
            <tr>
              <td data-i18n="item8_title">ISO 50001:2018 : Energy Management System</td>
              <td></td>
              <td>2025</td>
            </tr>
            <tr>
              <td data-i18n="item9_title">ISO 45001:2018 : Occupational Health and Safety Management Systems</td>
              <td></td>
              <td>2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
}