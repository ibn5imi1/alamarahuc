const EMAILJS_PUBLIC_KEY = '5Jrryby_IqRLoTWcy';
const EMAILJS_SERVICE_ID = 'service_alamarahuc';
const EMAILJS_TEMPLATE_ID = 'template_yrxzns4'; 

export function complaintsAndCommentsView() {
  return `
  <div class="complaints-page">
    <section class="complaints-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="complaints.hero_title">Complaints & Feedback</h1>
        <p data-i18n="complaints.hero_subtitle">Your voice matters</p>
      </div>
    </section>

    <section class="complaints-container">
      <div class="section-header reveal">
        <h2 data-i18n="complaints.section_title">Submit Your Complaint or Feedback</h2>
        <div class="header-line"></div>
      </div>

      <div class="intro-text reveal">
        <p data-i18n="complaints.intro_text">
          Please fill out the form below. All submissions are reviewed confidentially by the college administration.
        </p>
      </div>

      <form id="complaint-form" class="complaint-form reveal">
        <div class="form-group">
          <label for="sender-email" data-i18n="complaints.email_label">Your Email</label>
          <input
            type="email"
            id="sender-email"
            name="sender_email"
            required
            placeholder="example@email.com"
          />
        </div>

        <div class="form-group">
          <label data-i18n="complaints.type_label">Complaint Type</label>
          <div class="radio-options">
            <label class="radio-item">
              <input type="radio" name="complaint_type" value="student" required />
              <span data-i18n="complaints.type_student">Complaint about a student</span>
            </label>
            <label class="radio-item">
              <input type="radio" name="complaint_type" value="employee" />
              <span data-i18n="complaints.type_employee">Complaint about an employee</span>
            </label>
            <label class="radio-item">
              <input type="radio" name="complaint_type" value="teacher" />
              <span data-i18n="complaints.type_teacher">Complaint about a teaching staff member</span>
            </label>
            <label class="radio-item">
              <input type="radio" name="complaint_type" value="other" />
              <span data-i18n="complaints.type_other">Other</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="complaint-message" data-i18n="complaints.message_label">Details</label>
          <textarea
            id="complaint-message"
            name="message"
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" id="submit-btn" data-i18n="complaints.submit_btn">
          Submit
        </button>

        <p class="form-status success" id="form-success" data-i18n="complaints.success_msg">
          Your submission has been sent successfully. Thank you.
        </p>
        <p class="form-status error" id="form-error" data-i18n="complaints.error_msg">
          Something went wrong. Please try again later.
        </p>
      </form>
    </section>
  </div>
  `;
}

export function initComplaintsForm() {
  if (typeof emailjs !== 'undefined' && !window.__emailjsInitialized) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    window.__emailjsInitialized = true;
  }

  document.body.addEventListener('submit', (e) => {
    const form = e.target.closest('#complaint-form');
    if (!form) return;

    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    successMsg.classList.remove('active');
    errorMsg.classList.remove('active');
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    if (typeof emailjs === 'undefined') {
      console.error('EmailJS غير محمّلة — تأكد من إضافة سطر <script> بملف index.html');
      errorMsg.classList.add('active');
      submitBtn.disabled = false;
      return;
    }

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        successMsg.classList.add('active');
        form.reset();
      })
      .catch((err) => {
        console.error('فشل إرسال النموذج:', err);
        errorMsg.classList.add('active');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = form.querySelector('[data-i18n="complaints.submit_btn"]')?.getAttribute('data-en-default') || 'Submit';
      });
  });
}