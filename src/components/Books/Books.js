/**
 * Books Component
 * Section: Books & Publications
 * Displays exactly three books with clickable cards, "Read More" modals, and optional action buttons.
 */

import { BOOKS } from "../../data/books.js";

export function renderBooks() {
  const booksHtml = BOOKS.map((book) => `
    <article class="book-card" data-book-id="${book.id}" tabindex="0" role="button" aria-label="View details for ${book.title}">
      
      <!-- Book Cover -->
      <div class="book-cover-wrapper">
        <div class="book-cover-frame">
          <img 
            src="${book.coverImage}" 
            alt="Book cover for ${book.title} by ${book.author}" 
            class="book-cover-img"
            loading="lazy"
            onerror="if (this.src !== '${book.fallbackCover}') this.src = '${book.fallbackCover}';"
          />
        </div>
      </div>

      <!-- Book Information -->
      <div class="book-meta-top">
        <span class="book-genre-badge">${book.genre}</span>
        <span class="book-year-badge">${book.publicationYear}</span>
      </div>

      <h3 class="book-title">${book.title}</h3>
      <div class="book-author">${book.author}</div>

      <p class="book-description">${book.description}</p>

      <!-- Card Action -->
      <div class="book-card-footer">
        <button class="btn-book-readmore" data-read-book="${book.id}" aria-label="Read more about ${book.title}">
          <span>Read More</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
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
  `).join("");

  return `
    <section class="section books-section" id="books">
      <div class="container container-wide">
        
        <!-- SECTION HEADER -->
        <div class="editorial-header text-center">
          <span class="kicker">Literary Works · Novels & Fiction</span>
          <h2 class="editorial-title">Books & Publications</h2>
          <p class="editorial-subtitle">
            Acclaimed novels and published fiction exploring the complexities of power, human connection, societal transitions, and contemporary African realities.
          </p>
        </div>

        <!-- THREE BOOKS GRID -->
        <div class="books-grid" id="books-container">
          ${booksHtml}
        </div>

      </div>
    </section>

    <!-- DEDICATED BOOK DETAILS MODAL -->
    <div class="modal-overlay" id="book-details-modal" aria-hidden="true" role="dialog">
      <div class="modal-dialog" style="max-width: 820px;">
        <button class="modal-close-btn" id="modal-close-book" aria-label="Close book details">✕</button>
        <div id="book-modal-body" class="book-modal-content">
          <!-- Populated dynamically via JS -->
        </div>
      </div>
    </div>
  `;
}

export function initBooks() {
  const modal = document.getElementById("book-details-modal");
  const modalClose = document.getElementById("modal-close-book");
  const modalBody = document.getElementById("book-modal-body");

  function openBookModal(bookId) {
    const book = BOOKS.find((b) => b.id === bookId);
    if (!book || !modal || !modalBody) return;

    modalBody.innerHTML = `
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

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    const inlineClose = document.getElementById("btn-close-book-inline");
    if (inlineClose) {
      inlineClose.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      });
    }
  }

  // Handle card click and "Read More" button click
  document.querySelectorAll(".book-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      // Don't trigger if clicked on an actual link
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

  // Close modal handlers
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
