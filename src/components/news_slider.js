// ============================================
// News Slider — Homepage Component
// ============================================

// 📰 News: Edit here only. Each news item has an ID, a title, and a date string (in English).
// Images are automatically sourced from: /images/news/news-01.webp ... news-10.webp
// Translation keys are automatically generated: news.<id>.title and news.<id>.date
const NEWS_DATA = [
    { id: 1, title: 'The head of the ministerial committee overseeing assessment exams inspects the conduct of exams at Al-Amarah University College.', date: 'May 22, 2026' },
    { id: 2, title: 'Al-Emara University College Supports the Iraq International Art Biennale (2025–2030) and Enhances Its Cultural and International Presence', date: 'May 11, 2026' },
    { id: 3, title: 'The modern scientific laboratories at Al-Amarah University College facilitate practical training for first-year dentistry students.', date: 'April 27, 2026' },
    { id: 4, title: 'A new academic partnership—a scientific twinning arrangement—uniting two academic departments to keep pace with research advancements.', date: 'April 28, 2026' },
    { id: 5, title: 'Chemical Engineering and Petroleum Industries students from Al-Amarah University College conduct a scientific field trip to the laboratories of the Missan Oil Company.', date: 'May 7, 2026' },
    { id: 6, title: 'Workshop on the Dangers of Drugs, organized by the Accounting Department at Al-Amarah University College.', date: 'April 15, 2026' },
    { id: 7, title: 'Hawizeh Marsh: Between Life and Oblivion Due to Severe Drought Waves', date: 'April 14, 2026' },
    { id: 8, title: 'A delegation from the Ministry of Higher Education and Scientific Research visits Al-Amarah University College and commends the level of organization and institutional commitment.', date: 'April 4, 2026' },
    { id: 9, title: '"Makers of Leaders" is the title of the workshop organized by Al-Amarah Private University under the auspices of the National Youth Council.', date: 'February 19, 2026' },
    { id: 10, title: 'Al-Amarah University College hosts a delegation from the Kuwait Institute for Scientific Research.', date: 'February 9, 2026' },
].map(n => ({
    image: `/images/news/news-${String(n.id).padStart(2, '0')}.webp`,
    titleKey: `news.${n.id}.title`,
    dateKey: `news.${n.id}.date`,
    title: n.title,
    date: n.date,
}));

const CHEVRON_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="9 6 15 12 9 18"></polyline>
  </svg>`;

const CALENDAR_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>`;

function buildCard(item, index) {
    // The first 4 images load immediately, while the rest load lazily to reduce page load time.
    const loading = index < 4 ? 'eager' : 'lazy';
    return `
    <article class="news-card">
      <div class="news-card-inner">
        <div class="news-card-image">
          <img src="${item.image}" alt="" loading="${loading}" decoding="async" draggable="false" onerror="this.style.display='none'" />
        </div>
        <div class="news-card-body">
          <p class="news-card-title" data-i18n="${item.titleKey}">${item.title}</p>
          <div class="news-card-date">${CALENDAR_SVG}<span data-i18n="${item.dateKey}">${item.date}</span></div>
        </div>
      </div>
    </article>
  `;
}

export function buildNewsSliderSection() {
    return `
    <section class="news-slider-section" id="news-slider-section">
      <div class="news-slider-header reveal">
        <h2 data-i18n="home.news_section_title">University News</h2>
        <div class="header-line"></div>
      </div>

      <div class="news-slider-wrap">
        <button type="button" class="news-arrow news-arrow-prev" aria-label="Previous news">${CHEVRON_SVG}</button>
        <div class="news-scroller" id="news-scroller">
          ${NEWS_DATA.map(buildCard).join('')}
        </div>
        <button type="button" class="news-arrow news-arrow-next" aria-label="Next news">${CHEVRON_SVG}</button>
      </div>
    </section>
  `;
}

// Event listeners on `window` that are cleaned up upon re-initialization (to prevent accumulation when revisiting the home page)
let cleanupFns = [];

