/**
 * Header Component
 * Logo · Home · About · Stories · Gallery · Contact
 */

export function renderHeader() {
  return `
    <header class="site-header" id="site-header">
      <div class="container container-wide">
        <div class="header-inner">
          <!-- Logo -->
          <a href="#home" class="site-logo" aria-label="Olukorede Yishua Home">
            <div class="logo-monogram">OY</div>
            <div class="logo-text">
              <span class="logo-name">Olukorede <span>Yishua</span></span>
              <span class="logo-tagline">Journalist · Writer · Storyteller</span>
            </div>
          </a>

          <!-- Main Navigation -->
          <nav class="nav-menu" id="nav-menu" aria-label="Main Navigation">
            <a href="#home" class="nav-link active" data-nav="home">Home</a>
            <a href="#about" class="nav-link" data-nav="about">About</a>
            <a href="#books" class="nav-link" data-nav="books">Books</a>
            <a href="#experience" class="nav-link" data-nav="experience">Experience</a>
            <a href="#contact" class="nav-link" data-nav="contact">Contact</a>
            
            <a href="#cv-download" class="btn btn-gold mobile-only-btn" style="display: none;">
              Download CV (PDF)
            </a>
          </nav>

          <!-- Header Actions -->
          <div class="header-actions">
            <a href="#cv-download" class="header-cv-btn" id="header-cv-trigger">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </a>

            <!-- Mobile Hamburger Button -->
            <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function initHeader() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("mobile-toggle");
  const menu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!header || !toggle || !menu) return;

  // Scroll appearance
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close mobile menu on click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";

      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Active section indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  });
}
