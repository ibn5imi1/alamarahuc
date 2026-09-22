// ============================================
// الفئات المتاحة بمعرض الصور
// ============================================
const CATEGORIES = [
  { slug: 'all', labelKey: 'gallery.filter_all', label: 'All Photos' },
  { slug: 'departments', labelKey: 'gallery.filter_departments', label: 'Departments' },
  { slug: 'trips', labelKey: 'gallery.filter_trips', label: 'Trips' },
  { slug: 'factories', labelKey: 'gallery.filter_factories', label: 'Factories' },
  { slug: 'laboratories', labelKey: 'gallery.filter_laboratories', label: 'Laboratories' },
  { slug: 'workshops', labelKey: 'gallery.filter_workshops', label: 'Workshops' },
];

// ============================================
// عدد الصور بكل فئة — عدّل الأرقام حسب عدد صورك الفعلي بكل مجلد
// المجموع الحالي = 500 (120+80+90+70+60+80)
// ============================================
const CATEGORY_COUNTS = {
  departments: 120,
  trips: 80,
  factories: 90,
  laboratories: 70,
  workshops: 60,
  courses: 80,
};

// يولّد مصفوفة صور فئة معينة تلقائيًا بالاعتماد على العدد والتسمية المتسلسلة
function buildCategoryImages(catSlug, count) {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return {
      category: catSlug,
      thumb: `/images/gallery/thumbs/${catSlug}/photo-${num}.webp`,
      full: `/images/gallery/full/${catSlug}/photo-${num}.jpg`,
      alt: `${catSlug} photo ${num}`,
    };
  });
}

// يجمع كل الفئات بمصفوفة واحدة كبيرة (500 عنصر)
const ALL_IMAGES = Object.entries(CATEGORY_COUNTS).flatMap(([cat, count]) =>
  buildCategoryImages(cat, count)
);

const BATCH_SIZE = 24; // عدد الصور المعروضة بكل دفعة
let activeFilter = 'all';
let loadedCount = 0;
let filteredImages = [];

function getFilteredImages(filterSlug) {
  return filterSlug === 'all'
    ? ALL_IMAGES
    : ALL_IMAGES.filter(img => img.category === filterSlug);
}

function buildFilterButtons() {
  return CATEGORIES.map(cat => `
    <button
      class="filter-btn ${cat.slug === activeFilter ? 'active' : ''}"
      data-filter="${cat.slug}"
      data-i18n="${cat.labelKey}"
    >${cat.label}</button>
  `).join('');
}

function buildImageCards(images) {
  return images.map((img, index) => `
    <div class="gallery-item reveal" data-index="${index}">
      <img
        src="${img.thumb}"
        alt="${img.alt}"
        loading="lazy"
        class="gallery-thumb"
      />
    </div>
  `).join('');
}

function renderGrid(reset = false) {
  const grid = document.getElementById('gallery-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!grid) return;

  if (reset) {
    filteredImages = getFilteredImages(activeFilter);
    loadedCount = 0;
    grid.innerHTML = '';
  }

  const nextBatch = filteredImages.slice(loadedCount, loadedCount + BATCH_SIZE);
  grid.insertAdjacentHTML('beforeend', buildImageCards(nextBatch));
  loadedCount += nextBatch.length;

  // إظهار/إخفاء زر "تحميل المزيد" حسب وجود صور متبقية
  if (loadMoreBtn) {
    loadMoreBtn.style.display = loadedCount < filteredImages.length ? 'inline-block' : 'none';
  }

  // تفعيل أنميشن الظهور للعناصر الجديدة فقط
  requestAnimationFrame(() => {
    document.querySelectorAll('#gallery-grid .reveal:not(.visible)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight + 100) {
        el.classList.add('visible');
      }
    });
  });
}

export function photoGalleryView() {
  activeFilter = 'all';

  return `
  <div class="photo-gallery-page">
    <!-- Hero Banner -->
    <section class="gallery-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="gallery.hero_title">Photo Gallery</h1>
      </div>
    </section>

    <!-- Content Container -->
    <section class="gallery-container">
      <div class="section-header reveal">
        <h2 data-i18n="gallery.section_title">Browse Our Photos</h2>
        <div class="header-line"></div>
      </div>

      <div class="filter-bar reveal" id="filter-bar">
        ${buildFilterButtons()}
      </div>

      <div class="gallery-grid" id="gallery-grid"></div>

      <div class="load-more-wrapper">
        <button id="load-more-btn" class="load-more-btn" data-i18n="gallery.load_more">
          Load More
        </button>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Previous">&#10094;</button>
      <img id="lightbox-img" src="" alt="" />
      <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Next">&#10095;</button>
    </div>
  </div>
  `;
}

// تُستدعى مرة واحدة فقط من main.js عند إقلاع الموقع (Event Delegation)
export function initPhotoGallery() {
  let savedScrollY = 0;
  let currentLightboxIndex = -1;

  function lockBodyScroll() {
    savedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
  }

  function unlockBodyScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
  }

  function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;

    currentLightboxIndex = index;
    const img = filteredImages[currentLightboxIndex];
    lightboxImg.src = img.full;
    lightboxImg.alt = img.alt;

    lightbox.classList.add('active');
    lockBodyScroll();
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('active');
    unlockBodyScroll();
  }

  function showNext() {
    if (currentLightboxIndex < filteredImages.length - 1) {
      openLightbox(currentLightboxIndex + 1);
    }
  }

  function showPrev() {
    if (currentLightboxIndex > 0) {
      openLightbox(currentLightboxIndex - 1);
    }
  }

  document.body.addEventListener('click', (e) => {
    const pageContainer = document.querySelector('.photo-gallery-page');
    if (!pageContainer) return; // نتأكد إننا فعلاً بصفحة المعرض

    // الضغط على فلتر
    const filterBtn = e.target.closest('.filter-btn');
    if (filterBtn) {
      const newFilter = filterBtn.getAttribute('data-filter');
      if (newFilter === activeFilter) return;

      activeFilter = newFilter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      filterBtn.classList.add('active');

      renderGrid(true);
      return;
    }

    // الضغط على "تحميل المزيد"
    if (e.target.id === 'load-more-btn') {
      renderGrid(false);
      return;
    }

    // الضغط على صورة بالمعرض → فتح Lightbox
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      const index = parseInt(galleryItem.getAttribute('data-index'), 10);
      // نحسب الفهرس الحقيقي بمصفوفة filteredImages (يأخذ بعين الاعتبار كل الدفعات المحمّلة)
      const globalIndex = Array.from(document.querySelectorAll('.gallery-item')).indexOf(galleryItem);
      openLightbox(globalIndex);
      return;
    }

    // أزرار الـ Lightbox
    if (e.target.id === 'lightbox-close' || e.target.id === 'lightbox') {
      closeLightbox();
      return;
    }
    if (e.target.id === 'lightbox-next') {
      showNext();
      return;
    }
    if (e.target.id === 'lightbox-prev') {
      showPrev();
      return;
    }
  });

  // التنقل بالكيبورد داخل Lightbox
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showPrev(); // بالعربي RTL: يمين = السابق بصريًا
    if (e.key === 'ArrowLeft') showNext();
  });
}

// تُستدعى بعد إدخال المحتوى بالـ DOM (من الراوتر عبر setTimeout)
export function initPhotoGalleryGrid() {
  renderGrid(true);
}