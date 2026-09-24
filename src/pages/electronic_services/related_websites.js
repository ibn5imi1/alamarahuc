
const RELATED_SITES = [
  { nameKey: 'related.site1.name', name: 'Ministry of Higher Education', url: 'https://mohesr.gov.iq/ar/' },
  { nameKey: 'related.site2.name', name: 'Department of Private University Education', url: 'https://mohesr.gov.iq/ar/ministrySection/62' },
  { nameKey: 'related.site3.name', name: 'Department of Studies, Planning, and Follow-up', url: 'https://dirasat.mohesr.gov.iq/' },
  { nameKey: 'related.site4.name', name: 'Ministry of Education', url: 'https://epedu-service.ur.gov.iq/' },
  { nameKey: 'related.site5.name', name: 'University of Baghdad', url: 'https://uobaghdad.edu.iq/' },
  { nameKey: 'related.site6.name', name: 'University of Technology', url: 'https://uotechnology.edu.iq/' },
  { nameKey: 'related.site7.name', name: 'University of Basrah', url: 'https://www.uobasrah.edu.iq/' },
  { nameKey: 'related.site8.name', name: 'University of Maysan', url: 'https://uomisan.edu.iq/ar/' },
];

const WEBSITE_ICON = `
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
`;

function buildSiteCards(sites) {
  return sites.map(site => `
    <a href="${site.url}" target="_blank" rel="noopener" class="site-card reveal">
      <span class="site-icon">${WEBSITE_ICON}</span>
      <span class="site-name" data-i18n="${site.nameKey}">${site.name}</span>
    </a>
  `).join('');
}

export function relatedWebsitesView() {
  const leftColumn = RELATED_SITES.slice(0, 4);
  const rightColumn = RELATED_SITES.slice(4, 8);

  return `
  <div class="related-websites-page">
    <!-- Hero Banner -->
    <section class="related-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="related.hero_title">Related Websites</h1>
      </div>
    </section>

    <!-- Content Container -->
    <section class="related-container">
      <div class="section-header reveal">
        <h2 data-i18n="related.section_title">Links</h2>
        <div class="header-line"></div>
      </div>

      <div class="sites-columns">
        <div class="sites-column">
          ${buildSiteCards(leftColumn)}
        </div>
        <div class="sites-column">
          ${buildSiteCards(rightColumn)}
        </div>
      </div>
    </section>
  </div>
  `;
}
