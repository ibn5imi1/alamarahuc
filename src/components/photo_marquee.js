// ============================================
// Image Marquee — 10 random images on top, 10 different random images on bottom
// ============================================
const TOTAL_COLLEGE_IMAGES = 49;
const IMAGES_PER_ROW = 10; // ✅ عدد الصور المطلوب بكل شريط

function getAllCollegeImages() {
  return Array.from({ length: TOTAL_COLLEGE_IMAGES }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return `/images/gallery/thumbs/college/photo-${num}.webp`;
  });
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// يكرر مجموعة الصور 3 مرات (بدل مرتين) لضمان تغطية أي عرض شاشة كبير بدون فراغات، مع تمرير سلس لانهائي
function buildImageRow(images, animationClass) {
  const tripledImages = [...images, ...images, ...images];
  const imagesHtml = tripledImages.map(src => `
    <div class="marquee-item">
      <img src="${src}" alt="Al-Amarah University College" loading="lazy" />
    </div>
  `).join('');

  return `<div class="marquee-track ${animationClass}">${imagesHtml}</div>`;
}

export function buildPhotoMarqueeSection() {
  const shuffled = shuffleArray(getAllCollegeImages());

  // ✅ 10 صور بالأعلى + 10 صور مختلفة تمامًا بالأسفل (20 صورة فريدة من أصل 49، بدون أي تداخل بينهم)
  const topRowImages = shuffled.slice(0, IMAGES_PER_ROW);
  const bottomRowImages = shuffled.slice(IMAGES_PER_ROW, IMAGES_PER_ROW * 2);

  return `
    <section class="photo-marquee-section reveal">
      <div class="marquee-header">
        <h2 data-i18n="home.glimpses_title">Glimpses from the Campus</h2>
        <div class="header-line"></div>
        <p data-i18n="home.glimpses_subtitle">A visual glimpse of the campus, its facilities, and students — a continuous look at Al-Amarah University College.</p>
      </div>

      <div class="marquee-row">
        ${buildImageRow(topRowImages, 'scroll-rtl')}
      </div>
      <div class="marquee-row">
        ${buildImageRow(bottomRowImages, 'scroll-ltr')}
      </div>
    </section>
  `;
}