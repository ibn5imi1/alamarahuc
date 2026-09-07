import deanImg from '../assets/images/dean.jpeg';
import greenMetric from '../assets/images/green-metric.jpg';
import rur from '../assets/images/rur.jpg';
import iso_21001_2018 from '../assets/images/ISO-21001-2018.png';
import iso_9001_2015 from '../assets/images/ISO-9001-2015.png';
import iso_50001_2018 from '../assets/images/ISO-50001-2018.png';
import iso_45001_2018 from '../assets/images/ISO-45001-2018.png';
import wm_ranking from '../assets/images/wm-ranking.jpg';

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
            developing Iraq’s modern renaissance.
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

            <!-- أزرار التحكم -->
           <button class="slider-btn prev-btn" aria-label="Previous Slide">&#10094;</button>
            <button class="slider-btn next-btn" aria-label="Next Slide">&#10095;</button>

                

            <!-- نقاط الترقيم -->
            <div class="slider-dots"></div>
        </div>
    </section>
             <div class="container">
             <section class="dean_talk_section">
                    <h2 class="section-title" data-i18n="dean_talk_title">Dean's Speech</h2>

                    <div class="dean_card">
                        <div class="dean_img_wrapper">
                            <!-- تم تغيير المسار إلى مسار مطلق لتلافي مشكلة عدم الظهور -->
                            <img src="${deanImg}" alt="Dean of Al-Amarah University College" class="dean_img"/>
                            <div class="dean_info">
                                <h3 data-i18n="dean_info">
                                Prof. Dr. Nabil Jamil Yasin <br>
                                Dean of Al-Amarah University College
                                </h3>
                            </div>
                        </div>

                        <div class="dean_text_wrapper">
                            <div class="talk" data-i18n="dean_talk">
In the name of God, the Most Gracious, the Most Merciful.
Almighty God says in His Holy Book: "It is only those who have knowledge among His servants that fear Allah."
Great is the Truth of Almighty God.
Praise be to Allah, Lord of the Worlds, and peace and blessings be upon the Messenger of Allah, the Seal of the Prophets and Messengers, his virtuous and pure Household, his noble Companions, and all who follow them until the Day of Judgment.
As we begin this new academic year, I am pleased to welcome you all to Al-Amarah University College—this distinguished scientific institution that unites us in achieving noble goals in service of knowledge and society. I look forward to working with you towards an academic year filled with dedication and success, as we continue our journey toward excellence and innovation.
To Our Esteemed Faculty and Staff,
You are the cornerstone of this college and the secret behind its success. Through your dedication, the future of our students is forged. I encourage you to continue your outstanding efforts in teaching and mentorship, as you serve as role models in both knowledge and practice. The impact of your work extends far beyond the classroom, shaping minds that will build a bright future for our nation. The college remains steadfast in providing an exceptional academic environment rooted in creativity and scientific research, fostering our students' skills and shaping their character so they may become the leaders and builders of tomorrow.
To Our Dear Students,
You are the hope and the fundamental pillar upon which we rely to advance our journey of progress and excellence. I urge you to strive with diligence and perseverance, make the most of your time in pursuit of knowledge, and uphold high moral and professional values so that you may serve as honorable representatives of your university and your nation.
In conclusion, I express my sincere gratitude and appreciation to all faculty members and staff who spare no effort in serving our students. I pray to Almighty God to grant us all guidance and success in all our endeavors.
May the peace, mercy, and blessings of Allah be upon you.
Success comes from God alone.
                            </div>
                        </div>
                    </div>
                </section>
             
             </div>
        </div>
        `
    )
}


export function initCounters() {
    const counters = document.querySelectorAll('.hero-section .stat-number');
    const duration = 2000; // ممدة الحركة بالمللي ثانية (2 ثانية)

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (!target) return;

        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // حساب الرقم الحالي وإضافة الفاصلة للأرقام الكبيرة
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

    // إذا لم تكن العناصر موجودة في الـ DOM بعد، اخرج من الدالة
    if (!slides.length || !prevBtn || !nextBtn || !dotsContainer) return;

    // تنظيف أي مؤقت سابق لمنع تسارع السلايدر
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }

    let currentIndex = 0;

    // إنشاء النقاط (Dots)
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

    // ربط الأحداث مع إزالة الأحداث القديمة لتجنب التكرار
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