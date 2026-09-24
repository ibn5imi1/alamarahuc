export function organizationalStructureView() {
    return `
  <div class="organizational-structure-page">
    <!-- Hero Section -->
    <section class="structure-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="org_structure_hero_title">Organizational Structure</h1>
      </div>
    </section>

    <!-- Main Content Container -->
    <section class="structure-container">
      <div class="section-header reveal">
        <h2 data-i18n="org_structure_section_title">College Organizational Chart</h2>
        <div class="header-line"></div>
      </div>

      <!-- Image Display Card -->
      <div class="structure-image-wrapper reveal">
        <img 
          src="/src/assets/images/capture.png" 
          alt="College Organizational Structure" 
          class="structure-image"
          loading="lazy"
        />
      </div>
    </section>
  </div>
  `;
}

