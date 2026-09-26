import { heroSection } from "../../components/hero_section";

export function teachingView() {
  return `
  <div class="teaching-staff-page">

    <!-- Hero Section -->
    ${heroSection({
    titleKey: 'teaching.hero_subtitle',
    titleDefault: 'Faculty Members of Al-Amarah University College'
  })}

    <!-- Content Container -->
    <section class="teaching-container">
      
      <!-- Department Section: department heads -->
      <div class="department-section">
        <div class="section-header reveal">
          <h2 data-i18n="teaching.dept_heads">Department Heads</h2>
          <div class="header-line"></div>
        </div>

        <div class="staff-grid">
          
          <!-- Teacher Card 1 -->
          <div class="teacher-card reveal">
            <div class="image-wrapper">
              <img src="/src/assets/images/teachers/petroleum_eng_head.jpg" alt="Dr. Amer Ali Ghabra" loading="lazy" />
            </div>
            <div class="teacher-info">
              <h3 data-i18n="heads.card1_name">Dr. Amer Ali Ghabra</h3>
              <p class="academic-title" data-i18n="heads.card1_title">Head of Petroleum Engineering Department</p>
            </div>
          </div>

          <!-- Teacher Card 2 -->
          <div class="teacher-card reveal">
            <div class="image-wrapper">
              <img src="/src/assets/images/teachers/mechanical_eng_head.jpg" alt="Assistant Professor Dr. Abdul-Hussein Harijah" loading="lazy" />
            </div>
            <div class="teacher-info">
              <h3 data-i18n="heads.card2_name">Assistant Professor Dr. Abdul-Hussein Harijah</h3>
              <p class="academic-title" data-i18n="heads.card2_title">Head of Power Mechanics Engineering Technology Department</p>
            </div>
          </div>

          <!-- Teacher Card 3 -->
          <div class="teacher-card reveal">
            <div class="image-wrapper">
              <img src="/src/assets/images/teachers/medical_devices_eng_head.jpg" alt="Lecturer Dr. Kamal Jassim Shaalan Al-Budairi" loading="lazy" />
            </div>
            <div class="teacher-info">
              <h3 data-i18n="heads.card3_name">Lecturer Dr. Kamal Jassim Shaalan Al-Budairi</h3>
              <p class="academic-title" data-i18n="heads.card3_title">Head of Medical Devices Engineering Department</p>
            </div>
          </div>

          <!-- Teacher Card 4 -->
          <div class="teacher-card reveal">
            <div class="image-wrapper">
              <img src="/src/assets/images/teachers/law_head.jpg" alt="Asst. Prof. Dr. Kamal Jawad Kazim" loading="lazy" />
            </div>
            <div class="teacher-info">
              <h3 data-i18n="heads.card4_name">Asst. Prof. Dr. Kamal Jawad Kazim</h3>
              <p class="academic-title" data-i18n="heads.card4_title">Head of Law Department</p>
            </div>
          </div>

          <!-- Teacher Card 5 -->
          <div class="teacher-card reveal">
            <div class="image-wrapper">
              <img src="/src/assets/images/teachers/accounting_head.jpg" alt="Asst. Prof. Dr. Salman Hammadi" loading="lazy" />
            </div>
            <div class="teacher-info">
              <h3 data-i18n="heads.card5_name">Asst. Prof. Dr. Salman Hammadi</h3>
              <p class="academic-title" data-i18n="heads.card5_title">Head of Accounting Department</p>
            </div>
          </div>

        </div>
      </div>

      
    

    </section>
  </div>
  `;
}