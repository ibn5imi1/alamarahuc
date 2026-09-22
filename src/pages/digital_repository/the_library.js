const LIBRARY_STATS = [
  { key: 'total', value: 348, labelKey: 'library.stat_total', label: 'Total Books' },
  { key: 'english', value: 173, labelKey: 'library.stat_english', label: 'English Books' },
  { key: 'arabic', value: 175, labelKey: 'library.stat_arabic', label: 'Arabic Books' },
];

const CORE_BOOKS = [
  {
    titleKey: 'library.core_book1_title',
    title: 'Authorized Master Book Register',
    fileId: '10v2co6UOIkDInqP_F4hSjulFG34D0i3P' // ✅ معرف مجرد بس
  },
  {
    titleKey: 'library.core_book2_title',
    title: 'Book Titles',
    fileId: '1vRLRfTWsn-Afak-3TRopicYlnmXKVsUL' // ✅ معرف مجرد بس
  },
];

function buildStatCards() {
  return LIBRARY_STATS.map(stat => `
    <div class="stat-card reveal">
      <div class="stat-number" data-target="${stat.value}">0</div>
      <div class="stat-label" data-i18n="${stat.labelKey}">${stat.label}</div>
    </div>
  `).join('');
}

function buildCoreBooks() {
  return CORE_BOOKS.map(book => `
    <div class="core-book-card reveal">
      <h3 data-i18n="${book.titleKey}">${book.title}</h3>
      <div class="book-viewer">
        <iframe
          src="https://drive.google.com/file/d/${book.fileId}/preview"
          frameborder="0"
          scrolling="yes"
          allow="autoplay"
        ></iframe>
      </div>
      <a
        href="https://drive.google.com/uc?export=download&id=${book.fileId}"
        download
        class="download-link"
        data-i18n="repository.download_label"
      >Download</a>
    </div>
  `).join('');
}

export function theLibraryView() {
  return `
  <div class="the-library-page">
    <section class="library-main-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="library.hero_title">College Library</h1>
      </div>
    </section>

    <section class="library-stats-container">
      <div class="section-header reveal">
        <h2 data-i18n="library.stats_section_title">Library Collection</h2>
        <div class="header-line"></div>
      </div>

      <div class="stats-grid">
        ${buildStatCards()}
      </div>
    </section>

    <section class="library-core-books-container">
      <div class="section-header reveal">
        <h2 data-i18n="library.core_books_title">Approved Core Textbooks</h2>
        <div class="header-line"></div>
      </div>

      <div class="core-books-grid">
        ${buildCoreBooks()}
      </div>
    </section>
  </div>
  `;
}

export function initTheLibraryStats() {
  const statNumbers = document.querySelectorAll('.the-library-page .stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(el => observer.observe(el));

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1500;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }
}