// ============================================
// بيانات الفيديوهات
// ============================================
const VIDEOS_DATA = [
  { url: 'https://www.youtube.com/watch?v=8J67KGvHu2A'},
  { url: 'https://www.youtube.com/watch?v=6Rf-srxrgQw&t=2s'},
  { url: 'https://youtu.be/DGbP4LMNZPQ?si=13uR2awQszEXTHFB'},
  { url: 'https://youtu.be/-6Woh2FtxH0?si=CEngOQ6x5MO-S2va'},
  { url: 'https://youtu.be/S-LrSg5Thck?si=ab3GdjSyXEBcwRlS'},
  { url: 'https://youtu.be/CzzJ6XMgXBw?si=WvMcocxUu4g4Orli'},
  { url: 'https://youtu.be/tIyCKiDjTDE?si=xLgzVdHpF1NhVBD4'},
  { url: 'https://youtu.be/JecW3zYQFmk?si=YxRvaIHxJohWpL5b'},
  { url: 'https://youtu.be/5S0qNv3-DTc?si=W0Ix0tjZJqtopRj6'},
  { url: 'https://youtu.be/oUmCTnWY6s8?si=f5xfFxKuAxR-4QSa'},
  { url: 'https://youtu.be/Bfdr6K5V35s?si=Zk35gmdX07Cm--Q9'},
  { url: 'https://youtu.be/XrKbeFKC100?si=KavubTgGN0tGQq8K'},
  { url: 'https://youtu.be/EpSsTH25Wmo?si=NU6tgbKLPG6EeLcc'},
  { url: 'https://youtu.be/aPPoGhm-_OM?si=8oBvRIxwL06s7SPr'},
  { url: 'https://youtu.be/TB2LITf6nks?si=gY1yrpz0GSzCb01T'},
  { url: 'https://youtu.be/a4iJo_ABluk?si=oNN9HcNdGug9jSQX'},
  { url: 'https://youtu.be/v75kvXsdEWs?si=zxhiClykIsIh-Qwo'},
];

const CHANNEL_NAME = 'كلية العمارة الجامعة';
const CHANNEL_URL = 'https://www.youtube.com/@%D9%83%D9%84%D9%8A%D8%A9%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D8%B1%D8%A9%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%AB9%D8%B8';

function extractYouTubeId(url) {
  if (!url) return '';
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtu\.be\/)([^?&\s]+)/,
    /(?:youtube\.com\/shorts\/)([^?&\s]+)/,
    /(?:youtube\.com\/embed\/)([^?&\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return url;
}

function buildVideoCards() {
  return VIDEOS_DATA.map((video, index) => {
    const videoId = extractYouTubeId(video.url);
    return `
      <div class="video-card reveal" data-video-id="${videoId}" data-index="${index}">
        <div class="video-thumb-wrapper">
          <!-- شريط العنوان والتفاصيل يظهر فوق المقطع تلقائياً -->
          <div class="video-header-overlay">
           
            <div class="video-info">
              <h3 class="video-title" id="video-title-${videoId}">${video.title}</h3>
              <span class="channel-title">${CHANNEL_NAME}</span>
            </div>
          </div>

          <img
            src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg"
            alt="${video.title}"
            loading="lazy"
            class="video-thumb"
          />

          <button class="play-btn" aria-label="Play video">
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.13 13.05 0 24 0 24s.13 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.87 34.95 68 24 68 24s-.13-10.95-1.48-16.26z" fill="#f00"/>
              <path d="M45 24 27 14v20" fill="#fff"/>
            </svg>
          </button>

          <!-- شارة Watch on YouTube -->
          <a
            href="${video.url}"
            target="_blank"
            rel="noopener"
            class="watch-on-youtube-badge"
            onclick="event.stopPropagation()"
          >
            <span data-i18n="video.watch_on_youtube">Watch on</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
              <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.118C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.523A2.994 2.994 0 0 0 .502 6.186 31.09 31.09 0 0 0 0 12a31.09 31.09 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.107 2.118c1.886.523 9.391.523 9.391.523s7.505 0 9.391-.523a2.994 2.994 0 0 0 2.107-2.118A31.09 31.09 0 0 0 24 12a31.09 31.09 0 0 0-.502-5.814ZM9.75 15.568V8.432L15.818 12Z"/>
            </svg>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

export function videoGalleryView() {
  return `
  <div class="video-gallery-page">
    <section class="video-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="video.hero_title">Video Gallery</h1>
      </div>
    </section>

    <section class="video-container">
      <div class="section-header reveal">
        <h2 data-i18n="video.section_title">Videos</h2>
        <div class="header-line"></div>
      </div>

      <div class="videos-grid" id="videos-grid">
        ${buildVideoCards()}
      </div>
    </section>

    <section class="channel-footer reveal">
      <a href="${CHANNEL_URL}" target="_blank" rel="noopener" class="channel-link">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF0000">
          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.118C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.523A2.994 2.994 0 0 0 .502 6.186 31.09 31.09 0 0 0 0 12a31.09 31.09 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.107 2.118c1.886.523 9.391.523 9.391.523s7.505 0 9.391-.523a2.994 2.994 0 0 0 2.107-2.118A31.09 31.09 0 0 0 24 12a31.09 31.09 0 0 0-.502-5.814ZM9.75 15.568V8.432L15.818 12Z"/>
        </svg>
        <span data-i18n="video.channel_label">Our YouTube Channel</span>
      </a>
    </section>
  </div>
  `;
}

// دالة لجلب العناوين تلقائياً من يوتيوب بدون الحاجة لمفتاح API
async function fetchYouTubeTitles() {
  VIDEOS_DATA.forEach(async (video) => {
    const videoId = extractYouTubeId(video.url);
    try {
      const response = await fetch(`https://noembed.com/embed?dataType=json&url=https://www.youtube.com/watch?v=${videoId}`);
      const data = await response.json();
      if (data.title) {
        const titleEl = document.getElementById(`video-title-${videoId}`);
        if (titleEl) {
          titleEl.textContent = data.title;
        }
      }
    } catch (e) {
      console.error('Error fetching video title:', e);
    }
  });
}

export function initVideoGallery() {
  // جلب العناوين تلقائياً بعد بناء الصفحة
  fetchYouTubeTitles();

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.video-card');
    if (!card) return;

    const pageContainer = document.querySelector('.video-gallery-page');
    if (!pageContainer) return;

    if (card.querySelector('iframe')) return;

    const videoId = card.getAttribute('data-video-id');
    const thumbWrapper = card.querySelector('.video-thumb-wrapper');

    thumbWrapper.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  });
}