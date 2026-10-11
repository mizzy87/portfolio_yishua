/**
 * Home Page Assembler & Experience / CV Sections
 * Exact Section Order:
 * 1. HERO SECTION
 * 2. ABOUT ME
 * 3. SELECTED JOURNALISM WORK
 * 4. PHOTOJOURNALISM GALLERY
 * 5. EXPERIENCE & ACHIEVEMENTS
 * 6. DOWNLOAD MY CV
 * 7. CONTACT SECTION
 */

import { renderHero } from "../../components/Hero/Hero.js";
import { renderAbout } from "../About/About.js";
import { renderBooks, initBooks } from "../../components/Books/Books.js";
import { renderContact } from "../Contact/Contact.js";
import { EXPERIENCE_DATA } from "../../data/experience.js";

export function renderExperienceAndCV() {
  const { workHistory, awards, certificationsAndFellowships, books, stats } = EXPERIENCE_DATA;

  const timelineHtml = workHistory.map((item) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-period">${item.period}</div>
      <h4 class="timeline-role">${item.role}</h4>
      <div class="timeline-org">${item.organization} · ${item.location}</div>
      <p class="timeline-desc">${item.description}</p>
    </div>
  `).join("");

  const awardsHtml = awards.map((award) => `
    <div class="award-card">
      <div class="award-head">
        <span class="award-year">${award.year}</span>
        <span class="award-body">${award.body}</span>
      </div>
      <h4 class="award-title">${award.title}</h4>
      <p class="award-note">${award.note}</p>
    </div>
  `).join("");

  const certsHtml = certificationsAndFellowships.map((cert) => `
    <div class="cert-item">
      <div class="cert-title">${cert.title}</div>
      <div class="cert-issuer">${cert.issuer} · ${cert.year}</div>
      <div class="cert-detail">${cert.detail}</div>
    </div>
  `).join("");

  return `
    <!-- 5. EXPERIENCE & ACHIEVEMENTS -->
    <section class="section experience-section" id="experience">
      <div class="container">
        
        <!-- SECTION HEADER -->
        <div class="editorial-header">
          <span class="kicker">Chapter IV · Track Record</span>
          <h2 class="editorial-title">Experience & Achievements</h2>
          <p class="editorial-subtitle">
            Over 25 years dedicated to investigative depth, institutional accountability, newsroom leadership, and literary excellence.
          </p>
        </div>

        <div class="experience-grid">
          
          <!-- WORK HISTORY TIMELINE -->
          <div class="timeline-column">
            <div class="timeline-block">
              <h3 class="timeline-title">Editorial Leadership & Work History</h3>
              <div class="timeline-list">
                ${timelineHtml}
              </div>
            </div>

            <!-- Published Books Showcase -->
            <div style="margin-top: var(--space-10);">
              <h3 class="timeline-title">Literary Fiction & Novels</h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                ${books.map((b) => `
                  <div style="background-color: var(--white); border: 1px solid var(--ivory-border); padding: var(--space-5); border-radius: var(--radius-sm); border-left: 3px solid var(--gold-500);">
                    <div style="font-family: var(--font-serif); font-weight: 700; font-size: 1.15rem; color: var(--navy-900);">${b.title}</div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gold-700); text-transform: uppercase; margin-bottom: 6px;">${b.genre} · ${b.status}</div>
                    <p style="font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-dark-muted); line-height: var(--leading-normal);">${b.synopsis}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- HONORS, FELLOWSHIPS & AWARDS COLUMN -->
          <div class="achievements-column">
            
            <!-- Awards -->
            <div>
              <h3 class="timeline-title">Awards & Recognitions</h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-3);">
                ${awardsHtml}
              </div>
            </div>

            <!-- Fellowships & Certifications -->
            <div style="margin-top: var(--space-8);">
              <h3 class="timeline-title">Fellowships & Certifications</h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                ${certsHtml}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- 6. DOWNLOAD MY CV -->
    <section class="section cv-section" id="cv-download">
      <div class="container">
        
        <div class="cv-card">
          
          <!-- Left Info Column -->
          <div class="cv-info-col">
            <span class="kicker" style="color: var(--gold-300);">Professional Dossier</span>
            <h3>Download Official Résumé & Curriculum Vitae</h3>
            <p>
              Access a comprehensive summary of Olukorede Yishua's editorial appointments, investigative portfolio, academic degrees, international media fellowships, published books, and parliamentary testimonies.
            </p>

            <div class="cv-highlights-list">
              <div class="cv-highlight-item">
                <span>✦</span>
                <span>Complete 25-Year Career Timeline</span>
              </div>
              <div class="cv-highlight-item">
                <span>✦</span>
                <span>Verified Editorial References</span>
              </div>
              <div class="cv-highlight-item">
                <span>✦</span>
                <span>Fellowship Credentials (BMIA, ICFJ)</span>
              </div>
              <div class="cv-highlight-item">
                <span>✦</span>
                <span>Syndication & Publishing Rights</span>
              </div>
            </div>

            <div class="cv-actions">
              <!-- Direct PDF Download Link -->
              <a 
                href="public/documents/cv.pdf" 
                download="Olukorede_Yishua_CV.pdf" 
                class="cv-download-btn"
                id="btn-download-cv-file"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download CV (PDF)</span>
              </a>

              <!-- Online Quick Preview Button -->
              <button class="btn btn-outline-gold" id="btn-preview-cv">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>View Online Résumé</span>
              </button>
            </div>
          </div>

          <!-- Right Document Mockup Column -->
          <div class="cv-preview-col">
            <div class="cv-paper-mockup">
              <div class="mockup-badge">PDF 1.4</div>
              <div class="mockup-header">
                <div class="mockup-name">OLUKOREDE YISHUA</div>
                <div class="mockup-role">ASSOCIATE EDITOR · AUTHOR · FELLOW</div>
              </div>
              <div class="mockup-lines">
                <div class="mockup-line short"></div>
                <div class="mockup-line medium"></div>
                <div class="mockup-line accent"></div>
                <div class="mockup-line"></div>
                <div class="mockup-line medium"></div>
                <div class="mockup-line short"></div>
                <div class="mockup-line accent"></div>
                <div class="mockup-line"></div>
                <div class="mockup-line medium"></div>
              </div>
              <div style="margin-top: var(--space-4); display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--text-dark-subtle); border-top: 1px dashed var(--ivory-border); padding-top: 8px;">
                <span>Verified Dossier</span>
                <span>Lagos & Abuja, NG</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CV PREVIEW MODAL -->
    <div class="modal-overlay" id="cv-preview-modal" aria-hidden="true" role="dialog">
      <div class="modal-dialog" style="max-width: 720px;">
        <button class="modal-close-btn" id="modal-close-cv" aria-label="Close CV preview">✕</button>
        <div style="padding: var(--space-10); background-color: var(--ivory-50);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid var(--navy-900); padding-bottom: var(--space-4); margin-bottom: var(--space-6);">
            <div>
              <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--navy-900); margin-bottom: 4px;">OLUKOREDE YISHUA</h2>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-700); font-weight: 700;">Journalist · Author · Associate Editor · Storyteller</div>
            </div>
            <a href="public/documents/cv.pdf" download="Olukorede_Yishua_CV.pdf" class="btn btn-gold btn-sm">
              Save PDF
            </a>
          </div>

          <div style="font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-dark-muted); line-height: 1.7;">
            <p style="margin-bottom: var(--space-4);">
              <strong>Executive Summary:</strong> Distinguished investigative journalist and award-winning novelist with over 25 years of groundbreaking coverage spanning Nigerian governance, public finance, human rights, and West African environmental crises. Associate Editor at <em>The Nation</em> newspaper.
            </p>

            <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--navy-900); margin: var(--space-4) 0 var(--space-2);">Professional Experience</h4>
            <ul style="list-style: disc; margin-left: 20px; margin-bottom: var(--space-4);">
              <li><strong>Associate Editor | The Nation (2015 – Present)</strong> — Direct investigative desks, supervise editorial board opinions, and write weekly syndicated column <em>In Touch</em>.</li>
              <li><strong>Assistant Editor (Investigations) | National Press Network (2010 – 2015)</strong> — Spearheaded high-impact anti-corruption probes and fiscal leakages exposés.</li>
              <li><strong>Senior Political Correspondent (2006 – 2010)</strong> — Covered National Assembly, electoral reforms, and legislative oversight.</li>
            </ul>

            <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--navy-900); margin: var(--space-4) 0 var(--space-2);">Acclaimed Published Books</h4>
            <p style="margin-bottom: var(--space-2);">
              • <em>After The End</em> (Novel, 2021)<br/>
              • <em>In The Name of Our Father</em> (Political Novel, 2018)<br/>
              • <em>Black Market</em> (Novel, 2023)
            </p>

            <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--navy-900); margin: var(--space-4) 0 var(--space-2);">Fellowships & Education</h4>
            <p>
              • Bloomberg Media Initiative Africa (BMIA) Fellow<br/>
              • B.Sc. Mass Communication / Journalism (Honors)
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initCV() {
  const previewBtn = document.getElementById("btn-preview-cv");
  const modal = document.getElementById("cv-preview-modal");
  const closeBtn = document.getElementById("modal-close-cv");

  if (previewBtn && modal) {
    previewBtn.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}

export { initBooks };

export function renderHomePage() {
  return `
    <!-- 1. HERO SECTION -->
    ${renderHero()}

    <!-- 2. ABOUT ME -->
    ${renderAbout()}

    <!-- 3. BOOKS & PUBLICATIONS -->
    ${renderBooks()}

    <!-- 4. EXPERIENCE & ACHIEVEMENTS + DOWNLOAD MY CV -->
    ${renderExperienceAndCV()}

    <!-- 5. CONTACT SECTION -->
    ${renderContact()}
  `;
}
