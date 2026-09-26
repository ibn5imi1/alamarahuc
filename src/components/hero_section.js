// ============================================
// Hero Section Component — Reusable across all pages
// ============================================
// Parameters:
// - titleKey: Translation key for the title (required)
// - titleDefault: Default English text (required)
// - subtitleKey / subtitleDefault: Optional subtitle text below the title (optional)
// - bgImage: Path to a background image other than the default (optional)
export function heroSection({
    titleKey,
    titleDefault,
    subtitleKey = null,
    subtitleDefault = null,
    bgImage = '/src/assets/images/build.jpg'
}) {
    return `
    <section class="hero-section-component" style="background-image: url('${bgImage}');">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="${titleKey}">${titleDefault}</h1>
        ${subtitleKey ? `<p data-i18n="${subtitleKey}">${subtitleDefault}</p>` : ''}
      </div>
    </section>
  `;
}