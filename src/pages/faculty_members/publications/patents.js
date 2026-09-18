export function patentView() {
    return `
  <div class="patent-page">
    <!-- Hero Banner -->
    <section class="patent-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="patent.hero_title">Patents</h1>
      </div>
    </section>

    <!-- Content Container -->
    <section class="patent-container">
      <div class="section-header reveal">
        <h2 data-i18n="patent.section_title">Registered Patents</h2>
        <div class="header-line"></div>
      </div>

      <div class="table-wrapper reveal">
        <table>
          <thead>
            <tr>
              <th data-i18n="patent.col_title">Patent Title</th>
              <th data-i18n="patent.col_inventor">Inventor</th>
              <th data-i18n="research.col_department">Department</th>
              <th data-i18n="patent.col_date">Registration Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-i18n="patent.row1_title">Water-cooled diesel engine air cooling system</td>
              <td data-i18n="patent.row1_inventor">Asst. Prof. Dr. Abdul-Hussein Hureija Rafees</td>
              <td data-i18n="dept.mechanical_power_eng">Power Mechanics Engineering Technology</td>
              <td data-i18n="patent.row1_date">11/10/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
}