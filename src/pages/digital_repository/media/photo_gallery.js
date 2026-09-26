import { initScrollReveal } from '../../../scrollReveal.js';
import { heroSection } from '../../../components/hero_section.js';

const CATEGORIES = [
  { slug: 'all', labelKey: 'gallery.filter_all', label: 'All Photos' },
  { slug: 'college', labelKey: 'gallery.filter_college', label: 'College' },
  { slug: 'departments', labelKey: 'gallery.filter_departments', label: 'Departments' },
  { slug: 'trips', labelKey: 'gallery.filter_trips', label: 'Trips' },
  { slug: 'factories', labelKey: 'gallery.filter_factories', label: 'Factories' },
  { slug: 'laboratories', labelKey: 'gallery.filter_laboratories', label: 'Laboratories' },
  { slug: 'workshops', labelKey: 'gallery.filter_workshops', label: 'Workshops' },
];

// ⚠️ كل مفتاح هنا يطابق اسم مجلد فعلي
const CATEGORY_COUNTS = {
  college: 49,
  departments: 18,
  trips: 15,
  factories: 20,
  laboratories: 25,
  workshops: 26,
};

// 🎲 دالة خلط العناصر بشكل عشوائي (Fisher-Yates Shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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

const ALL_IMAGES = Object.entries(CATEGORY_COUNTS).flatMap(([cat, count]) =>
  buildCategoryImages(cat, count)
);

const BATCH_SIZE = 12;
let activeFilter = 'all';
let loadedCount = 0;
let filteredImages = [];
let isLoading = false;

// 🔀 جلب الصور المفلترة وخلطها عشوائيًا في كل مرة
function getFilteredImages(filterSlug) {
  const images = filterSlug === 'all'
    ? ALL_IMAGES
    : ALL_IMAGES.filter(img => img.category === filterSlug);

  return shuffleArray(images); // إرجاع النسخة المخلوطة عشوائيًا
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

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function setLoadMoreLoading(loading) {
  const btn = document.getElementById('load-more-btn');
  const spinner = document.getElementById('gallery-spinner');
  if (!btn || !spinner) return;

  if (loading) {
    btn.style.display = 'none';
    spinner.style.display = 'flex';
  } else {
    spinner.style.display = 'none';
  }
}

async function renderGrid(reset = false) {
  if (isLoading) return;
  isLoading = true;

  const grid = document.getElementById('gallery-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!grid) { isLoading = false; return; }

  if (reset) {
    filteredImages = getFilteredImages(activeFilter); // سيتم الخلط هنا عند التبديل بين الأقسام
    loadedCount = 0;
    grid.innerHTML = '';
  }

  const nextBatch = filteredImages.slice(loadedCount, loadedCount + BATCH_SIZE);

  if (nextBatch.length > 0) {
    setLoadMoreLoading(true);
    await Promise.all(nextBatch.map(img => preloadImage(img.thumb)));
    setLoadMoreLoading(false);
  }

  grid.insertAdjacentHTML('beforeend', buildImageCards(nextBatch));
  loadedCount += nextBatch.length;

  if (loadMoreBtn) {
    loadMoreBtn.style.display = loadedCount < filteredImages.length ? 'inline-block' : 'none';
  }

  initScrollReveal();

  isLoading = false;
}

export function photoGalleryView() {
  activeFilter = 'all';

  return `
  <div class="photo-gallery-page">

  <!-- Hero Section -->
    ${heroSection({
    titleKey: 'gallery.hero_title',
    titleDefault: 'Photo Gallery'
  })}
    

    <section class="gallery-container">
      <div class="section-header reveal">
        <h2 data-i18n="gallery.section_title">Browse Our Photos</h2>
        <div class="header-line"></div>
      </div>

      <div class="filter-bar reveal" id="filter-bar">
        ${buildFilterButtons()}
      </div>

      <div class="gallery-grid" id="gallery-grid"></div>

      <div class="gallery-spinner" id="gallery-spinner">
        <div class="spinner-circle"></div>
      </div>

      <div class="load-more-wrapper">
        <button id="load-more-btn" class="load-more-btn" data-i18n="gallery.load_more">
          Load More
        </button>
      </div>
    </section>

    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Previous">&#10094;</button>
      <img id="lightbox-img" src="" alt="" />
      <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Next">&#10095;</button>
    </div>
  </div>
  `;
}

export function initPhotoGallery() {
  let savedScrollY = 0;
  let currentLightboxIndex = -1;
  let sentinelObserver = null;

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

  function isRTL() {
    return document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar';
  }

  function showNext() {
    if (currentLightboxIndex < filteredImages.length - 1) openLightbox(currentLightboxIndex + 1);
  }
  function showPrev() {
    if (currentLightboxIndex > 0) openLightbox(currentLightboxIndex - 1);
  }

  function watchLoadMoreButton() {
    if (sentinelObserver) sentinelObserver.disconnect();

    const btn = document.getElementById('load-more-btn');
    if (!btn) return;

    sentinelObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isLoading) {
          renderGrid(false);
        }
      });
    }, { rootMargin: '200px' });

    sentinelObserver.observe(btn);
  }

  document.body.addEventListener('click', (e) => {
    const pageContainer = document.querySelector('.photo-gallery-page');
    if (!pageContainer) return;

    const filterBtn = e.target.closest('.filter-btn');
    if (filterBtn) {
      const newFilter = filterBtn.getAttribute('data-filter');
      if (newFilter === activeFilter) return;

      activeFilter = newFilter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      filterBtn.classList.add('active');

      renderGrid(true).then(watchLoadMoreButton);
      return;
    }

    if (e.target.id === 'load-more-btn') {
      renderGrid(false);
      return;
    }

    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      const globalIndex = Array.from(document.querySelectorAll('.gallery-item')).indexOf(galleryItem);
      openLightbox(globalIndex);
      return;
    }

    if (e.target.id === 'lightbox-close' || e.target.id === 'lightbox') { closeLightbox(); return; }

    if (e.target.id === 'lightbox-next') {
      isRTL() ? showPrev() : showNext();
      return;
    }
    if (e.target.id === 'lightbox-prev') {
      isRTL() ? showNext() : showPrev();
      return;
    }
  });

  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      isRTL() ? showNext() : showPrev();
    }
    if (e.key === 'ArrowLeft') {
      isRTL() ? showPrev() : showNext();
    }
  });

  window.__watchGalleryLoadMore = watchLoadMoreButton;
}

export async function initPhotoGalleryGrid() {
  await renderGrid(true);
  if (typeof window.__watchGalleryLoadMore === 'function') {
    window.__watchGalleryLoadMore();
  }
}