/**
 * Stories Component
 * 3. SELECTED JOURNALISM WORK
 * News Reports | Investigative Stories | Features | Opinion & Analysis
 * Each article includes a headline, cover image, date, summary, publication name, and link to the full story.
 */

import { ARTICLES, CATEGORIES } from "../../data/articles.js";
import { renderArticleCard } from "../../components/ArticleCard/ArticleCard.js";

export function renderStories() {
  const tabsHtml = CATEGORIES.map((cat, idx) => `
    <button 
      class="filter-tab ${idx === 0 ? 'active' : ''}" 
      data-filter="${cat.id}"
      id="filter-${cat.id}"
    >
      ${cat.label}
    </button>
  `).join("");

  const cardsHtml = ARTICLES.map((article) => renderArticleCard(article)).join("");

  return `
    <section class="section stories-section" id="stories">
      <div class="container container-wide">
        
        <!-- SECTION HEADER -->
        <div class="editorial-header text-center">
          <span class="kicker">Chapter II · The Dispatches</span>
          <h2 class="editorial-title">Selected Journalism Work</h2>
          <p class="editorial-subtitle">
            Forensic investigations, breaking dispatches, longform narratives, and analytical commentaries published across leading national dailies and regional journals.
          </p>
        </div>

        <!-- CATEGORY FILTER TABS -->
        <div class="stories-filter-bar" role="tablist" aria-label="Article categories">
          ${tabsHtml}
        </div>

        <!-- ARTICLES GRID -->
        <div class="articles-grid" id="articles-container">
          ${cardsHtml}
        </div>

      </div>
    </section>

    <!-- ARTICLE READER MODAL -->
    <div class="modal-overlay" id="article-reader-modal" aria-hidden="true" role="dialog">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="modal-close-reader" aria-label="Close story reader">✕</button>
        <div id="reader-modal-body" class="reader-modal-content">
          <!-- Populated dynamically via JS -->
        </div>
      </div>
    </div>
  `;
}

export function initStories() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const articleCards = document.querySelectorAll(".article-card");
  const modal = document.getElementById("article-reader-modal");
  const modalClose = document.getElementById("modal-close-reader");
  const modalBody = document.getElementById("reader-modal-body");

  // Filter tabs handling
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");

      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      articleCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.3s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Story Reader Modal trigger
  document.querySelectorAll("[data-read-article]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const articleId = btn.getAttribute("data-read-article");
      const article = ARTICLES.find((a) => a.id === articleId);
      if (!article || !modal || !modalBody) return;

      modalBody.innerHTML = `
        <span class="reader-category">${article.categoryLabel} · ${article.publication}</span>
        <h2 class="reader-headline">${article.headline}</h2>
        
        <div class="reader-meta-bar">
          <span class="reader-meta-item">Published: <strong>${article.date}</strong></span>
          <span class="reader-meta-item">Byline: <strong>Olukorede Yishua</strong></span>
          <span class="reader-meta-item">Reading Time: <strong>${article.readTime}</strong></span>
        </div>

        <div class="reader-image-wrap">
          <img 
            src="${article.coverImage}" 
            alt="${article.headline}"
            onerror="if (this.src !== '${article.fallbackImage}') this.src = '${article.fallbackImage}';"
          />
        </div>

        <div class="reader-body-copy">
          ${article.fullStory}
        </div>

        ${article.impact ? `
          <div class="reader-impact-box">
            <h5>Civic & Policy Impact</h5>
            <p>${article.impact}</p>
          </div>
        ` : ''}

        <div style="margin-top: var(--space-8); display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--ivory-border); padding-top: var(--space-4);">
          <span style="font-size: var(--text-xs); color: var(--text-dark-subtle);">Archived Dispatch · The Nation & Syndicated Media</span>
          <button class="btn btn-primary btn-sm" onclick="document.getElementById('article-reader-modal').classList.remove('active'); document.body.style.overflow = '';">
            Close Story
          </button>
        </div>
      `;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal
  if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}
