export function booksView() {
    return `
  <div class="books-page">
    <!-- Hero Banner -->
    <section class="books-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="books.hero_title">Books And Publications</h1>
      </div>
    </section>

    <!-- Content Container -->
    <section class="books-container">
      <div class="section-header reveal">
        <h2 data-i18n="books.section_title">Published Books</h2>
        <div class="header-line"></div>
      </div>

      <div class="table-wrapper reveal">
        <table>
          <thead>
            <tr>
              <th data-i18n="books.col_title">Book Title</th>
              <th data-i18n="books.col_author">Author</th>
              <th data-i18n="research.col_department">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-i18n="books.row1_title">Maintenance of car engines and their accessories</td>
              <td data-i18n="books.row1_author">Dr. Abdul-Hussein Hureija</td>
              <td data-i18n="dept.mechanical_power_eng">Power Mechanics Engineering Technology</td>
            </tr>

            <tr>
              <td data-i18n="books.row2_title">Optimization of Production, Costs, and Profits</td>
              <td data-i18n="books.row2_author">Dr. Adnan Dawoud Muhammad</td>
              <td data-i18n="dept.accounting">Accounting</td>
            </tr>

            <tr>
              <td data-i18n="books.row3_title">A Concise Overview of Constitutional Law Theory</td>
              <td data-i18n="books.row3_author">Mr. Dr. Wael Muhammad Ismail</td>
              <td data-i18n="dept.law">Law</td>
            </tr>
            
            <tr>
              <td data-i18n="books.row4_title">Playing puzzles and chess in Middle Eastern countries.</td>
              <td data-i18n="books.row3_author">Mr. Dr. Wael Muhammad Ismail</td>
              <td data-i18n="dept.law">Law</td>
            </tr>

            <tr>
              <td data-i18n="books.row5_title">The Future of Change in the International System</td>
              <td data-i18n="books.row3_author">Mr. Dr. Wael Muhammad Ismail</td>
              <td data-i18n="dept.law">Law</td>
            </tr>

            <tr>
              <td data-i18n="books.row6_title">Foreign Affairs in the Relationship Between the President and Congress in the U.S. Political System</td>
              <td data-i18n="books.row3_author">Mr. Dr. Wael Muhammad Ismail</td>
              <td data-i18n="dept.law">Law</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
}