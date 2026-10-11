/**
 * Hero Component
 * 1. HERO SECTION
 * INTRODUCTION: OLUKOREDE_YISHUA | Journalist · Writer · Storyteller
 * Headline, short bio, and View My Work button.
 * OWNER'S PORTRAIT: Large professional photo
 */

export function renderHero() {
  const primaryImg = "public/images/profile.jpg";
  const fallbackImg = "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/.user_uploaded/media_1791705352682.jpg";

  return `
    <section class="hero-section" id="home">
      <div class="container">
        <div class="hero-grid">
          
          <!-- INTRODUCTION COLUMN -->
          <div class="hero-content">
            <span class="hero-kicker">Distinguished Editorial Voice</span>
            
            <h1 class="hero-name">
              OLUKOREDE
              <span class="accent-surname">YISHUA</span>
            </h1>
            
            <div class="hero-roles">
              Journalist · Writer · Storyteller
            </div>

            <p class="hero-headline">
              Unearthing hidden truths, defending public accountability, and chronicling the human spirit across modern Africa.
            </p>

            <p class="hero-bio">
              With over 25 years at the forefront of Nigerian investigative journalism and literary letters, 
              Olukorede Yishua serves as Associate Editor at <em>The Nation</em>. He is the author of three acclaimed published books: 
              <em>After The End</em>, <em>In The Name of Our Father</em>, and <em>Black Market</em>, 
              bringing sharp investigative rigor and luminous narrative craftsmanship to every dispatch.
            </p>

            <!-- CALL TO ACTION BUTTONS -->
            <div class="hero-actions">
              <a href="#books" class="btn btn-primary">
                <span>Explore Books & Works</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#about" class="btn btn-outline">
                <span>Read Biography</span>
              </a>

              <a href="#contact" class="btn btn-outline">
                <span>Contact Editor</span>
              </a>
            </div>

            <!-- EDITORIAL METRICS STRIP -->
            <div class="hero-meta-strip">
              <div class="meta-item">
                <span class="meta-number">25</span>
                <span class="meta-label">Years of Reporting</span>
              </div>
              <div class="meta-item">
                <span class="meta-number">450+</span>
                <span class="meta-label">Investigative & Feature Stories</span>
              </div>
              <div class="meta-item">
                <span class="meta-number">3</span>
                <span class="meta-label">Published Books</span>
              </div>
              <div class="meta-item">
                <span class="meta-number">14</span>
                <span class="meta-label">Parliamentary Inquiries Sparked</span>
              </div>
            </div>

          </div>

          <!-- OWNER'S PORTRAIT COLUMN -->
          <div class="hero-portrait-wrapper">
            <div class="portrait-frame">
              <div class="frame-corner corner-tl"></div>
              <div class="frame-corner corner-tr"></div>
              <div class="frame-corner corner-bl"></div>
              <div class="frame-corner corner-br"></div>

              <div class="portrait-inner">
                <img 
                  src="${primaryImg}" 
                  alt="Olukorede Yishua — Journalist, Writer, Storyteller" 
                  class="portrait-img"
                  id="hero-portrait-image"
                  onerror="if (this.src !== '${fallbackImg}') this.src = '${fallbackImg}';"
                  loading="eager"
                />
              </div>

              <!-- Floating Credibility Badge -->
              <div class="portrait-floating-badge">
                <span class="badge-icon"></span>
                <span>Associate Editor · The Nation / Author</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
