import "../scss/variables.scss";

export function footer() {
    return `
    <footer class="footer">
        <div class="container">
            <!-- Social Media Department -->
            <div class="footer-section social-media-footer">
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
                    <a href="https://t.me/alamarhuc" target="_blank" rel="noopener noreferrer" aria-label="Telegram / X">
                       <i class="fa-brands fa-telegram"></i>
                    </a>
                </div>
            </div>

            <!-- Contact Information Section -->
            <div class="footer-section contact-us-footer">
                <h3 data-i18n="contact_us">Contact Us</h3>
                <div class="contact-info">
                    <div class="info-item">
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:07735551113">07735551113</a>
                    </div>
                    <div class="info-item">
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:07737943285">07737943285</a>
                    </div>
                    <div class="info-item">
                        <i class="fa-regular fa-envelope"></i>
                        <a href="mailto:info@alamarahuc.edu.iq">info@alamarahuc.edu.iq</a>
                    </div>
                </div>
            </div>

            <!-- Site and Geography Department -->
            <div class="footer-section location-footer">
                <h3 data-i18n="location">Location</h3>
                <div class="location-info">
                    <a href="https://www.google.com/maps/place/Al-Amarah+University+College/@31.88562,47.10994,13z/data=!4m6!3m5!1s0x3fe7bf719382de89:0x325fc60fb69ea583!8m2!3d31.8856201!4d47.1099395!16s%2Fg%2F11fj7hbwwn" target="_blank" rel="noopener noreferrer" class="location-link">
                        <i class="fa-solid fa-location-dot"></i>
                        <span data-i18n="college_name">Al-Amarah University College</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>`;
}