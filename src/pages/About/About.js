/**
 * About Component
 * 2. ABOUT ME
 * Biography, journalism interests, education, experience, skills, and a second personal photograph.
 */

export function renderAbout() {
  const photoImg = "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/.user_uploaded/media_1791710376446.jpg";

  return `
    <section class="section about-section" id="about">
      <div class="container">
        
        <!-- SECTION HEADER -->
        <div class="editorial-header">
          <span class="kicker">Chapter I · The Chronicler</span>
          <h2 class="editorial-title">About Olukorede Yishua</h2>
          <p class="editorial-subtitle">
            An unwavering commitment to truth, narrative discipline, and elevating stories that define modern Africa.
          </p>
        </div>

        <div class="about-grid">
          
          <!-- VISUAL COLUMN: SECOND PERSONAL PHOTOGRAPH & LITERARY HIGHLIGHTS -->
          <div class="about-visual-column">
            <div class="about-photo-card">
              <div class="about-photo-wrapper">
                <img 
                  src="${photoImg}" 
                  alt="Olukorede Yishua at his editorial desk in the newsroom" 
                  class="about-photo-img"
                  id="about-photo-image"
                  loading="lazy"
                />
              </div>
              <div class="about-caption-box">
                <span class="about-caption-text">Olukorede at his editorial desk, reviewing morning dispatches and national headlines.</span>
                <span class="about-caption-tag">Editorial Newsroom · Lagos</span>
              </div>
            </div>

            <!-- Published Literary Works Box -->
            <div class="about-books-card">
              <h4 class="about-books-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Published Literary Works
              </h4>
              
              <div class="book-item">
                <span class="book-name">After The End</span>
                <span class="book-desc">A humane and deeply sympathetic novel exploring the frailty of human connections, grief, and emotional survival.</span>
              </div>
              
              <div class="book-item">
                <span class="book-name">In The Name of Our Father</span>
                <span class="book-desc">Critically acclaimed political thriller examining military censorship, religious power, and democratic courage.</span>
              </div>
              
              <div class="book-item">
                <span class="book-name">Black Market</span>
                <span class="book-desc">A searing, stripped-down novel delving into shadow economies, ethical dilemmas, and urban survival.</span>
              </div>
            </div>
          </div>

          <!-- BIOGRAPHY & EDITORIAL DOSSIER COLUMN -->
          <div class="about-bio-column">
            
            <p class="about-lead-paragraph">
              <span class="about-dropcap">F</span>or over 25 years, Olukorede Sanya Yishua has walked the demanding intersection of frontline investigative journalism, high-level political analysis, and literary storytelling. His writing interrogates systemic power, champions human rights, and breathes visceral life into the lives of ordinary citizens confronting extraordinary struggles.
            </p>

            <p class="about-body-text">
              As Associate Editor at <em>The Nation</em>—one of Nigeria’s most widely circulated and influential daily newspapers—Olukorede has directed major national news desks, mentored scores of investigative reporters, and authored the widely syndicated weekly column <em>In Touch</em>, known for its uncompromising dissection of constitutional governance, fiscal leakages, and democratic reform.
            </p>

            <p class="about-body-text">
              Beyond the deadline-driven pulse of the newsroom, he is an accomplished creative author. His acclaimed novel <em>In The Name of Our Father</em> was described by critics as a masterclass in political narrative realism, dissecting how authoritarian regimes and charlatans manipulate public piety. His short story collection <em>Vaults of Secrets</em> earned international acclaim for its psychological nuance and compassionate portraits of West African resilience.
            </p>

            <!-- 1. JOURNALISM INTERESTS & BEATS -->
            <div class="about-subblock">
              <h3 class="subblock-title">Journalism Interests & Beats</h3>
              <div class="interests-grid">
                <span class="interest-tag">🔍 Investigative Accountability</span>
                <span class="interest-tag">🏛️ Political Economy & Governance</span>
                <span class="interest-tag">⚖️ Human Rights & Justice</span>
                <span class="interest-tag">🌊 Climate & Coastal Displacement</span>
                <span class="interest-tag">📚 Literary & Cultural Criticism</span>
                <span class="interest-tag">🛡️ Anti-Corruption & Public Finance</span>
                <span class="interest-tag">🎙️ Depth Profile Interviews</span>
              </div>
            </div>

            <!-- 2. CORE EDITORIAL SKILLS -->
            <div class="about-subblock">
              <h3 class="subblock-title">Skills & Professional Competencies</h3>
              <div class="skills-grid">
                <div class="skill-card">
                  <div class="skill-card-name">Investigative Probes & OSINT</div>
                  <div class="skill-card-desc">Tracing complex paper trails, public procurement audits, leaked financial documents, and encrypted source management.</div>
                </div>
                <div class="skill-card">
                  <div class="skill-card-name">Editorial Direction & Mentorship</div>
                  <div class="skill-card-desc">Overseeing newsrooms, shaping front-page editorial lines, fact-checking workflows, and mentoring next-generation correspondents.</div>
                </div>
                <div class="skill-card">
                  <div class="skill-card-name">Longform & Narrative Non-Fiction</div>
                  <div class="skill-card-desc">Translating dense statistical and policy realities into emotionally resonant, character-driven narrative features.</div>
                </div>
                <div class="skill-card">
                  <div class="skill-card-name">Media Ethics & Legal Compliance</div>
                  <div class="skill-card-desc">Ensuring unassailable reporting integrity, rigorous defamation mitigation, and strict journalistic safety compliance.</div>
                </div>
              </div>
            </div>

            <!-- 3. EDUCATION & CREDENTIALS -->
            <div class="about-subblock">
              <h3 class="subblock-title">Education & Academic Background</h3>
              <div class="edu-list">
                <div class="edu-item">
                  <div class="edu-degree">B.Sc. Mass Communication / Journalism (Honors)</div>
                  <div class="edu-institution">Premier Institute of Mass Communication & Journalism</div>
                  <div class="edu-detail">Comprehensive foundations in print reporting, media sociology, broadcast law, and editorial craft.</div>
                </div>
                <div class="edu-item">
                  <div class="edu-degree">Postgraduate Diploma in International Relations & Public Policy</div>
                  <div class="edu-institution">School of Media & Public Policy</div>
                  <div class="edu-detail">Advanced analysis of regional diplomatic frameworks, constitutional governance, and sovereign fiscal policy.</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
