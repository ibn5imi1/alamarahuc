const STRATEGIC_PLAN_FILE_ID = '1x6uLwmjePg3s4HPBGrzP6FpGjZOZ3auK';

export function strategicPlanView() {
    return `
  <div class="strategic-plan-page">
    <!-- Hero Banner -->
    <section class="strategic-plan-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="strategic_plan.hero_title">Strategic Plan</h1>
      </div>
    </section>

    <!-- PDF Viewer Container -->
    <section class="strategic-plan-container reveal">
      <div class="pdf-viewer-wrapper">
        <iframe
          src="https://drive.google.com/file/d/${STRATEGIC_PLAN_FILE_ID}/preview"
          frameborder="0"
          scrolling="yes"
          allow="autoplay"
        ></iframe>
      </div>
    </section>
  </div>
  `;
}