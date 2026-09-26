import { heroSection } from "../../components/hero_section";

export function graduatesView() {
  return `
  <div class="graduates-page">

  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'graduates.hero_title',
    titleDefault: 'Graduates'
  })}

    <!-- Under Development Section -->
    <section class="graduates-container">
      <div class="development-box reveal">
        <div class="development-glow"></div>
        <div class="development-icon">🚧</div>
        <h2 data-i18n="graduates.under_dev_title">Page Under Development</h2>
        <p data-i18n="graduates.under_dev_desc">This page is currently being developed. Please check back later.</p>
      </div>
    </section>
  </div>
  `;
}