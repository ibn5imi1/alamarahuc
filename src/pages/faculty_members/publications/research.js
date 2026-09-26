import { heroSection } from "../../../components/hero_section";

export function researchView() {
  return `
  <div class="research-page">

    <!-- Hero Section -->
    ${heroSection({
    titleKey: 'research.hero_title',
    titleDefault: 'Scientific Research'
  })}

    <!-- Content Container -->
    <section class="research-container">
      <div class="section-header reveal">
        <h2 data-i18n="research.section_title">Published Research</h2>
        <div class="header-line"></div>
      </div>

      <div class="table-wrapper reveal">
        <table>
          <thead>
            <tr>
              <th data-i18n="research.col_title">Research Title</th>
              <th data-i18n="research.col_researcher">Researcher</th>
              <th data-i18n="research.col_department">Department</th>
              <th data-i18n="research.col_journal">Journal</th>
              <th data-i18n="research.col_date">Publication Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-i18n="research.row1_title">Hydrostatic Training and Characterization of Near Stoichiometric Ni-Mn-Ga Alloy</td>
              <td data-i18n="research.row1_researcher">Saleh Mohammed Qitawi</td>
              <td data-i18n="dept.petroleum_eng">Petroleum Engineering</td>
              <td data-i18n="research.scopus_journal">Scopus</td>
              <td>27/3/2020</td>
            </tr>

            <tr>
              <td data-i18n="research.row2_title">Numerical study of cuttings transport of nanoparticle-based drilling fluid</td>
              <td data-i18n="research.row2_researcher">Murtada Saadoun Mohammed</td>
              <td data-i18n="dept.petroleum_eng">Petroleum Engineering</td>
              <td data-i18n="research.clarvit_journal">Clarvit</td>
              <td>3/1/2020</td>
            </tr>

            <tr>
              <td data-i18n="research.row3_title">The Role of Banks in Protecting Letters of Credit from Fraud</td>
              <td data-i18n="research.row3_researcher">Maher Al-Saeed Mohamed Gabr</td>
              <td data-i18n="dept.law">Law</td>
              <td data-i18n="research.row3_journal">Journal of Jurisprudential and Legal Studies – Sultanate of Oman</td>
              <td>7/7/2020</td>
            </tr>

            <tr>
              <td data-i18n="research.row4_title">The Pliocene-Recent Euphrates river system: Sediment architecture as an analogue for subsurface reservoirs</td>
              <td data-i18n="research.row4_researcher">Amer Ali Damin</td>
              <td data-i18n="dept.petroleum_eng">Petroleum Engineering</td>
              <td data-i18n="research.scopus_journal">Scopus</td>
              <td>10/8/2019</td>
            </tr>

            <tr>
              <td data-i18n="research.row5_title">IOP Conference Series: Materials Science and Engineering</td>
              <td data-i18n="research.row5_researcher">Hadeel Saleh Mahdi</td>
              <td data-i18n="dept.mechanical_power_eng">Power Mechanics Engineering Technology</td>
              <td data-i18n="research.scopus_journal">Scopus</td>
              <td>5/4/2019</td>
            </tr>

            <tr>
              <td data-i18n="research.row6_title">Erosion Corrosion of Drill Pipe During Drilling Operations</td>
              <td data-i18n="research.row6_researcher">Murtada Saadoun Mohammed</td>
              <td data-i18n="dept.petroleum_eng">Petroleum Engineering</td>
              <td data-i18n="research.scopus_journal">Scopus</td>
              <td>10/6/2021</td>
            </tr>

            <tr>
              <td data-i18n="research.row7_title">Review on the Natural Gas in Iraq, Currently and Future Prospects for Improving the Economic and Environmental Situation</td>
              <td data-i18n="research.row7_researcher">Diaa Jumaa Jassim</td>
              <td data-i18n="dept.petroleum_eng">Petroleum Engineering</td>
              <td data-i18n="research.scopus_journal">Scopus</td>
              <td>8/6/2021</td>
            </tr>

            <tr>
              <td data-i18n="research.row8_title">Analysis and National Solution for CO2 Gas in Missan Oil Field Manuscript</td>
              <td data-i18n="research.row8_researcher">Diaa Jumaa Jassim</td>
              <td data-i18n="dept.petroleum_eng">Petroleum Engineering</td>
              <td data-i18n="research.scopus_journal">Scopus</td>
              <td>15/4/2021</td>
            </tr>

            <tr>
              <td data-i18n="research.row9_title">Analysis and National Solution for CO2 Gas in Missan Oil Field ManuscriptConditional Settlement and Bank Recovery Methods for Letter of Credit Value</td>
              <td data-i18n="research.row9_researcher">Maher Al-Saeed Mohamed Gabr</td>
              <td data-i18n="dept.law">Law</td>
              <td data-i18n="research.international_journal">international</td>
              <td>27/4/2021</td>
            </tr>

            <tr>
              <td data-i18n="research.row10_title">The Eligibility of Applying E-Learning Among Physical Education Teachers in the Southern Region in Light of the COVID-19 Pandemic</td>
              <td data-i18n="research.row10_researcher">Miqdad Bashir Hussein</td>
              <td data-i18n="dept.accounting">Accounting</td>
              <td data-i18n="research.international_journal">international</td>
              <td>16/7/2021</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
}