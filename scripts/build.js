/**
 * OLUKOREDE YISHUA — Production Build System
 * Pure Node.js (zero external dependencies required).
 *
 * Usage:
 *   node scripts/build.js
 *   npm run build
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyAssets } from "./copy-assets.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const ASSETS_DIR = path.join(DIST_DIR, "assets");
const ROOT_ASSETS_DIR = path.join(ROOT_DIR, "assets");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const DIST_PUBLIC_DIR = path.join(DIST_DIR, "public");

export function runBuild() {
  console.log("=================================================");
  console.log("  BUILDING OLUKOREDE YISHUA EDITORIAL PORTFOLIO  ");
  console.log("=================================================");

  // 1. Ensure source assets are synchronized
  console.log("▸ Synchronizing source media assets...");
  try {
    const copied = copyAssets();
    console.log(`  ✓ Synced ${copied} media assets into public/images/`);
  } catch (err) {
    console.warn("  ⚠ Asset sync note:", err.message);
  }

  // 2. Prepare dist/ directory
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
  fs.mkdirSync(DIST_PUBLIC_DIR, { recursive: true });

  // 3. Bundle & minify CSS
  console.log("▸ Bundling stylesheets...");
  const cssOrder = [
    "src/styles/variables.css",
    "src/styles/reset.css",
    "src/styles/main.css",
    "src/components/Header/Header.css",
    "src/components/Hero/Hero.css",
    "src/pages/About/About.css",
    "src/components/Books/Books.css",
    "src/pages/Home/Home.css",
    "src/pages/Contact/Contact.css",
    "src/components/Footer/Footer.css"
  ];

  let bundledCss = "/* Olukorede Yishua Editorial Portfolio — Stylesheet Bundle */\n\n";
  for (const relPath of cssOrder) {
    const absPath = path.join(ROOT_DIR, relPath);
    if (fs.existsSync(absPath)) {
      let cssContent = fs.readFileSync(absPath, "utf8");
      // Remove local @import statements to prevent duplicate or relative path resolution errors
      cssContent = cssContent.replace(/@import\s+['"][^'"]+['"];?\s*/g, "");
      bundledCss += `/* --- ${relPath} --- */\n` + cssContent + "\n\n";
    }
  }

  if (!fs.existsSync(ROOT_ASSETS_DIR)) {
    fs.mkdirSync(ROOT_ASSETS_DIR, { recursive: true });
  }

  const distCssPath = path.join(ASSETS_DIR, "styles.bundle.css");
  const rootCssPath = path.join(ROOT_ASSETS_DIR, "styles.bundle.css");
  fs.writeFileSync(distCssPath, bundledCss, "utf8");
  fs.writeFileSync(rootCssPath, bundledCss, "utf8");
  console.log(`  ✓ Created dist/assets/styles.bundle.css & assets/styles.bundle.css (${(bundledCss.length / 1024).toFixed(1)} KB)`);

  // 4. Copy public/ directory to dist/public/
  console.log("▸ Copying public files and documents...");
  function copyDirRecursive(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDirRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  if (fs.existsSync(PUBLIC_DIR)) {
    copyDirRecursive(PUBLIC_DIR, DIST_PUBLIC_DIR);
    copyDirRecursive(PUBLIC_DIR, DIST_DIR);
    console.log("  ✓ Cloned public/ into dist/public/ and dist/");
  }

  // 5. Bundle Application Script for dist
  console.log("▸ Bundling JavaScript application...");
  const srcBundlePath = path.join(ROOT_DIR, "src", "bundle.js");
  let scriptContent = fs.readFileSync(srcBundlePath, "utf8");

  // In production dist, inject smart path detection for direct file:/// and HTTP environments
  scriptContent = scriptContent.replace(
    /const BRAIN_BASE = [^;]+;/,
    `const isDirectFile = window.location.protocol === "file:";
  const inDistDir = window.location.pathname.includes("/dist/") || window.location.href.includes("/dist/");
  const prefix = inDistDir && isDirectFile ? "../" : "";
  const brainPrefix = inDistDir && isDirectFile ? "../../" : "../";
  const BRAIN_BASE = \`\${brainPrefix}.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb\`;`
  );

  scriptContent = scriptContent.replace(
    /profile:\s*`\${BRAIN_BASE}\/\.user_uploaded\/media_1791705352682\.jpg`,/g,
    'profile: `${prefix}public/images/profile.jpg`,'
  );
  scriptContent = scriptContent.replace(
    /about:\s*`\${BRAIN_BASE}\/\.user_uploaded\/media_1791710376446\.jpg`,/g,
    'about: `${prefix}public/images/about.jpg`,'
  );
  scriptContent = scriptContent.replace(
    /cvPdf:\s*"public\/documents\/cv\.pdf",/g,
    'cvPdf: `${prefix}public/documents/cv.pdf`,'
  );
  scriptContent = scriptContent.replace(
    /book1:\s*`\${BRAIN_BASE}\/\.user_uploaded\/media_1791707184082\.png`,/g,
    'book1: `${prefix}public/images/books/after-the-end.png`,'
  );
  scriptContent = scriptContent.replace(
    /book2:\s*`\${BRAIN_BASE}\/\.user_uploaded\/media_1791707197981\.png`,/g,
    'book2: `${prefix}public/images/books/in-the-name-of-our-father.png`,'
  );
  scriptContent = scriptContent.replace(
    /book3:\s*`\${BRAIN_BASE}\/\.user_uploaded\/media_1791707217466\.png`/g,
    'book3: `${prefix}public/images/books/black-market.png`'
  );

  const distJsPath = path.join(ASSETS_DIR, "app.bundle.js");
  const rootJsPath = path.join(ROOT_ASSETS_DIR, "app.bundle.js");
  fs.writeFileSync(distJsPath, scriptContent, "utf8");
  fs.writeFileSync(rootJsPath, scriptContent, "utf8");
  console.log(`  ✓ Created dist/assets/app.bundle.js & assets/app.bundle.js (${(scriptContent.length / 1024).toFixed(1)} KB)`);

  // 6. Generate production dist/index.html
  console.log("▸ Generating dist/index.html...");
  const distHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Olukorede Yishua — Journalist · Writer · Storyteller</title>
  
  <!-- SEO & Social Meta Tags -->
  <meta name="description" content="Official editorial portfolio of Olukorede Yishua — Associate Editor at The Nation, author of 'In The Name of Our Father', investigative journalist, columnist, and literary storyteller." />
  <meta name="keywords" content="Olukorede Yishua, Journalist, Investigative Reporter, Author, Nigerian Journalism, The Nation, In The Name of Our Father, Black Market, After The End" />
  <meta name="author" content="Olukorede Yishua" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Olukorede Yishua — Journalist · Writer · Storyteller" />
  <meta property="og:description" content="Official editorial portfolio of Olukorede Yishua — Associate Editor at The Nation, author of 'In The Name of Our Father', investigative journalist, columnist, and author." />
  <meta property="og:image" content="public/images/profile.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="public/favicon.svg" />
  <link rel="alternate icon" href="public/favicon.ico" />

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Production Bundled Stylesheet -->
  <link rel="stylesheet" href="assets/styles.bundle.css" />
</head>
<body>
  <!-- Application Mount Target -->
  <div id="app"></div>

  <!-- Production Bundled Script -->
  <script src="assets/app.bundle.js"></script>
</body>
</html>
`;

  const distHtmlPath = path.join(DIST_DIR, "index.html");
  fs.writeFileSync(distHtmlPath, distHtml, "utf8");
  console.log("  ✓ Created dist/index.html");

  console.log("\n=================================================");
  console.log("  BUILD SUCCESSFUL!                              ");
  console.log("=================================================");
  console.log(`  Output: ${DIST_DIR}`);
  console.log("  Ready to deploy or open directly in any browser!");
}

// Run directly
if (process.argv[1] === __filename) {
  runBuild();
}
