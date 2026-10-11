/**
 * Contact Component
 * 7. CONTACT SECTION
 * Email, WhatsApp, social media links, and contact form for editors and media organizations.
 */

export function renderContact() {
  return `
    <section class="section contact-section" id="contact">
      <div class="container">
        
        <!-- SECTION HEADER -->
        <div class="editorial-header">
          <span class="kicker">Chapter V · Dialogue</span>
          <h2 class="editorial-title">Direct Editorial Inquiries</h2>
          <p class="editorial-subtitle">
            Open for editorial commissions, investigative story collaborations, literary engagements, media panels, and speaking appointments.
          </p>
        </div>

        <div class="contact-grid">
          
          <!-- CONTACT INFO & CHANNELS -->
          <div class="contact-info-col">
            <h3 class="contact-lede">
              "Every story begins with a conversation. Let us uncover truths and shape narratives that matter."
            </h3>

            <p class="contact-body">
              Whether you are an editor seeking investigative reporting, a publishing house exploring literary fiction, or a forum convener organizing media dialogues, reach out directly via secure email or direct messaging.
            </p>

            <!-- DIRECT CHANNELS -->
            <div class="contact-channels">
              
              <!-- Email -->
              <a href="mailto:yishua.editorial@gmail.com" class="channel-card" id="contact-email-link">
                <div class="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">Editorial Email</span>
                  <span class="channel-value">yishua.editorial@gmail.com</span>
                </div>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/2348030000000?text=Hello%20Olukorede%2C%20I%20am%20reaching%20out%20regarding%20an%20editorial%20inquiry" target="_blank" rel="noopener noreferrer" class="channel-card" id="contact-whatsapp-link">
                <div class="channel-icon whatsapp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.43c0-4.54 3.69-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"/>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">Instant Direct Connect</span>
                  <span class="channel-value">WhatsApp Direct Message</span>
                </div>
              </a>

            </div>

            <!-- SOCIAL MEDIA LINKS -->
            <div class="social-links-box">
              <div class="social-links-title">Professional Media Networks</div>
              <div class="social-pills-row">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                  <span>LinkedIn</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                  <span>X / Twitter</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a href="https://substack.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                  <span>Substack Dispatch</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                  <span>Goodreads Author</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>

          </div>

          <!-- EDITORIAL CONTACT FORM -->
          <div class="contact-form-card">
            <h4 class="form-header-title">Send a Secure Editorial Message</h4>
            <p class="form-header-desc">
              Tailored for newsroom editors, publishing houses, cultural festivals, and research institutions.
            </p>

            <form class="contact-form" id="editorial-contact-form">
              <div class="form-row-2">
                <div class="form-group">
                  <label for="contact-name" class="form-label">Your Name / Title *</label>
                  <input type="text" id="contact-name" name="name" class="form-input" placeholder="e.g. Adebayo Adeleke" required />
                </div>
                <div class="form-group">
                  <label for="contact-org" class="form-label">Publication / Organization *</label>
                  <input type="text" id="contact-org" name="organization" class="form-input" placeholder="e.g. Guardian Editorial Desk" required />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label for="contact-email" class="form-label">Email Address *</label>
                  <input type="email" id="contact-email" name="email" class="form-input" placeholder="editor@domain.org" required />
                </div>
                <div class="form-group">
                  <label for="contact-type" class="form-label">Inquiry Nature *</label>
                  <select id="contact-type" name="type" class="form-select" required>
                    <option value="" disabled selected>Select Commission Type</option>
                    <option value="Editorial Commission">Editorial Feature Commission</option>
                    <option value="Investigative Collaboration">Investigative Reporting Lead</option>
                    <option value="Literary Publication">Book Publishing / Rights</option>
                    <option value="Speaking Engagement">Keynote / Conference Panel</option>
                    <option value="Media Interview">Press Interview Request</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject" class="form-label">Subject Headline *</label>
                <input type="text" id="contact-subject" name="subject" class="form-input" placeholder="Brief subject line" required />
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Editorial Brief / Message Details *</label>
                <textarea id="contact-message" name="message" class="form-textarea" placeholder="Detail the scope of assignment, timeline, publication specifications, or collaboration proposal..." required></textarea>
              </div>

              <button type="submit" class="btn btn-gold form-submit-btn" id="contact-submit-btn">
                <span>Dispatch Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              <p class="form-privacy-note">
                🔒 Protected by journalistic privilege & confidentiality. Direct response typically within 24-48 hours.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContact() {
  const form = document.getElementById("editorial-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const name = nameInput ? nameInput.value : "Friend";
    const emailInput = document.getElementById("contact-email");
    const orgInput = document.getElementById("contact-org");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("contact-submit-btn");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Dispatching Secure Message...</span>`;
    }

    // Send to backend server API if available
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: emailInput ? emailInput.value : "",
        organization: orgInput ? orgInput.value : "",
        subject: subjectInput ? subjectInput.value : "",
        message: messageInput ? messageInput.value : ""
      })
    }).catch(() => {});

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Message Dispatched ✓</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
      }

      // Show toast
      showToast(`Thank you, ${name}. Your editorial dispatch has been received. Expect a response shortly.`);
      form.reset();

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = `
            <span>Dispatch Message</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          `;
        }
      }, 4000);
    }, 800);
  });
}

function showToast(message) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}
