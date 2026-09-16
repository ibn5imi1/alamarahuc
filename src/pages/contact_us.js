export function contactUsView() {
    return `
    <div class="contact-us-page">
        <!-- Hero Banner Section -->
        <section class="contact-hero">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 data-i18n="contact_page.hero_title">Contact Us</h1>
                <p data-i18n="contact_page.hero_subtitle">We are here to answer your questions and assist you</p>
            </div>
        </section>

        <!-- Main Content Section -->
        <section class="contact-container">
            <div class="contact-grid">
                
                <!-- Contact Info Cards -->
                <div class="contact-info-wrapper">
                    
                    <!-- Phone Numbers -->
                    <div class="info-card">
                        <div class="icon-box">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div class="card-details">
                            <h3 data-i18n="contact_page.phone_title">Phone Numbers</h3>
                            <p><a href="tel:07737943285">07737943285</a></p>
                            <p><a href="tel:07735551113">07735551113</a></p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="info-card">
                        <div class="icon-box">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="card-details">
                            <h3 data-i18n="contact_page.email_title">Email Address</h3>
                            <p><a href="mailto:info@alamarahuc.edu.iq">info@alamarahuc.edu.iq</a></p>
                        </div>
                    </div>

                    <!-- Location Address -->
                    <div class="info-card">
                        <div class="icon-box">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="card-details">
                            <h3 data-i18n="contact_page.address_title">Location Address</h3>
                            <p data-i18n="contact_page.address_desc">Iraq - Amarah, Amarah – Baghdad Road, Opposite College of Engineering – University of Misan</p>
                        </div>
                    </div>

                    <!-- Work Hours & Days -->
                    <div class="info-card">
                        <div class="icon-box">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                        <div class="card-details">
                            <h3 data-i18n="contact_page.work_hours_title">Working Hours & Days</h3>
                            <p><strong data-i18n="contact_page.work_days">Saturday - Sunday - Monday - Tuesday - Wednesday</strong></p>
                            <p data-i18n="contact_page.work_hours">8:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    <!-- Social Media Links -->
                    <div class="info-card social-card">
                        <h3 data-i18n="social_media">Social Media</h3>
                        <div class="icons">
                            <a href="https://www.facebook.com/alamarahuc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCJOznY9lRszhtHQcB4oS4Qg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/alamarahuc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://x.com/alamarahuc" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://t.me/alamarhuc" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <i class="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <!-- Google Map Section -->
                <div class="contact-map-wrapper">
                    <iframe 
                        title="Al-Amarah University College Location"
                        src="https://maps.google.com/maps?q=31.8856201,47.1099395&hl=en&z=14&output=embed" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </section>
    </div>
    `;
}