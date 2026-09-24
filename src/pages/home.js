import greenMetric from '../assets/images/logos/green-metric.jpg';
import rur from '../assets/images/logos/rur.jpg';
import iso_21001_2018 from '../assets/images/logos/ISO-21001-2018.png';
import iso_9001_2015 from '../assets/images/logos/ISO-9001-2015.png';
import iso_50001_2018 from '../assets/images/logos/ISO-50001-2018.png';
import iso_45001_2018 from '../assets/images/logos/ISO-45001-2018.png';
import wm_ranking from '../assets/images/logos/wm-ranking.jpg';
import { buildDeanTalkSection } from './about_college/about/message_from_the_dean.js';

export function home() {
    return (
        `
        <section class="hero-section">
    <div class="container">
        <h2 class="college-title" data-i18n="college_name">AL-Amarah University College</h2>
        <p class="college_description" data-i18n="college_description">
            Al-Amarah University College was established in 2017, 
            in connection with Cabinet Decision No. 358 of 2017, 
            be based in Maysan Governorate / Al-Amarah City / Northern Entrance 
            to the governorate in order to expand The Department of Higher 
            Education in Maysan and Iraq. The establishment of the college 
            aims to establish a scientific and civilized edifice that 
            contributes to the preparation of a specialized scientific cadre, 
            who takes an important and effective course in building and 
            developing Iraq's modern renaissance.
        </p>

        <div class="stats-wrapper">
            <div class="stat-card">
                <span class="stat-number" data-target="4669">0</span>
                <p class="stat-label" data-i18n="student">Students</p>
            </div>
            <div class="stat-card">
                <span class="stat-number" data-target="1711">0</span>
                <span class="stat-label" data-i18n="graduate">Graduates</span>
            </div>
            <div class="stat-card">
                <span class="stat-number" data-target="152">0</span>
                <p class="stat-label" data-i18n="teachers">Teachers</p>
            </div>
            <div class="stat-card">
                <span class="stat-number" data-target="18">0</span>
                <p class="stat-label" data-i18n="department">Departments</p>
            </div>
            <div class="stat-card">
                <span class="stat-number" data-target="89">0</span>
                <p class="stat-label" data-i18n="employee">Employee</p>
            </div>
        </div>
    </div>
</section>
        <div class="home-main-content">

        <section class="slider-section">
        <div class="slider-container">
            <div class="slide active">
                <div class="slide-bg" style="background-image: url('${rur}');"></div>
                    <div class="slide-overlay"></div>
                    <div class="slide-content">
                        <div class="badge-icon"><img src="${rur}" alt="RUR" /></div>
                        <h4 data-i18n="rur_title">RUR Ranking</h4>
                        <p data-i18n="rur_desc">
                            Al-Amarah University College ranked 39th among Iraqi universities and 856th globally in the 2021 Round University Ranking (RUR), which evaluates the quality of educational institutions.
                        </p>
                    </div>
            </div>

            <div class="slide">
                <div class="slide-bg" style="background-image: url('${greenMetric}');"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <div class="badge-icon"><img src="${greenMetric}" alt="Green Metric" /></div>
                    <h4 data-i18n="greenmetric_title">Green Metric</h4>
                    <p data-i18n="greenmetric_desc">
                        Al-Amarah University College ranked 39th among Iraqi universities and 856th globally in the 2021 Green Metric ranking for sustainable educational institutions.
                    </p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-bg" style="background-image: url('${iso_21001_2018}');"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <div class="badge-icon"><img src="${iso_21001_2018}" alt="ISO 21001" /></div>
                    <h4 data-i18n="iso21001_title">ISO 21001:2018</h4>
                    <p data-i18n="iso21001_desc">
                        Al-Amarah University College achieved an advanced rank among private colleges and universities in Iraq securing the ISO 21001 Educational Organizations Management System certification.
                    </p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-bg" style="background-image: url('${iso_9001_2015}');"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <div class="badge-icon"><img src="${iso_9001_2015}" alt="ISO 9001" /></div>
                    <h4 data-i18n="iso9001_title">ISO 9001:2015</h4>
                    <p data-i18n="iso9001_desc">
                        Al-Amarah University College was awarded the ISO 9001 Quality Management System certification, issued by the International Organization for Standardization (ISO).
                    </p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-bg" style="background-image: url('${iso_50001_2018}');"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <div class="badge-icon"><img src="${iso_50001_2018}" alt="ISO 50001" /></div>
                    <h4 data-i18n="iso50001_title">ISO 50001:2018</h4>
                    <p data-i18n="iso50001_desc">
                        Al-Amarah University College was awarded the ISO 50001 Energy Management System certification upon meeting all necessary requirements.
                    </p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-bg" style="background-image: url('${wm_ranking}');"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <div class="badge-icon"><img src="${wm_ranking}" alt="Webometrics" /></div>
                    <h4 data-i18n="webometrics_title">Webometrics</h4>
                    <p data-i18n="webometrics_desc">
                        Al-Amarah University College achieved 110th place in the Webometrics Ranking of World Universities among public and private Iraqi universities.
                    </p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-bg" style="background-image: url('${iso_45001_2018}');"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <div class="badge-icon"><img src="${iso_45001_2018}" alt="ISO 45001" /></div>
                    <h4 data-i18n="iso45001_title">ISO 45001:2018</h4>
                    <p data-i18n="iso45001_desc">
                        Al-Amarah University College secured the ISO 45001 Occupational Health and Safety Management System certification upon meeting all required criteria.
                    </p>
                </div>
            </div>

            <button class="slider-btn prev-btn" aria-label="Previous Slide">&#10094;</button>
            <button class="slider-btn next-btn" aria-label="Next Slide">&#10095;</button>

            <div class="slider-dots"></div>
        </div>
    </section>
             <div class="container">
             ${buildDeanTalkSection()}
             </div>
        </div>
        `
    )
}


export function initCounters() {
    const counters = document.querySelectorAll('.hero-section .stat-number');
    const duration = 2000;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (!target) return;

        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentCount = Math.floor(progress * target);
            counter.innerText = currentCount.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString();
            }
        }

        requestAnimationFrame(updateCounter);
    });
}


let autoSlideInterval = null;

export function initSlider() {
    const slides = document.querySelectorAll('.slider-section .slide');
    const prevBtn = document.querySelector('.slider-section .prev-btn');
    const nextBtn = document.querySelector('.slider-section .next-btn');
    const dotsContainer = document.querySelector('.slider-section .slider-dots');

    if (!slides.length || !prevBtn || !nextBtn || !dotsContainer) return;

    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }

    let currentIndex = 0;

    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-section .dot');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

        currentIndex = (index + slides.length) % slides.length;

        slides[currentIndex].classList.add('active');
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
        resetTimer();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;

    function startTimer() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(autoSlideInterval);
        startTimer();
    }

    startTimer();
}