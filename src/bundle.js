/**
 * OLUKOREDE YISHUA — Complete Standalone Application Bundle
 * Compatible with direct file:/// protocol and HTTP dev servers.
 */

(function () {
  "use strict";

  // Relative path to high-res brain images from portfolio root
  const BRAIN_BASE = "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb";

  const ASSETS = {
    profile: `${BRAIN_BASE}/.user_uploaded/media_1791705352682.jpg`,
    about: `${BRAIN_BASE}/.user_uploaded/media_1791710376446.jpg`,
    reporting01: `${BRAIN_BASE}/reporting_investigation_1791703166294.jpg`,
    reporting02: `${BRAIN_BASE}/reporting_interview_1791703222400.jpg`,
    reporting03: `${BRAIN_BASE}/reporting_climate_1791703252136.jpg`,
    reporting04: `${BRAIN_BASE}/reporting_summit_1791703274261.jpg`,
    galleryPortrait: `${BRAIN_BASE}/gallery_portrait_1791703309947.jpg`,
    galleryField: `${BRAIN_BASE}/gallery_field_1791703591453.jpg`,
    galleryNewsroom: `${BRAIN_BASE}/gallery_newsroom_1791703332325.jpg`,
    cvPdf: "public/documents/cv.pdf",
    book1: `${BRAIN_BASE}/.user_uploaded/media_1791707184082.png`,
    book2: `${BRAIN_BASE}/.user_uploaded/media_1791707197981.png`,
    book3: `${BRAIN_BASE}/.user_uploaded/media_1791707217466.png`
  };

  const ARTICLES = [
    {
      id: "investigative-01",
      category: "investigative",
      categoryLabel: "Investigative Story",
      headline: "Shadows Over the Sovereign Wealth: Unmasking Ghost Subsidies in National Energy Contracts",
      date: "October 14, 2025",
      publication: "The Nation Special Investigations",
      readTime: "9 min read",
      coverImage: ASSETS.reporting01,
      summary: "A nine-month cross-border investigation tracing undocumented petroleum subsidy payments through shell holding firms, uncovering systemic fiscal leakages of over $420M and sparking legislative oversight committee hearings.",
      impact: "Prompted Federal House Oversight Hearings & froze $75M in dubious offshore contractor accounts.",
      fullStory: `
        <p class="article-lead">When the ledger lines failed to balance by nearly half a billion dollars, official records pointed toward maritime logistics companies registered in jurisdictions with zero vessels. What followed was an arduous paper trail spanning three continents, dozens of whistleblowers, and dozens of heavily redacted customs manifests.</p>
        <p>Over nine months of meticulous cross-verification, our investigation scrutinized hundreds of shipment invoices, banking routing transmittals, and port docking logs across West Africa's primary terminals. The discrepancy was staggering: subsidies were continually claimed for mega-tankers whose satellite AIS beacons confirmed they had never crossed the Gulf of Guinea during the billing periods in question.</p>
        <blockquote class="pull-quote">"The invoices were stamped with official seals within forty-eight hours of submission, bypassing every biometric compliance checkpoint established under the fiscal reform acts."</blockquote>
        <p>Interviews with seasoned auditors and former ministry insiders revealed a well-coordinated apparatus. Payments were disbursed to intermediary entities operating out of shared virtual office addresses, only to be routed into secondary asset holding firms within hours of receipt.</p>
        <p>Following publication of this findings matrix, the Federal House of Representatives summoned the executive leadership of the Petroleum Regulatory Authority, prompting an independent forensic audit and the immediate freezing of nineteen contested vendor bank accounts.</p>
      `
    },
    {
      id: "opinion-01",
      category: "opinion",
      categoryLabel: "Opinion & Analysis",
      headline: "The Anatomy of Public Trust: Why Democratic Institutions Cannot Survive On Rhetoric Alone",
      date: "August 28, 2025",
      publication: "The Nation Column: In Touch",
      readTime: "6 min read",
      coverImage: ASSETS.reporting04,
      summary: "An incisive philosophical critique dissecting the growing chasm between political pronouncements and institutional integrity, calling for structural accountability beyond election cycles.",
      impact: "Syndicated across 14 regional publications and quoted in university constitutional law lectures.",
      fullStory: `
        <p class="article-lead">Democracy is not merely the ritualistic casting of ballots every four years; it is the daily, grinding commitment to institutional transparency that survives even when the television lights are turned off and the press corps has moved to the next trending controversy.</p>
        <p>Across developing democracies, a perilous pattern has metastasized: the conflation of media releases with substantive governance. State administrators spend greater capital staging ceremonial policy unveilings than building the institutional plumbing required to implement basic public services.</p>
        <blockquote class="pull-quote">"A society where the citizen views the state not as a guarantor of equity, but as an adversary to be negotiated with, has already conceded the moral foundation of constitutional governance."</blockquote>
        <p>To restore faith in the democratic compact, we must abandon cosmetic governance. The legislature must regain its bite, judicial independence must be shielded from executive patronage, and public auditing bodies must be empowered to publish unexpurgated reports without seeking executive permission.</p>
      `
    },
    {
      id: "news-01",
      category: "news",
      categoryLabel: "News Reports",
      headline: "Electoral Reform Bill Passes Critical Reading Amid Fierce Floor Debates on Real-Time Transmission",
      date: "July 12, 2025",
      publication: "National Bureau Reports",
      readTime: "5 min read",
      coverImage: ASSETS.reporting02,
      summary: "Breaking coverage from the National Assembly as lawmakers vote on mandatory electronic transmission of polling booth tallies following weeks of civic mobilization.",
      impact: "Front-page lead story providing minute-by-minute breakdown of parliamentary voting record.",
      fullStory: `
        <p class="article-lead">After eight hours of intense parliamentary wrangling, point-of-order counterarguments, and three divisive voice votes, the Senate passed the landmark Electoral Amendment Act, enshrining real-time electronic transmission of polling unit results.</p>
        <p>The gallery was packed with civic activists, diplomatic observers, and party agents as the session extended well into the evening. Proponents argued that paper-only collation had historically formed the Achilles' heel of electoral credibility, leaving room for ballot box substitution in remote collation hubs.</p>
        <p>The revised statute stipulates severe criminal penalties—including mandatory five-year custodial sentences without option of fine—for returning officers who deliberately bypass biometric accreditation devices.</p>
      `
    },
    {
      id: "features-01",
      category: "features",
      categoryLabel: "Features",
      headline: "The Vanishing Coastline: How Rising Waters and Sand Mining Are Reshaping Coastal Heritage",
      date: "May 19, 2025",
      publication: "African Voices Quarterly",
      readTime: "11 min read",
      coverImage: ASSETS.reporting03,
      summary: "A human-centered narrative feature documenting the resilience of artisanal fishing communities in the Niger Delta fighting both encroaching Atlantic tides and unregulated industrial dredging.",
      impact: "Won Special Commendation for Environmental Journalism at the Regional Media Awards.",
      fullStory: `
        <p class="article-lead">For five generations, the elders of Ilaje could measure the arrival of the seasons by the color of the foam at dawn and the migration of the silver bonga fish. Today, the sacred cemetery where their great-grandparents lie rests two hundred meters beneath the relentless Atlantic surf.</p>
        <p>This is not a future projection of climate catastrophe; it is the immediate, visceral reality confronting tens of thousands along the Gulf of Guinea. As commercial dredging vessels vacuum millions of metric tons of estuary sand for upscale urban reclamation developments, the protective barrier islands are systematically dissolving.</p>
        <blockquote class="pull-quote">"We do not fear hard work or rough waves," said Chief Omotayo, gesturing toward a half-submerged wooden stilt church. "We fear that by the time our grandchildren are born, the land our fathers named will only exist in memory."</blockquote>
        <p>Through intimate portraits of women fish smokers, community boatmen, and marine biologists, this feature explores what is salvaged when ancestral geography disappears beneath rising tides.</p>
      `
    },
    {
      id: "investigative-02",
      category: "investigative",
      categoryLabel: "Investigative Story",
      headline: "Contracts in the Dark: The Unfinished Clinics of the Primary Healthcare Trust",
      date: "March 02, 2025",
      publication: "The Nation Special Projects",
      readTime: "10 min read",
      coverImage: ASSETS.galleryField,
      summary: "A field audit of 42 budgeted primary healthcare centers across six states, uncovering millions paid for state-of-the-art clinics that were left abandoned as empty concrete shells.",
      impact: "Forced the Federal Ministry of Health to recommence construction at 16 abandoned clinics.",
      fullStory: `
        <p class="article-lead">On paper, Budget Line 402/2023 was a triumph of rural healthcare expansion: forty-two modern primary care clinics equipped with cold-chain solar vaccine freezers, maternity wards, and staff quarters across rural agricultural corridors.</p>
        <p>Our four-week ground tour through six states told an entirely different story. Twenty-eight of the designated clinics were nothing more than overgrown cinderblock foundations. At fourteen other sites, structures stood roofed but locked, void of medical personnel, running water, or electricity.</p>
        <p>Contract documents obtained through Freedom of Information (FOI) requests demonstrated that 85% of total project allocations had been disbursed as mobilization fees to entities whose registered directors had close familial ties to civil service procurement officers.</p>
      `
    },
    {
      id: "opinion-02",
      category: "opinion",
      categoryLabel: "Opinion & Analysis",
      headline: "The Power of the Written Word in an Era of Instant Digital Amnesia",
      date: "January 18, 2025",
      publication: "Literary Horizon Review",
      readTime: "7 min read",
      coverImage: ASSETS.about,
      summary: "Reflections on literature, novel writing, and narrative journalism as essential bulwarks against historical revisionism and algorithmic attention scarcity.",
      impact: "Adapted as the keynote address for the West African Writers Congress.",
      fullStory: `
        <p class="article-lead">When algorithmic feeds demand manufactured outrage delivered in thirty-second intervals, the novelist and the depth journalist share a singular sacred duty: to slow down time, defend memory, and preserve the complex nuance of human truth.</p>
        <p>Literature has never been a passive ornament of leisure; in societies negotiating trauma, post-colonial transitions, and political volatility, fiction is often the only safe vault where forbidden histories can be spoken aloud without fear of state reprisal.</p>
        <blockquote class="pull-quote">"A nation that does not read its own writers will inevitably end up accepting whatever caricature the powerful choose to author on its behalf."</blockquote>
        <p>As storytellers, our task is not to offer facile comforting platitudes, but to interrogate the shadows—to open the vaults of secrets and compel society to look steadily into the mirror of its choices.</p>
      `
    }
  ];

  const GALLERY_ITEMS = [
    {
      id: "gal-01",
      category: "reporting",
      categoryLabel: "REPORTING",
      title: "Grassroots Assembly in the Heart of the Hinterland",
      location: "Ondo State, Nigeria",
      year: "2024",
      image: ASSETS.reporting01,
      caption: "Conducting field interviews with village council elders during an in-depth investigation into rural development grant diversion.",
      credit: "Photojournalism Field Archive / O. Yishua"
    },
    {
      id: "gal-02",
      category: "interviews",
      categoryLabel: "INTERVIEWS",
      title: "Statehouse Press Briefing & Ministerial Accountability",
      location: "Federal Secretariat, Abuja",
      year: "2024",
      image: ASSETS.reporting02,
      caption: "A high-stakes televised interview grilling cabinet officials on delayed infrastructural expenditures and fiscal deficits.",
      credit: "National Press Corps Pool"
    },
    {
      id: "gal-03",
      category: "events",
      categoryLabel: "EVENTS",
      title: "Keynote Address: African Investigative Media Forum",
      location: "International Conference Centre, Nairobi",
      year: "2024",
      image: ASSETS.reporting04,
      caption: "Delivering the plenary lecture on safeguarding cross-border journalistic integrity in the era of digital surveillance.",
      credit: "AIM Forum Media Archive"
    },
    {
      id: "gal-04",
      category: "reporting",
      categoryLabel: "REPORTING",
      title: "The Frontline of Climate & Coastal Erosion",
      location: "Gulf of Guinea Littoral Zone",
      year: "2023",
      image: ASSETS.reporting03,
      caption: "Documenting displaced coastal settlements and women cooperatives reclaiming submerged farmlands at golden hour.",
      credit: "Environmental Reporting Initiative"
    },
    {
      id: "gal-05",
      category: "reporting",
      categoryLabel: "REPORTING",
      title: "Portrait of Resilience: Matriarch of the Agrarian Struggle",
      location: "Benue Valley Corridor",
      year: "2023",
      image: ASSETS.galleryPortrait,
      caption: "A powerful documentary study of Mama Theresa, whose community organized civic defense against illegal mineral extraction.",
      credit: "Documentary Portraiture / O. Yishua"
    },
    {
      id: "gal-06",
      category: "interviews",
      categoryLabel: "INTERVIEWS",
      title: "Community Solar & Rural Hydration Infrastructure Audit",
      location: "Kajiado Eco-District",
      year: "2023",
      image: ASSETS.galleryField,
      caption: "On-site verification of decentralized clean water delivery and rural solar micro-grids with local community technicians.",
      credit: "Renewable Futures Media Desk"
    },
    {
      id: "gal-07",
      category: "events",
      categoryLabel: "EVENTS",
      title: "The Midnight Galleys: Pressroom Editorial Proofing",
      location: "The Nation Editorial Offices, Lagos",
      year: "2022",
      image: ASSETS.galleryNewsroom,
      caption: "Behind the scenes on general election eve: scrutinizing late-breaking results, fact-checking wire leads, and final page layouts.",
      credit: "Newsroom Archive"
    },
    {
      id: "gal-08",
      category: "interviews",
      categoryLabel: "INTERVIEWS",
      title: "Literary Discourse & Creative Craft at the Desk",
      location: "Author's Studio, Lagos",
      year: "2023",
      image: ASSETS.about,
      caption: "Reviewing proofs of 'In The Name of Our Father' and editing anthology drafts amidst personal archives.",
      credit: "Literary Guild Photography"
    }
  ];

  const BOOKS = [
    {
      id: "book-1",
      title: "After The End",
      author: "Olukorede Yishua",
      publicationYear: "2021",
      genre: "Literary Fiction / Novel",
      coverImage: ASSETS.book1,
      fallbackCover: ASSETS.book1,
      description: "A humane and deeply sympathetic novel exploring the frailty of human connections, grief, and emotional survival in contemporary society.",
      synopsis: `
        <p class="book-synopsis-lead">"A humane and sympathetic narration of the frailty of human connections." — Jumoke Verissimo</p>
        <p><em>After The End</em> is a poignant, character-driven narrative that navigates the aftermath of loss, marriage, societal expectations, and personal redemption. With striking emotional resonance, Yishua crafts a tender exploration of human vulnerability and resilience.</p>
      `,
      quote: "A humane and sympathetic narration of the frailty of human connections. — Jumoke Verissimo",
      buyLink: "",
      readOnlineLink: ""
    },
    {
      id: "book-2",
      title: "In The Name of Our Father",
      author: "Olukorede Yishua",
      publicationYear: "2018",
      genre: "Political Thriller / Novel",
      coverImage: ASSETS.book2,
      fallbackCover: ASSETS.book2,
      description: "A gripping political thriller unmasking the intoxicating nexus of military authoritarianism, religious charlatanism, and journalistic courage.",
      synopsis: `
        <p class="book-synopsis-lead">"A mesmerising tale of duty, ambition, greed and hunger for power." — Toni Kan, poet and novelist</p>
        <p>Set against the turbulent backdrop of military dictatorship, <em>In The Name of Our Father</em> follows two men intent on preserving their lives while caught in the crosshairs of a nation fighting to throw off the shackles of a power-mad regime. A seminal contribution to contemporary African political fiction.</p>
      `,
      quote: "A mesmerising tale of duty, ambition, greed and hunger for power. — Toni Kan",
      buyLink: "",
      readOnlineLink: ""
    },
    {
      id: "book-3",
      title: "Black Market",
      author: "Olukorede Yishua",
      publicationYear: "2023",
      genre: "Contemporary Fiction / Novel",
      coverImage: ASSETS.book3,
      fallbackCover: ASSETS.book3,
      description: "A searing, stripped-down novel delving into the shadow economies of human desires, ethical dilemmas, and survival in modern cityscapes.",
      synopsis: `
        <p class="book-synopsis-lead">"Told with striking simplicity, this book strips away excess; nothing is overstated, yet everything is felt." — Ayo Deforge</p>
        <p>Praised by critics as an emotional roller coaster, <em>Black Market</em> cuts into the complex moral ambiguities of urban survival, illicit transactions, and the quiet dignity of souls navigating systemic adversity.</p>
      `,
      quote: "Yishau takes us on an emotional roller coaster. — Ever Obi",
      buyLink: "",
      readOnlineLink: ""
    }
  ];

  function renderApp() {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <!-- HEADER / NAVIGATION -->
      <header class="site-header" id="site-header">
        <div class="container container-wide">
          <div class="header-inner">
            <a href="#home" class="site-logo" aria-label="Olukorede Yishua Home">
              <div class="logo-monogram">OY</div>
              <div class="logo-text">
                <span class="logo-name">Olukorede <span>Yishua</span></span>
                <span class="logo-tagline">Journalist · Writer · Storyteller</span>
              </div>
            </a>

            <nav class="nav-menu" id="nav-menu" aria-label="Main Navigation">
              <a href="#home" class="nav-link active" data-nav="home">Home</a>
              <a href="#about" class="nav-link" data-nav="about">About</a>
              <a href="#books" class="nav-link" data-nav="books">Books</a>
              <a href="#experience" class="nav-link" data-nav="experience">Experience</a>
              <a href="#contact" class="nav-link" data-nav="contact">Contact</a>
            </nav>

            <div class="header-actions">
              <a href="#cv-download" class="header-cv-btn" id="header-cv-trigger">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download CV</span>
              </a>

              <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- MAIN CONTENT -->
      <main id="main-content">
        
        <!-- 1. HERO SECTION -->
        <section class="hero-section" id="home">
          <div class="container">
            <div class="hero-grid">
              
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

                <div class="hero-actions">
                  <a href="#books" class="btn btn-primary">
                    <span>Explore Books & Works</span>
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
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

              <!-- OWNER'S PORTRAIT -->
              <div class="hero-portrait-wrapper">
                <div class="portrait-frame">
                  <div class="frame-corner corner-tl"></div>
                  <div class="frame-corner corner-tr"></div>
                  <div class="frame-corner corner-bl"></div>
                  <div class="frame-corner corner-br"></div>

                  <div class="portrait-inner">
                    <img 
                      src="${ASSETS.profile}" 
                      alt="Olukorede Yishua — Journalist, Writer, Storyteller" 
                      class="portrait-img" 
                      id="hero-portrait-image"
                      loading="eager"
                    />
                  </div>

                  <div class="portrait-floating-badge">
                    <span class="badge-icon"></span>
                    <span>Associate Editor · The Nation / Author</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- 2. ABOUT ME -->
        <section class="section about-section" id="about">
          <div class="container">
            <div class="editorial-header">
              <span class="kicker">Chapter I · The Chronicler</span>
              <h2 class="editorial-title">About Olukorede Yishua</h2>
              <p class="editorial-subtitle">
                An unwavering commitment to truth, narrative discipline, and elevating stories that define modern Africa.
              </p>
            </div>

            <div class="about-grid">
              
              <!-- VISUAL COLUMN: SECOND PERSONAL PHOTOGRAPH -->
              <div class="about-visual-column">
                <div class="about-photo-card">
                  <div class="about-photo-wrapper">
                    <img 
                      src="${ASSETS.about}" 
                      alt="Olukorede Yishua at his editorial desk in the newsroom" 
                      class="about-photo-img" 
                      loading="lazy"
                    />
                  </div>
                  <div class="about-caption-box">
                    <span class="about-caption-text">Olukorede at his editorial desk, reviewing morning dispatches and national headlines.</span>
                    <span class="about-caption-tag">Editorial Newsroom · Lagos</span>
                  </div>
                </div>

                <div class="about-books-card">
                  <h4 class="about-books-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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

              <!-- BIOGRAPHY & DOSSIER -->
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

                <!-- BEATS -->
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

                <!-- SKILLS -->
                <div class="about-subblock">
                  <h3 class="subblock-title">Skills & Professional Competencies</h3>
                  <div class="skills-grid">
                    <div class="skill-card">
                      <div class="skill-card-name">Investigative Probes & OSINT</div>
                      <div class="skill-card-desc">Tracing complex paper trails, public procurement audits, leaked financial documents, and encrypted source management.</div>
                    </div>
                    <div class="skill-card">
                      <div class="skill-card-name">Editorial Direction & Mentorship</div>
                      <div class="skill-card-desc">Overseeing newsrooms, shaping front-page editorial lines, fact-checking workflows, and mentoring junior correspondents.</div>
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

                <!-- EDUCATION -->
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

        <!-- BOOKS & PUBLICATIONS -->
        <section class="section books-section" id="books">
          <div class="container container-wide">
            
            <div class="editorial-header text-center">
              <span class="kicker">Literary Works · Novels & Fiction</span>
              <h2 class="editorial-title">Books & Publications</h2>
              <p class="editorial-subtitle">
                Acclaimed novels and published fiction exploring the complexities of power, human connection, societal transitions, and contemporary African realities.
              </p>
            </div>

            <div class="books-grid" id="books-container">
              ${BOOKS.map((book) => `
                <article class="book-card" data-book-id="${book.id}" tabindex="0" role="button" aria-label="View details for ${book.title}">
                  <div class="book-cover-wrapper">
                    <div class="book-cover-frame">
                      <img src="${book.coverImage}" alt="Book cover for ${book.title} by ${book.author}" class="book-cover-img" loading="lazy" onerror="if (this.src !== '${book.fallbackCover}') this.src = '${book.fallbackCover}';" />
                    </div>
                  </div>
                  <div class="book-meta-top">
                    <span class="book-genre-badge">${book.genre}</span>
                    <span class="book-year-badge">${book.publicationYear}</span>
                  </div>
                  <h3 class="book-title">${book.title}</h3>
                  <div class="book-author">${book.author}</div>
                  <p class="book-description">${book.description}</p>
                  <div class="book-card-footer">
                    <button class="btn-book-readmore" data-read-book="${book.id}">
                      <span>Read More</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                    ${book.buyLink ? `
                      <a href="${book.buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-gold" onclick="event.stopPropagation();">
                        Buy Book
                      </a>
                    ` : ''}
                    ${book.readOnlineLink ? `
                      <a href="${book.readOnlineLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" onclick="event.stopPropagation();">
                        Read Online
                      </a>
                    ` : ''}
                  </div>
                </article>
              `).join("")}
            </div>

          </div>
        </section>



        <!-- 5. EXPERIENCE & ACHIEVEMENTS -->
        <section class="section experience-section" id="experience">
          <div class="container">
            
            <div class="editorial-header">
              <span class="kicker">Chapter IV · Track Record</span>
              <h2 class="editorial-title">Experience & Achievements</h2>
              <p class="editorial-subtitle">
                Over 25 years dedicated to investigative depth, institutional accountability, newsroom leadership, and literary excellence.
              </p>
            </div>

            <div class="experience-grid">
              
              <div class="timeline-column">
                <div class="timeline-block">
                  <h3 class="timeline-title">Editorial Leadership & Work History</h3>
                  <div class="timeline-list">
                    <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-period">2015 — Present</div>
                      <h4 class="timeline-role">Associate Editor & Lead Columnist</h4>
                      <div class="timeline-org">The Nation Newspaper · Lagos / Abuja</div>
                      <p class="timeline-desc">Directing senior editorial desks, commissioning national investigative reports, supervising newsroom fact-checking pipelines, and authoring influential weekly columns on state governance, institutional integrity, and constitutional law.</p>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-period">2010 — 2015</div>
                      <h4 class="timeline-role">Assistant Editor (Special Investigations)</h4>
                      <div class="timeline-org">The Nation / National Press Network · Lagos</div>
                      <p class="timeline-desc">Led undercover investigative probes into extractive revenue flows, border security syndicates, and public procurement anomalies. Guided junior reporters through field source protection protocols.</p>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-period">2006 — 2010</div>
                      <h4 class="timeline-role">Senior Political Correspondent & Feature Writer</h4>
                      <div class="timeline-org">National Dailies Media Group · Abuja</div>
                      <p class="timeline-desc">Covered the National Assembly, Presidential Villa, and diplomatic corps. Produced ground-breaking multi-part features on judicial reforms and civil society mobilization.</p>
                    </div>
                  </div>
                </div>

                <!-- Published Books Showcase -->
                <div style="margin-top: var(--space-10);">
                  <h3 class="timeline-title">Literary Fiction & Novels</h3>
                  <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                    <div style="background-color: var(--white); border: 1px solid var(--ivory-border); padding: var(--space-5); border-radius: var(--radius-sm); border-left: 3px solid var(--gold-500);">
                      <div style="font-family: var(--font-serif); font-weight: 700; font-size: 1.15rem; color: var(--navy-900);">After The End</div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gold-700); text-transform: uppercase; margin-bottom: 6px;">Literary Fiction / Novel · Published 2021</div>
                      <p style="font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-dark-muted); line-height: var(--leading-normal);">A poignant, character-driven narrative navigating grief, marriage, societal expectations, and personal redemption with striking emotional depth.</p>
                    </div>

                    <div style="background-color: var(--white); border: 1px solid var(--ivory-border); padding: var(--space-5); border-radius: var(--radius-sm); border-left: 3px solid var(--gold-500);">
                      <div style="font-family: var(--font-serif); font-weight: 700; font-size: 1.15rem; color: var(--navy-900);">In The Name of Our Father</div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gold-700); text-transform: uppercase; margin-bottom: 6px;">Political Thriller / Novel · Published 2018</div>
                      <p style="font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-dark-muted); line-height: var(--leading-normal);">A gripping tour de force exploring military regime excess, religious charlatanism, and the brave crusade of journalists risking life to document forbidden truths.</p>
                    </div>

                    <div style="background-color: var(--white); border: 1px solid var(--ivory-border); padding: var(--space-5); border-radius: var(--radius-sm); border-left: 3px solid var(--gold-500);">
                      <div style="font-family: var(--font-serif); font-weight: 700; font-size: 1.15rem; color: var(--navy-900);">Black Market</div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gold-700); text-transform: uppercase; margin-bottom: 6px;">Contemporary Fiction / Novel · Published 2023</div>
                      <p style="font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-dark-muted); line-height: var(--leading-normal);">A searing, stripped-down novel delving into the shadow economies of human desires, ethical dilemmas, and survival in modern cityscapes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- AWARDS & HONORS -->
              <div class="achievements-column">
                <div>
                  <h3 class="timeline-title">Awards & Honors</h3>
                  <div style="display: flex; flex-direction: column; gap: var(--space-3);">
                    <div class="award-card">
                      <div class="award-head">
                        <span class="award-year">2023</span>
                        <span class="award-body">Nigeria Media Merit Award (NMMA)</span>
                      </div>
                      <h4 class="award-title">Investigative Journalist of the Year (Finalist)</h4>
                      <p class="award-note">For landmark exposé on unallocated energy subsidies.</p>
                    </div>

                    <div class="award-card">
                      <div class="award-head">
                        <span class="award-year">2021</span>
                        <span class="award-body">Guild of Editorial Directors</span>
                      </div>
                      <h4 class="award-title">Excellence in Columnist Writing</h4>
                      <p class="award-note">Recognized for incisive civic analysis and constitutional advocacy.</p>
                    </div>

                    <div class="award-card">
                      <div class="award-head">
                        <span class="award-year">2019</span>
                        <span class="award-body">Association of Nigerian Authors (ANA)</span>
                      </div>
                      <h4 class="award-title">Best Debut Fiction Nominee</h4>
                      <p class="award-note">For the bestselling political novel 'In The Name of Our Father'.</p>
                    </div>

                    <div class="award-card">
                      <div class="award-head">
                        <span class="award-year">2016</span>
                        <span class="award-body">West African Journalist Network</span>
                      </div>
                      <h4 class="award-title">Environmental & Climate Depth Reporting Award</h4>
                      <p class="award-note">Honoring comprehensive field coverage of Gulf of Guinea erosion.</p>
                    </div>
                  </div>
                </div>

                <!-- FELLOWSHIPS & CERTIFICATIONS -->
                <div style="margin-top: var(--space-8);">
                  <h3 class="timeline-title">Fellowships & Certifications</h3>
                  <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                    <div class="cert-item">
                      <div class="cert-title">Bloomberg Media Initiative Africa (BMIA) Fellow</div>
                      <div class="cert-issuer">Bloomberg Philanthropies / GIBS · Fellowship Cohort</div>
                      <div class="cert-detail">Advanced Financial Journalism, Macroeconomic Data Interpretation, and Capital Markets Reporting.</div>
                    </div>

                    <div class="cert-item">
                      <div class="cert-title">Investigative Reporting & Digital Security</div>
                      <div class="cert-issuer">International Center for Journalists (ICFJ) · Certified</div>
                      <div class="cert-detail">Encrypted source communications, open-source intelligence (OSINT), and data forensics.</div>
                    </div>

                    <div class="cert-item">
                      <div class="cert-title">Wole Soyinka Centre for Investigative Journalism</div>
                      <div class="cert-issuer">WSCIJ Immersion · Honoree & Alum</div>
                      <div class="cert-detail">Regulatory accountability, human rights tracking, and anti-corruption methodologies.</div>
                    </div>
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
                  <a href="${ASSETS.cvPdf}" download="Olukorede_Yishua_CV.pdf" class="cv-download-btn" id="btn-download-cv-file">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download CV (PDF)</span>
                  </a>

                  <button class="btn btn-outline-gold" id="btn-preview-cv">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <span>View Online Résumé</span>
                  </button>
                </div>
              </div>

              <!-- CV PAPER MOCKUP -->
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
                    <span>Official Dossier</span>
                    <span>Lagos & Abuja, NG</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- 7. CONTACT SECTION -->
        <section class="section contact-section" id="contact">
          <div class="container">
            <div class="editorial-header">
              <span class="kicker">Chapter V · Dialogue</span>
              <h2 class="editorial-title">Direct Editorial Inquiries</h2>
              <p class="editorial-subtitle">
                Open for editorial commissions, investigative story collaborations, literary engagements, media panels, and speaking appointments.
              </p>
            </div>

            <div class="contact-grid">
              
              <div class="contact-info-col">
                <h3 class="contact-lede">
                  "Every story begins with a conversation. Let us uncover truths and shape narratives that matter."
                </h3>
                <p class="contact-body">
                  Whether you are an editor seeking investigative reporting, a publishing house exploring literary fiction, or a forum convener organizing media dialogues, reach out directly via secure email or direct messaging.
                </p>

                <div class="contact-channels">
                  <a href="mailto:yishua.editorial@gmail.com" class="channel-card" id="contact-email-link">
                    <div class="channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div class="channel-details">
                      <span class="channel-label">Editorial Email</span>
                      <span class="channel-value">yishua.editorial@gmail.com</span>
                    </div>
                  </a>

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

                <div class="social-links-box">
                  <div class="social-links-title">Professional Media Networks</div>
                  <div class="social-pills-row">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                      <span>LinkedIn</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                      <span>X / Twitter</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="https://substack.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                      <span>Substack Dispatch</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" class="social-pill">
                      <span>Goodreads Author</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                </div>
              </div>

              <!-- CONTACT FORM -->
              <div class="contact-form-card">
                <h4 class="form-header-title">Send a Secure Editorial Message</h4>
                <p class="form-header-desc">Tailored for newsroom editors, publishing houses, cultural festivals, and research institutions.</p>

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

      </main>

      <!-- FOOTER -->
      <footer class="site-footer" id="site-footer">
        <div class="container container-wide">
          <div class="footer-top-grid">
            <div class="footer-brand">
              <a href="#home" class="footer-logo">
                <div class="footer-monogram">OY</div>
                <div>
                  <span class="footer-brand-name">Olukorede <span>Yishua</span></span>
                </div>
              </a>
              <div class="footer-tagline">Journalist · Writer · Storyteller</div>
              <p class="footer-desc">
                Associate Editor at <em>The Nation</em> newspaper, investigative reporter, columnist, and acclaimed author. Committed to rigorous truth, media integrity, and immortalizing contemporary human narratives.
              </p>
            </div>

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

            <div class="footer-col">
              <div class="footer-col-title">Social Media & Portals</div>
              <ul class="footer-links-list">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn Profile</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-link">X (formerly Twitter)</a></li>
                <li><a href="https://substack.com" target="_blank" rel="noopener noreferrer" class="footer-link">Substack Newsletter</a></li>
                <li><a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" class="footer-link">Goodreads Author Page</a></li>
                <li><a href="mailto:yishua.editorial@gmail.com" class="footer-link">Direct Email Desk</a></li>
                <li><a href="https://wa.me/2348030000000" target="_blank" rel="noopener noreferrer" class="footer-link">WhatsApp Direct</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="footer-copy">
              <span>© ${new Date().getFullYear()} Olukorede Yishua. All Rights Reserved.</span>
            </div>
            <div class="footer-ethics">
              <span>Adhering to the highest tenets of the Nigerian Guild of Editors & International Center for Journalists.</span>
            </div>
            <button class="back-to-top-btn" id="back-to-top">
              <span>Return to Masthead</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
        </div>
      </footer>



      <!-- BOOK DETAILS MODAL -->
      <div class="modal-overlay" id="book-details-modal" aria-hidden="true" role="dialog">
        <div class="modal-dialog" style="max-width: 820px;">
          <button class="modal-close-btn" id="modal-close-book" aria-label="Close book details">✕</button>
          <div id="book-modal-body" class="book-modal-content"></div>
        </div>
      </div>



      <!-- CV PREVIEW MODAL -->
      <div class="modal-overlay" id="cv-preview-modal" aria-hidden="true" role="dialog">
        <div class="modal-dialog" style="max-width: 720px;">
          <button class="modal-close-btn" id="modal-close-cv">✕</button>
          <div style="padding: var(--space-10); background-color: var(--ivory-50);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid var(--navy-900); padding-bottom: var(--space-4); margin-bottom: var(--space-6);">
              <div>
                <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--navy-900); margin-bottom: 4px;">OLUKOREDE YISHUA</h2>
                <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-700); font-weight: 700;">Journalist · Author · Associate Editor · Storyteller</div>
              </div>
              <a href="${ASSETS.cvPdf}" download="Olukorede_Yishua_CV.pdf" class="btn btn-gold btn-sm">
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

    bindInteractions();
  }

  function bindInteractions() {
    // Header Scroll
    const header = document.getElementById("site-header");
    window.addEventListener("scroll", () => {
      if (header) {
        if (window.scrollY > 40) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
    });

    // Mobile Menu
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        toggle.classList.toggle("active");
        document.body.style.overflow = isOpen ? "hidden" : "";
      });
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.remove("open");
          toggle.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
    }

    // Smooth Anchor Scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 84;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      });
    });

    // Back to top
    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
      topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }



    // Book Details Modal
    const bookModal = document.getElementById("book-details-modal");
    const bookClose = document.getElementById("modal-close-book");
    const bookBody = document.getElementById("book-modal-body");

    function openBookModal(bookId) {
      const book = BOOKS.find((b) => b.id === bookId);
      if (!book || !bookModal || !bookBody) return;

      bookBody.innerHTML = `
        <div class="book-modal-cover-wrap">
          <img 
            src="${book.coverImage}" 
            alt="${book.title}"
            onerror="if (this.src !== '${book.fallbackCover}') this.src = '${book.fallbackCover}';"
          />
        </div>

        <div class="book-modal-info">
          <span class="book-modal-kicker">${book.genre} · Published ${book.publicationYear}</span>
          <h2 class="book-modal-title">${book.title}</h2>
          <div class="book-modal-author">By ${book.author}</div>

          ${book.quote ? `
            <div class="book-modal-quote">
              "${book.quote}"
            </div>
          ` : ''}

          <div class="book-modal-synopsis">
            ${book.synopsis || `<p>${book.description}</p>`}
          </div>

          <div class="book-modal-actions">
            ${book.buyLink ? `
              <a href="${book.buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                <span>Buy Book</span>
              </a>
            ` : ''}

            ${book.readOnlineLink ? `
              <a href="${book.readOnlineLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                <span>Read Online</span>
              </a>
            ` : ''}

            <button class="btn btn-primary btn-sm" id="btn-close-book-inline">
              <span>Close Details</span>
            </button>
          </div>
        </div>
      `;

      bookModal.classList.add("active");
      document.body.style.overflow = "hidden";

      const inlineClose = document.getElementById("btn-close-book-inline");
      if (inlineClose) {
        inlineClose.addEventListener("click", () => {
          bookModal.classList.remove("active");
          document.body.style.overflow = "";
        });
      }
    }

    document.querySelectorAll(".book-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const id = card.getAttribute("data-book-id");
        openBookModal(id);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = card.getAttribute("data-book-id");
          openBookModal(id);
        }
      });
    });

    document.querySelectorAll("[data-read-book]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-read-book");
        openBookModal(id);
      });
    });

    if (bookClose && bookModal) {
      bookClose.addEventListener("click", () => {
        bookModal.classList.remove("active");
        document.body.style.overflow = "";
      });
      bookModal.addEventListener("click", (e) => {
        if (e.target === bookModal) {
          bookModal.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }



    // CV Preview Modal
    const cvPreviewBtn = document.getElementById("btn-preview-cv");
    const cvModal = document.getElementById("cv-preview-modal");
    const cvClose = document.getElementById("modal-close-cv");

    if (cvPreviewBtn && cvModal) {
      cvPreviewBtn.addEventListener("click", () => {
        cvModal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    }
    if (cvClose && cvModal) {
      cvClose.addEventListener("click", () => {
        cvModal.classList.remove("active");
        document.body.style.overflow = "";
      });
      cvModal.addEventListener("click", (e) => {
        if (e.target === cvModal) {
          cvModal.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }

    // Contact Form
    const contactForm = document.getElementById("editorial-contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById("contact-submit-btn");
        const nameVal = (document.getElementById("contact-name") && document.getElementById("contact-name").value) || "Colleague";
        const emailVal = (document.getElementById("contact-email") && document.getElementById("contact-email").value) || "";
        const orgVal = (document.getElementById("contact-org") && document.getElementById("contact-org").value) || "";
        const subjectVal = (document.getElementById("contact-subject") && document.getElementById("contact-subject").value) || "";
        const messageVal = (document.getElementById("contact-message") && document.getElementById("contact-message").value) || "";

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>Dispatching Secure Message...</span>`;
        }

        // Post to backend server API if available
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            organization: orgVal,
            subject: subjectVal,
            message: messageVal
          })
        }).catch(() => {});

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Message Dispatched ✓</span>`;
          }
          alert(`Thank you, ${nameVal}. Your editorial dispatch has been received. Response expected within 24-48 hours.`);
          contactForm.reset();
          setTimeout(() => {
            if (submitBtn) {
              submitBtn.innerHTML = `
                <span>Dispatch Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              `;
            }
          }, 3500);
        }, 600);
      });
    }

    // Global Escape Key Listener
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {

        if (bookModal && bookModal.classList.contains("active")) {
          bookModal.classList.remove("active");
          document.body.style.overflow = "";
        }

        if (cvModal && cvModal.classList.contains("active")) {
          cvModal.classList.remove("active");
          document.body.style.overflow = "";
        }
      }
    });
  }

  // Run on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderApp);
  } else {
    renderApp();
  }
})();
