// scrollReveal.js
export function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        },
        { root: null, threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
}