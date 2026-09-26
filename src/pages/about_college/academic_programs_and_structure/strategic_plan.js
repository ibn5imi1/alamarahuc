const STRATEGIC_PLAN_FILE_ID = '1x6uLwmjePg3s4HPBGrzP6FpGjZOZ3auK';
import { heroSection } from '../../../components/hero_section.js';

export function strategicPlanView() {
  return `
  <div class="strategic-plan-page">

  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'strategic_plan.hero_title',
    titleDefault: 'Strategic Plan'
  })}


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