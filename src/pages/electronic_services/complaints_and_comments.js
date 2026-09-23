// ⚠️ استبدل هذي القيم بالقيم الفعلية من حسابك
const EMAILJS_PUBLIC_KEY = '5Jrryby_IqRLoTWcy';
const EMAILJS_SERVICE_ID = 'service_alamarahuc';
const EMAILJS_TEMPLATE_ID = 'template_jpbnepg';
const EMAILJS_OTP_TEMPLATE_ID = 'template_3no57yr';

let currentOtp = null;
let verifiedEmail = null;

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

      <!-- ========== الخطوة 1: التحقق من الإيميل ========== -->
      <div id="email-step" class="complaint-form reveal">
        <div class="form-group">
          <label for="sender-email" data-i18n="complaints.email_label">Your Email</label>
          <input
            type="email"
            id="sender-email"
            required
            placeholder="example@email.com"
          />
        </div>
        <button type="button" class="submit-btn" id="send-otp-btn" data-i18n="complaints.send_code_btn">
          Send Verification Code
        </button>
        <p class="form-status error" id="otp-send-error" data-i18n="complaints.otp_send_error">
          Failed to send code. Please check the email and try again.
        </p>
      </div>

      <!-- ========== الخطوة 2: إدخال الرمز + باقي الفورم (مخفية حتى يرسل الرمز) ========== -->
      <form id="complaint-form" class="complaint-form reveal" style="display: none;">
        <div class="form-group otp-group">
          <label for="otp-input" data-i18n="complaints.otp_label">Verification Code</label>
          <div class="otp-row">
            <input type="text" id="otp-input" maxlength="6" placeholder="000000" required />
            <button type="button" class="resend-btn" id="resend-otp-btn" data-i18n="complaints.resend_code_btn">
              Resend
            </button>
          </div>
          <p class="form-status error" id="otp-wrong-error" data-i18n="complaints.otp_wrong_error">
            Incorrect code. Please try again.
          </p>
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

        <input type="hidden" name="sender_email" id="hidden-sender-email" />

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

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000)); // رمز من 6 أرقام
}

async function sendOtpToEmail(email) {
  currentOtp = generateOtp();
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OTP_TEMPLATE_ID, {
    to_email: email,
    otp_code: currentOtp,
  });
}

export function initComplaintsForm() {
  if (typeof emailjs !== 'undefined' && !window.__emailjsInitialized) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    window.__emailjsInitialized = true;
  }

  document.body.addEventListener('click', async (e) => {
    const pageContainer = document.querySelector('.complaints-page');
    if (!pageContainer) return;

    // زر "إرسال رمز التحقق"
    if (e.target.id === 'send-otp-btn' || e.target.id === 'resend-otp-btn') {
      const emailInput = document.getElementById('sender-email');
      const email = emailInput.value.trim();
      const sendErrorEl = document.getElementById('otp-send-error');

      if (!email || !emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }

      const btn = e.target;
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = '...';
      sendErrorEl.classList.remove('active');

      try {
        await sendOtpToEmail(email);
        verifiedEmail = email;
        document.getElementById('hidden-sender-email').value = email;

        // إظهار خطوة الرمز وباقي الفورم
        document.getElementById('email-step').style.display = 'none';
        document.getElementById('complaint-form').style.display = 'block';
        document.getElementById('otp-input').focus();
      } catch (err) {
        console.error('فشل إرسال الرمز:', err);
        sendErrorEl.classList.add('active');
      } finally {
        btn.disabled = false;
        btn.textContent = originalText;
      }
      return;
    }
  });

  document.body.addEventListener('submit', async (e) => {
    const form = e.target.closest('#complaint-form');
    if (!form) return;

    e.preventDefault();

    const otpInput = document.getElementById('otp-input');
    const otpWrongError = document.getElementById('otp-wrong-error');
    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    otpWrongError.classList.remove('active');
    successMsg.classList.remove('active');
    errorMsg.classList.remove('active');

    // ✅ التحقق من الرمز قبل أي إرسال فعلي
    if (otpInput.value.trim() !== currentOtp) {
      otpWrongError.classList.add('active');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      successMsg.classList.add('active');
      form.reset();
      form.style.display = 'none'; // إخفاء الفورم بعد النجاح
    } catch (err) {
      console.error('فشل إرسال الشكوى:', err);
      errorMsg.classList.add('active');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = form.querySelector('[data-i18n="complaints.submit_btn"]')?.getAttribute('data-en-default') || 'Submit';
    }
  });
}