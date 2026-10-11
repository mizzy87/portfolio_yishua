/**
 * ArticleCard Component
 * Each article includes a headline, cover image, date, summary, publication name, and link to the full story.
 */

export function renderArticleCard(article) {
  return `
    <article class="article-card" data-category="${article.category}" data-id="${article.id}">
      <div class="article-media">
        <img 
          src="${article.coverImage}" 
          alt="${article.headline}" 
          class="article-img"
          loading="lazy"
          onerror="if (this.src !== '${article.fallbackImage}') this.src = '${article.fallbackImage}';"
        />
        <span class="article-category-badge">${article.categoryLabel}</span>
      </div>

      <div class="article-body">
        <div class="article-meta-row">
          <span class="article-publication">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
              <path d="M18 14h-8"></path>
              <path d="M15 18h-5"></path>
              <path d="M10 6h8v4h-8V6Z"></path>
            </svg>
            ${article.publication}
          </span>
          <span class="article-date">${article.date}</span>
        </div>

        <h3 class="article-headline">${article.headline}</h3>

        <p class="article-summary">${article.summary}</p>

        ${article.impact ? `<div class="article-impact-pill"><strong>Impact:</strong> ${article.impact}</div>` : ''}

        <div class="article-footer">
          <button class="btn-read-modal" data-read-article="${article.id}" aria-label="Read full report: ${article.headline}">
            <span>Read Full Story</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <span class="article-read-time">${article.readTime}</span>
        </div>
      </div>
    </article>
  `;
}
