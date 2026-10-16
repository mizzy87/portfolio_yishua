/**
 * OLUKOREDE YISHAU — Selected Journalism Work Data
 * Categories: News Reports | Investigative Stories | Features | Opinion & Analysis
 */

export const ARTICLES = [
  {
    id: "investigative-01",
    category: "investigative",
    categoryLabel: "Investigative Story",
    headline: "Shadows Over the Sovereign Wealth: Unmasking Ghost Subsidies in National Energy Contracts",
    date: "October 14, 2025",
    publication: "The Nation Newspaper",
    readTime: "9 min read",
    coverImage: "public/images/reporting-01.jpg",
    fallbackImage: "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/reporting_investigation_1791703166294.jpg",
    summary: "A nine-month cross-border investigation tracing undocumented petroleum subsidy payments through shell holding firms, uncovering systemic fiscal leakages of over $420M and sparking legislative oversight committee hearings.",
    excerpt: "When the ledger lines failed to balance by nearly half a billion dollars, official records pointed toward maritime logistics companies registered in jurisdictions with zero vessels. What followed was a paper trail across three continents.",
    fullStory: `
      <p class="article-lead">When the ledger lines failed to balance by nearly half a billion dollars, official records pointed toward maritime logistics companies registered in jurisdictions with zero vessels. What followed was an arduous paper trail spanning three continents, dozens of whistleblowers, and dozens of heavily redacted customs manifests.</p>
      
      <p>Over nine months of meticulous cross-verification, our investigation scrutinized hundreds of shipment invoices, banking routing transmittals, and port docking logs across West Africa's primary terminals. The discrepancy was staggering: subsidies were continually claimed for mega-tankers whose satellite AIS beacons confirmed they had never crossed the Gulf of Guinea during the billing periods in question.</p>
      
      <blockquote class="pull-quote">"The invoices were stamped with official seals within forty-eight hours of submission, bypassing every biometric compliance checkpoint established under the fiscal reform acts."</blockquote>
      
      <p>Interviews with seasoned auditors and former ministry insiders revealed a well-coordinated apparatus. Payments were disbursed to intermediary entities operating out of shared virtual office addresses, only to be routed into secondary asset holding firms within hours of receipt.</p>
      
      <p>Following publication of this findings matrix, the Federal House of Representatives summoned the executive leadership of the Petroleum Regulatory Authority, prompting an independent forensic audit and the immediate freezing of nineteen contested vendor bank accounts.</p>
    `,
    impact: "Summoned Federal House Oversight Hearing & froze $75M in dubious accounts.",
    link: "#"
  },
  {
    id: "opinion-01",
    category: "opinion",
    categoryLabel: "Opinion & Analysis",
    headline: "The Anatomy of Public Trust: Why Democratic Institutions Cannot Survive On Rhetoric Alone",
    date: "August 28, 2025",
    publication: "The Nation Column: In Touch",
    readTime: "6 min read",
    coverImage: "public/images/reporting-04.jpg",
    fallbackImage: "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/reporting_summit_1791703274261.jpg",
    summary: "An incisive philosophical critique dissecting the growing chasm between political pronouncements and institutional integrity, calling for structural accountability beyond election cycles.",
    excerpt: "Democracy is not merely the ritualistic casting of ballots every four years; it is the daily, grinding commitment to transparency that survives even when the cameras are turned away.",
    fullStory: `
      <p class="article-lead">Democracy is not merely the ritualistic casting of ballots every four years; it is the daily, grinding commitment to institutional transparency that survives even when the television lights are turned off and the press corps has moved to the next trending controversy.</p>

      <p>Across developing democracies, a perilous pattern has metastasized: the conflation of media releases with substantive governance. State administrators spend greater capital staging ceremonial policy unveilings than building the institutional plumbing required to implement basic public services.</p>

      <blockquote class="pull-quote">"A society where the citizen views the state not as a guarantor of equity, but as an adversary to be negotiated with, has already conceded the moral foundation of constitutional governance."</blockquote>

      <p>To restore faith in the democratic compact, we must abandon cosmetic governance. The legislature must regain its bite, judicial independence must be shielded from executive patronage, and public auditing bodies must be empowered to publish unexpurgated reports without seeking executive permission.</p>
    `,
    impact: "Syndicated across 14 regional publications and quoted in university constitutional law lectures.",
    link: "#"
  },
  {
    id: "news-01",
    category: "news",
    categoryLabel: "News Reports",
    headline: "Electoral Reform Bill Passes Critical Reading Amid Fierce Floor Debates on Real-Time Transmission",
    date: "July 12, 2025",
    publication: "National Bureau Reports",
    readTime: "5 min read",
    coverImage: "public/images/reporting-02.jpg",
    fallbackImage: "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/reporting_interview_1791703222400.jpg",
    summary: "Breaking coverage from the National Assembly as lawmakers vote on mandatory electronic transmission of polling booth tallies following weeks of civic mobilization.",
    excerpt: "After eight hours of intense parliamentary wrangling and three voice votes, legislators adopted Clause 52, cementing automated polling tabulation into the electoral code.",
    fullStory: `
      <p class="article-lead">After eight hours of intense parliamentary wrangling, point-of-order counterarguments, and three divisive voice votes, the Senate passed the landmark Electoral Amendment Act, enshrining real-time electronic transmission of polling unit results.</p>

      <p>The gallery was packed with civic activists, diplomatic observers, and party agents as the session extended well into the evening. Proponents argued that paper-only collation had historically formed the Achilles' heel of electoral credibility, leaving room for ballot box substitution in remote collation hubs.</p>

      <p>The revised statute stipulates severe criminal penalties—including mandatory five-year custodial sentences without option of fine—for returning officers who deliberately bypass biometric accreditation devices.</p>
    `,
    impact: "Front-page lead story providing minute-by-minute breakdown of parliamentary voting record.",
    link: "#"
  },
  {
    id: "features-01",
    category: "features",
    categoryLabel: "Features",
    headline: "The Vanishing Coastline: How Rising Waters and Sand Mining Are Reshaping Coastal Heritage",
    date: "May 19, 2025",
    publication: "African Voices Quarterly",
    readTime: "11 min read",
    coverImage: "public/images/reporting-03.jpg",
    fallbackImage: "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/reporting_climate_1791703252136.jpg",
    summary: "A human-centered narrative feature documenting the resilience of artisanal fishing communities in the Niger Delta fighting both encroaching Atlantic tides and unregulated industrial dredging.",
    excerpt: "For five generations, the elders of Ilaje could measure the seasons by the color of the foam at dawn. Today, the cemetery where their ancestors lie rests two hundred meters beneath the Atlantic surf.",
    fullStory: `
      <p class="article-lead">For five generations, the elders of Ilaje could measure the arrival of the seasons by the color of the foam at dawn and the migration of the silver bonga fish. Today, the sacred cemetery where their great-grandparents lie rests two hundred meters beneath the relentless Atlantic surf.</p>

      <p>This is not a future projection of climate catastrophe; it is the immediate, visceral reality confronting tens of thousands along the Gulf of Guinea. As commercial dredging vessels vacuum millions of metric tons of estuary sand for upscale urban reclamation developments, the protective barrier islands are systematically dissolving.</p>

      <blockquote class="pull-quote">"We do not fear hard work or rough waves," said Chief Omotayo, gesturing toward a half-submerged wooden stilt church. "We fear that by the time our grandchildren are born, the land our fathers named will only exist in memory."</blockquote>

      <p>Through intimate portraits of women fish smokers, community boatmen, and marine biologists, this feature explores what is salvaged when ancestral geography disappears beneath rising tides.</p>
    `,
    impact: "Won Special Commendation for Environmental Journalism at the Regional Media Awards.",
    link: "#"
  },
  {
    id: "investigative-02",
    category: "investigative",
    categoryLabel: "Investigative Story",
    headline: "Contracts in the Dark: The Unfinished Hospitals of the Primary Healthcare Fund",
    date: "March 02, 2025",
    publication: "The Nation Special Projects",
    readTime: "10 min read",
    coverImage: "public/images/reporting-01.jpg",
    fallbackImage: "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/reporting_investigation_1791703166294.jpg",
    summary: "A field audit of 42 budgeted primary healthcare centers across six states, uncovering millions paid for state-of-the-art clinics that were left abandoned as empty concrete shells.",
    excerpt: "The budgetary appropriation sheet claimed the maternal ward was fully equipped and operational. On site, wild goats grazed between unroofed cinderblock walls.",
    fullStory: `
      <p class="article-lead">On paper, Budget Line 402/2023 was a triumph of rural healthcare expansion: forty-two modern primary care clinics equipped with cold-chain solar vaccine freezers, maternity wards, and staff quarters across rural agricultural corridors.</p>

      <p>Our four-week ground tour through six states told an entirely different story. Twenty-eight of the designated clinics were nothing more than overgrown cinderblock foundations. At fourteen other sites, structures stood roofed but locked, void of medical personnel, running water, or electricity.</p>

      <p>Contract documents obtained through Freedom of Information (FOI) requests demonstrated that 85% of total project allocations had been disbursed as mobilization fees to entities whose registered directors had close familial ties to civil service procurement officers.</p>
    `,
    impact: "Forced the Ministry of Health to recommence construction at 16 abandoned clinics.",
    link: "#"
  },
  {
    id: "opinion-02",
    category: "opinion",
    categoryLabel: "Opinion & Analysis",
    headline: "The Power of the Written Word in an Era of Instant Digital Amnesia",
    date: "January 18, 2025",
    publication: "Literary Horizon Review",
    readTime: "7 min read",
    coverImage: "public/images/about.jpg",
    fallbackImage: "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb/about_author_1791703147817.jpg",
    summary: "Reflections on literature, novel writing, and narrative journalism as essential bulwarks against historical revisionism and algorithmic attention scarcity.",
    excerpt: "When the algorithm demands outrage in thirty-second intervals, the novelist and the depth journalist share a sacred duty: to slow down time and preserve the nuance of human suffering.",
    fullStory: `
      <p class="article-lead">When algorithmic feeds demand manufactured outrage delivered in thirty-second intervals, the novelist and the investigative storyteller share a singular sacred duty: to slow down time, defend memory, and preserve the complex nuance of human truth.</p>

      <p>Literature has never been a passive ornament of leisure; in societies negotiating trauma, post-colonial transitions, and political volatility, fiction is often the only safe vault where forbidden histories can be spoken aloud without fear of state reprisal.</p>

      <blockquote class="pull-quote">"A nation that does not read its own writers will inevitably end up accepting whatever caricature the powerful choose to author on its behalf."</blockquote>

      <p>As storytellers, our task is not to offer facile comforting platitudes, but to interrogate the shadows—to open the vaults of secrets and compel society to look steadily into the mirror of its choices.</p>
    `,
    impact: "Adapted as the keynote address for the West African Writers Congress.",
    link: "#"
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "news", label: "News Reports" },
  { id: "investigative", label: "Investigative Stories" },
  { id: "features", label: "Features" },
  { id: "opinion", label: "Opinion & Analysis" }
];
