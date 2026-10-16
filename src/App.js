/**
 * OLUKOREDE YISHAU — Portfolio Application Root
 * Exact section order:
 * HEADER / NAVIGATION
 * 1. HERO SECTION
 * 2. ABOUT ME
 * 3. SELECTED JOURNALISM WORK
 * 4. PHOTOJOURNALISM GALLERY
 * 5. EXPERIENCE & ACHIEVEMENTS
 * 6. DOWNLOAD MY CV
 * 7. CONTACT SECTION
 * FOOTER
 */

import { renderHeader, initHeader } from "./components/Header/Header.js";
import { renderHomePage, initCV, initBooks } from "./pages/Home/Home.js";
import { initContact } from "./pages/Contact/Contact.js";
import { renderFooter, initFooter } from "./components/Footer/Footer.js";

export function initApp() {
  const root = document.getElementById("app");
  if (!root) return;

  // Render complete document structure
  root.innerHTML = `
    <!-- HEADER / NAVIGATION -->
    ${renderHeader()}

    <!-- MAIN EDITORIAL CONTENT -->
    <main id="main-content">
      ${renderHomePage()}
    </main>

    <!-- FOOTER -->
    ${renderFooter()}
  `;

  // Initialize interactive behaviors
  initHeader();
  initBooks();
  initCV();
  initContact();
  initFooter();

  // Handle smooth scroll clicks with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  console.log("Olukorede Yishau Editorial Portfolio initialized successfully.");
}

// Auto mount on DOM load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
