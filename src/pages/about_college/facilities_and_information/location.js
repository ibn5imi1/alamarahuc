import { heroSection } from '../../../components/hero_section.js';

const LOCATION_LAT = '31.8856201';
const LOCATION_LNG = '47.1099395';
const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/place/Al-Amarah+University+College/@31.8856201,47.1099395,17z';

export function locationView() {
  return `
  <div class="location-page">
  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'location.hero_title',
    titleDefault: 'Location'
  })}

    <!-- Content Container -->
    <section class="location-container">
      <div class="address-card reveal">
        <div class="address-icon">📍</div>
        <p class="address-text" data-i18n="location.address_text">
          Iraq – Maysan – Amarah/Kut Road, opposite University of Maysan – College of Engineering
        </p>
        <a href="${GOOGLE_MAPS_LINK}" target="_blank" rel="noopener" class="open-maps-link" data-i18n="location.open_maps_btn">
          Open in Google Maps
        </a>
      </div>

      <div class="map-wrapper reveal">
        <iframe
          src="https://www.google.com/maps?q=${LOCATION_LAT},${LOCATION_LNG}&z=17&output=embed"
          frameborder="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  </div>
  `;
}