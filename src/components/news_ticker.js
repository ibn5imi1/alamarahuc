// ============================================
// News Ticker — A general component used on all pages of the site
// ============================================

let tickerAnimationId = null;
let dockScrollHandler = null;
let sourceObserver = null;

const NEWS_ITEMS = [
    'The Private College of Architecture congratulates the sixth-year preparatory students taking the second-round exams, wishing them successful admission',
    'To coincide with the start of the new academic year, Al-Amarah Private College is accepting inquiries from students and parents between 8:00 AM and 2:30 PM',
    'The Iraqi Council of Ministers has decided to suspend official working hours at all state institutions from Wednesday, September 30, through Saturday, October 3, 2026, in celebration of the Republic of Iraq\'s Sovereignty Days.'
];

const NEWS_SEPARATOR = '     •     ';
const NEWS_TEXT_DEFAULT = NEWS_ITEMS.join(NEWS_SEPARATOR);

export function buildNewsTickerSection() {
    return `
    <div class="news-ticker" id="global-news-ticker">
      <span class="ticker-label" data-i18n="news_ticker.label">Latest News</span>
      <div class="ticker-track-wrapper">
        <div class="ticker-track" id="news-ticker-track"></div>
        <span class="ticker-text-source" id="news-ticker-source" data-i18n="news_ticker.text" style="display: none;">${NEWS_TEXT_DEFAULT}</span>
      </div>
    </div>
  `;
}

function buildTickerTrack() {
    const track = document.getElementById('news-ticker-track');
    const source = document.getElementById('news-ticker-source');
    if (!track || !source) return;

    const newsText = source.textContent.trim();
    const repeatedHtml = Array(4).fill(`<span class="ticker-item">${newsText}</span>`).join('');
    track.innerHTML = repeatedHtml;
}

function getCurrentDirection() {
    const currentLang = localStorage.getItem('lang') || 'ar';
    return currentLang === 'ar' ? 'rtl' : 'ltr';
}

function startTickerAnimation() {
    const track = document.getElementById('news-ticker-track');
    if (!track) return;

    if (tickerAnimationId) {
        cancelAnimationFrame(tickerAnimationId);
    }

    const CYCLE_DURATION_MS = 30000;
    const isRtl = getCurrentDirection() === 'rtl';
    const direction = isRtl ? 1 : -1;

    function measureAndStart() {
        const oneSetWidth = track.scrollWidth / 4;
        if (!oneSetWidth) {
            setTimeout(measureAndStart, 100);
            return;
        }

        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = (elapsed % CYCLE_DURATION_MS) / CYCLE_DURATION_MS;
            const xOffset = direction * (progress * oneSetWidth);

            track.style.transform = `translateX(${xOffset}px)`;
            tickerAnimationId = requestAnimationFrame(step);
        }

        tickerAnimationId = requestAnimationFrame(step);
    }

    measureAndStart();
}

function setupFooterDocking() {
    const ticker = document.getElementById('global-news-ticker');
    const footer = document.querySelector('footer, .footer');

    if (!ticker || !footer) return;

    if (dockScrollHandler) {
        window.removeEventListener('scroll', dockScrollHandler);
        window.removeEventListener('resize', dockScrollHandler);
    }

    function updateTickerPosition() {
        const tickerHeight = ticker.offsetHeight;
        const footerRect = footer.getBoundingClientRect();

        if (footerRect.top <= window.innerHeight) {
            const dockTop = window.scrollY + footerRect.top - tickerHeight;
            ticker.style.position = 'absolute';
            ticker.style.top = `${dockTop}px`;
            ticker.style.bottom = 'auto';
        } else {
            ticker.style.position = 'fixed';
            ticker.style.bottom = '0';
            ticker.style.top = 'auto';
        }
    }

    dockScrollHandler = updateTickerPosition;
    window.addEventListener('scroll', dockScrollHandler);
    window.addEventListener('resize', dockScrollHandler);

    updateTickerPosition();
    setTimeout(updateTickerPosition, 200);
    setTimeout(updateTickerPosition, 600);
}

// ✅ The actual solution: We wait for the actual change in the source text instead of guessing a fixed time.
function waitForTranslationThenBuild() {
    const source = document.getElementById('news-ticker-source');
    if (!source) return;

    const currentLang = localStorage.getItem('lang') || 'ar';

    // If it were English, we wouldn't be waiting for a translation anyway—we’d build immediately.
    if (currentLang !== 'ar') {
        buildTickerTrack();
        startTickerAnimation();
        return;
    }

    // If the text differs from the English default before we start monitoring—meaning the translation has already arrived quickly—we build immediately.
    if (source.textContent.trim() !== NEWS_TEXT_DEFAULT) {
        buildTickerTrack();
        startTickerAnimation();
        return;
    }

    // Otherwise, we observe the element and wait for the actual moment its text changes (the actual arrival of the translation).
    if (sourceObserver) {
        sourceObserver.disconnect();
    }

    let built = false;
    const build = () => {
        if (built) return;
        built = true;
        sourceObserver.disconnect();
        buildTickerTrack();
        startTickerAnimation();
    };

    sourceObserver = new MutationObserver(() => {
        if (source.textContent.trim() !== NEWS_TEXT_DEFAULT) {
            build();
        }
    });
    sourceObserver.observe(source, { childList: true, characterData: true, subtree: true });

    // ✅ Backup mechanism: If, for any reason, the translation doesn't arrive at all (e.g., an incomplete file), we build the view after 3 seconds using the available text
    // so the bar doesn't remain empty forever.
    setTimeout(build, 3000);
}

export function initNewsTicker() {
    waitForTranslationThenBuild();
    setupFooterDocking();

    window.addEventListener('languageChanged', () => {
        setTimeout(() => {
            buildTickerTrack();
            startTickerAnimation();
        }, 150);
    });
}