// Called from router.js after the home page is inserted into the DOM
export function initNewsSlider() {
    cleanupFns.forEach(fn => fn());
    cleanupFns = [];

    const section = document.getElementById('news-slider-section');
    const scroller = document.getElementById('news-scroller');
    if (!section || !scroller) return;

    const prevBtn = section.querySelector('.news-arrow-prev');
    const nextBtn = section.querySelector('.news-arrow-next');
    const cards = Array.from(scroller.querySelectorAll('.news-card'));
    if (!cards.length) return;

    let active = false; // The animation does not start until the section actually appears on the screen.
    let rafId = null;

    const isRtl = () => getComputedStyle(scroller).direction === 'rtl';

    // ---------- Card appearance animation (sequentially: the first, then the second...) ----------
    function updateCards() {
        if (!active) return;
        const rootRect = scroller.getBoundingClientRect();
        const entering = [];

        cards.forEach(card => {
            const r = card.getBoundingClientRect();
            const visibleWidth = Math.min(r.right, rootRect.right) - Math.max(r.left, rootRect.left);
            const ratio = Math.max(0, visibleWidth) / r.width;
            const shown = card.classList.contains('in-view');

            if (!shown && ratio >= 0.25) {
                entering.push(card);
            } else if (shown && ratio <= 0.02) {
                // Moved completely out of frame: hide it so the animation replays upon return.
                card.style.transitionDelay = '0ms';
                card.classList.remove('in-view');
            }
        });

        // DOM order: In Arabic, the first card is on the right, so it moves from right to left.
        entering.forEach((card, i) => {
            card.style.transitionDelay = `${i * 130}ms`;
            card.classList.add('in-view');
        });
    }

    // ---------- Stock Status ----------
    function updateArrows() {
        const max = scroller.scrollWidth - scroller.clientWidth;
        const pos = Math.abs(scroller.scrollLeft); // مطلقة لتعمل بالعربي والإنجليزي
        prevBtn.disabled = pos <= 2;
        nextBtn.disabled = pos >= max - 2;
    }

    function onScroll() {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            rafId = null;
            updateArrows();
            updateCards();
        });
    }
    scroller.addEventListener('scroll', onScroll, { passive: true });

    // ---------- Arrows: Each press moves a full "page" (4 / 2 / 1 cards, depending on the screen) ----------
    function getStep() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
        const perView = Math.max(1, Math.round((scroller.clientWidth + gap) / (cardWidth + gap)));
        return (cardWidth + gap) * perView;
    }

    function scrollByPage(direction) {
        const rtlFlip = isRtl() ? -1 : 1; // scrollLeft becomes negative
        scroller.scrollBy({ left: direction * rtlFlip * getStep(), behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => scrollByPage(-1));
    nextBtn.addEventListener('click', () => scrollByPage(1));

    // ---------- Mouse dragging (touch works automatically via native scrolling) ----------
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;
    let snapTimer = null;

    function snapToNearest() {
        const rootRect = scroller.getBoundingClientRect();
        const rtl = isRtl();
        let bestDelta = null;

        cards.forEach(card => {
            const r = card.getBoundingClientRect();
            const delta = rtl ? r.right - rootRect.right : r.left - rootRect.left;
            if (bestDelta === null || Math.abs(delta) < Math.abs(bestDelta)) bestDelta = delta;
        });

        if (bestDelta !== null) scroller.scrollBy({ left: bestDelta, behavior: 'smooth' });
    }

    scroller.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        clearTimeout(snapTimer);
        isDragging = true;
        startX = e.clientX;
        startScroll = scroller.scrollLeft;
        scroller.classList.add('is-dragging', 'snap-off');
        try { scroller.setPointerCapture(e.pointerId); } catch (_) { }
    });

    scroller.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        scroller.scrollLeft = startScroll - (e.clientX - startX);
    });

    function endDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        scroller.classList.remove('is-dragging');
        try { scroller.releasePointerCapture(e.pointerId); } catch (_) { }
        snapToNearest();
        snapTimer = setTimeout(() => scroller.classList.remove('snap-off'), 500);
    }
    scroller.addEventListener('pointerup', endDrag);
    scroller.addEventListener('pointercancel', endDrag);

    // ---------- Activate animation when the section appears on screen ----------
    const io = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
            active = true;
            updateCards();
            updateArrows();
            io.disconnect();
        }
    }, { threshold: 0.25 });
    io.observe(section);
    cleanupFns.push(() => io.disconnect());

    // ---------- Language Switching and Screen Resizing ----------
    const onLanguageChanged = () => {
        scroller.scrollTo({ left: 0, behavior: 'auto' }); // 0 is the starting point in both directions.
        requestAnimationFrame(() => {
            updateArrows();
            updateCards();
        });
    };
    const onResize = () => onScroll();

    window.addEventListener('languageChanged', onLanguageChanged);
    window.addEventListener('resize', onResize);
    cleanupFns.push(() => {
        window.removeEventListener('languageChanged', onLanguageChanged);
        window.removeEventListener('resize', onResize);
    });

    updateArrows();
}