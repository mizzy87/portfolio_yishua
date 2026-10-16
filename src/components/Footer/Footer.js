/**
 * Footer Component
 * FOOTER: OLUKOREDE_YISHAU
 * Quick Links · Social Media · Copyright
 */

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" id="site-footer">
      <div class="container container-wide">
        
        <!-- TOP GRID -->
        <div class="footer-top-grid">
          
          <!-- BRAND IDENTIFIER -->
          <div class="footer-brand">
            <a href="#home" class="footer-logo" aria-label="Olukorede Yishau Home">
              <div class="footer-monogram">OY</div>
              <div>
                <span class="footer-brand-name">Olukorede <span>Yishau</span></span>
              </div>
            </a>
            <div class="footer-tagline">Journalist · Writer · Storyteller</div>
            <p class="footer-desc">
              Associate Editor at <em>The Nation</em> newspaper, investigative reporter, columnist, and acclaimed author. Committed to rigorous truth, media integrity, and immortalizing contemporary human narratives.
            </p>
          </div>

          <!-- QUICK LINKS -->
          <div class="footer-col">
            <div class="footer-col-title">Quick Links</div>
            <ul class="footer-links-list">
              <li><a href="#home" class="footer-link">Home (Introduction)</a></li>
              <li><a href="#about" class="footer-link">About & Biography</a></li>
              <li><a href="#books" class="footer-link">Books & Publications</a></li>
              <li><a href="#experience" class="footer-link">Experience & Achievements</a></li>
              <li><a href="#cv-download" class="footer-link">Download Résumé / CV</a></li>
              <li><a href="#contact" class="footer-link">Editorial Contact</a></li>
            </ul>
          </div>

          <!-- SOCIAL MEDIA & MEDIA CHANNELS -->
          <div class="footer-col">
            <div class="footer-col-title">Social Media & Portals</div>
            <ul class="footer-links-list">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                  X (formerly Twitter)
                </a>
              </li>
              <li>
                <a href="https://substack.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                  Substack Newsletter
                </a>
              </li>
              <li>
                <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                  Goodreads Author Page
                </a>
              </li>
              <li>
                <a href="mailto:yishau.editorial@gmail.com" class="footer-link">
                  Direct Email Desk
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348030000000" target="_blank" rel="noopener noreferrer" class="footer-link">
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- FOOTER BOTTOM -->
        <div class="footer-bottom">
          <div class="footer-copy">
            <span>© ${currentYear} Olukorede Yishau. All Rights Reserved.</span>
          </div>

          <div class="footer-ethics">
            <span>Adhering to the highest tenets of the Nigerian Guild of Editors & International Center for Journalists.</span>
          </div>

          <button class="back-to-top-btn" id="back-to-top" aria-label="Back to top of page">
            <span>Return to Masthead</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  `;
}

export function initFooter() {
  const topBtn = document.getElementById("back-to-top");
  if (!topBtn) return;

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
