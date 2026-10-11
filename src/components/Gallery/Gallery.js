/**
 * Gallery Component
 * 4. PHOTOJOURNALISM GALLERY
 * Portraits, field reporting, interviews, media events, and behind-the-scenes photographs.
 * Filter categories: REPORTING | INTERVIEWS | EVENTS
 */

import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "../../data/gallery.js";

export function renderGallery() {
  const tabsHtml = GALLERY_CATEGORIES.map((cat, idx) => `
    <button 
      class="gallery-tab ${idx === 0 ? 'active' : ''}" 
      data-gallery-filter="${cat.id}"
      id="gallery-tab-${cat.id}"
    >
      ${cat.label}
    </button>
  `).join("");

  const itemsHtml = GALLERY_ITEMS.map((item, idx) => `
    <div 
      class="gallery-item ${idx === 0 || idx === 3 ? 'featured' : ''}" 
      data-category="${item.category}" 
      data-index="${idx}"
      role="button"
      tabindex="0"
      aria-label="View photo: ${item.title}"
    >
      <img 
        src="${item.image}" 
        alt="${item.title}" 
        class="gallery-img"
        loading="lazy"
        onerror="if (this.src !== '${item.fallbackImage}') this.src = '${item.fallbackImage}';"
      />
      <div class="gallery-overlay">
        <span class="gallery-badge">${item.categoryLabel}</span>
        <h4 class="gallery-title">${item.title}</h4>
        <span class="gallery-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${item.location} · ${item.year}
        </span>
      </div>
    </div>
  `).join("");

  return `
    <section class="section gallery-section" id="gallery">
      <div class="container container-wide">
        
        <!-- SECTION HEADER -->
        <div class="editorial-header text-center">
          <span class="kicker">Chapter III · The Visual Lens</span>
          <h2 class="editorial-title" style="color: var(--white);">Photojournalism Gallery</h2>
          <p class="editorial-subtitle" style="color: var(--text-light-muted);">
            Portraits, field investigations, broadcast interviews, and candid newsroom chronicles from over a decade of reporting.
          </p>
        </div>

        <!-- CATEGORY TABS -->
        <div class="gallery-filter-bar" role="tablist">
          ${tabsHtml}
        </div>

        <!-- GALLERY GRID -->
        <div class="gallery-grid" id="gallery-container">
          ${itemsHtml}
        </div>

      </div>
    </section>

    <!-- LIGHTBOX MODAL -->
    <div class="lightbox-modal" id="gallery-lightbox" aria-hidden="true">
      <button class="lightbox-close-btn" id="lightbox-close" aria-label="Close Lightbox">✕</button>
      <button class="lightbox-nav-btn lightbox-prev" id="lightbox-prev" aria-label="Previous photograph">‹</button>
      <button class="lightbox-nav-btn lightbox-next" id="lightbox-next" aria-label="Next photograph">›</button>

      <div class="lightbox-content">
        <div class="lightbox-media" id="lightbox-media">
          <img id="lightbox-img" src="" alt="" />
        </div>
        <div class="lightbox-caption-area">
          <span class="lightbox-category-tag" id="lightbox-tag"></span>
          <h3 class="lightbox-caption-title" id="lightbox-title"></h3>
          <p class="lightbox-caption-text" id="lightbox-caption"></p>
          <div class="lightbox-meta-foot">
            <span id="lightbox-location"></span>
            <span id="lightbox-credit"></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initGallery() {
  const tabs = document.querySelectorAll("[data-gallery-filter]");
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("gallery-lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  const lbImg = document.getElementById("lightbox-img");
  const lbTag = document.getElementById("lightbox-tag");
  const lbTitle = document.getElementById("lightbox-title");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbLoc = document.getElementById("lightbox-location");
  const lbCredit = document.getElementById("lightbox-credit");

  let currentIndex = 0;
  let activeFilteredList = [...GALLERY_ITEMS];

  // Tab Filtering
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-gallery-filter");

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      items.forEach((item) => {
        const cat = item.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      if (filter === "all") {
        activeFilteredList = [...GALLERY_ITEMS];
      } else {
        activeFilteredList = GALLERY_ITEMS.filter((g) => g.category === filter);
      }
    });
  });

  function updateLightbox(index) {
    if (!activeFilteredList[index]) return;
    currentIndex = index;
    const item = activeFilteredList[index];

    lbImg.src = item.image;
    lbImg.onerror = () => {
      if (lbImg.src !== item.fallbackImage) {
        lbImg.src = item.fallbackImage;
      }
    };
    lbImg.alt = item.title;
    lbTag.textContent = `${item.categoryLabel} · ${item.year}`;
    lbTitle.textContent = item.title;
    lbCaption.textContent = item.caption;
    lbLoc.textContent = `📍 ${item.location}`;
    lbCredit.textContent = `📷 ${item.credit}`;
  }

  // Click on gallery card
  items.forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      const clickedItem = GALLERY_ITEMS[idx];
      const filteredIdx = activeFilteredList.findIndex((it) => it.id === clickedItem.id);
      updateLightbox(filteredIdx >= 0 ? filteredIdx : 0);

      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Lightbox Navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      let nextIdx = currentIndex - 1;
      if (nextIdx < 0) nextIdx = activeFilteredList.length - 1;
      updateLightbox(nextIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      let nextIdx = currentIndex + 1;
      if (nextIdx >= activeFilteredList.length) nextIdx = 0;
      updateLightbox(nextIdx);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      } else if (e.key === "ArrowLeft") {
        let nextIdx = currentIndex - 1;
        if (nextIdx < 0) nextIdx = activeFilteredList.length - 1;
        updateLightbox(nextIdx);
      } else if (e.key === "ArrowRight") {
        let nextIdx = currentIndex + 1;
        if (nextIdx >= activeFilteredList.length) nextIdx = 0;
        updateLightbox(nextIdx);
      }
    });
  }
}
