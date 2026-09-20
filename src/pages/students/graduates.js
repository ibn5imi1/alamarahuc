export function graduatesView() {
  return `
  <div class="graduates-page">
    <!-- Hero Banner -->
    <section class="graduates-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="graduates.hero_title">Graduates</h1>
      </div>
    </section>

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