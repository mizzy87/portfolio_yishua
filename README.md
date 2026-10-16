# OLUKOREDE YISHAU — Official Editorial Portfolio
> **Journalist · Writer · Storyteller**

A high-end editorial website crafted with classic broadsheet elegance, warm ivory tones, midnight navy contrasts, and antique gold accents. Designed specifically for editors, literary publishers, media foundations, and readers worldwide.

---

## 🏛️ Section Structure (Current Architecture)

1. **Header / Navigation**: Monogram Logo (OY), Home, About, Books, Experience, Contact, and Download CV trigger
2. **Hero Section**: 25 Years of Reporting kicker, editorial title, bio, 3 published books mention, and formal author portrait
3. **About Olukorede Yishau**: In-depth biography, authentic newsroom desk photo, published books dossier, journalism beats, academic credentials, and skills matrix
4. **Books & Publications**: Editorial showcase of 3 published books (*After The End*, *In The Name of Our Father*, *Black Market*) with realistic spine-shadow covers and comprehensive details modal
5. **Experience & Achievements**: Editorial leadership timeline (The Nation Associate Editor), published literary fiction milestones, NMMA awards, BMIA fellowship
6. **Download My CV**: Professional résumé card with live document preview, executive overview, and direct PDF download
7. **Contact Section**: Direct editorial pitch form with REST API integration, WhatsApp quick-connect, email, and social channels
8. **Footer**: Brand signature, navigation index, social presence, and copyright/ethics notice

---

## 🏗️ The Build System

The project features a **pure Node.js build system with zero external dependencies required**. You do not need to install complex build tools like Webpack or Vite to generate production-ready code.

### 1. Build Command
To generate the production bundle, run:
```bash
npm run build
```
or directly:
```bash
node scripts/build.js
```

### 2. How the Build System Works (`scripts/build.js`)
When executed, the build pipeline performs the following steps:
1. **Asset Synchronization**: Copies all uploaded photos and book covers from source storage into `public/images/` and `public/images/books/` via `scripts/copy-assets.js`.
2. **Clean & Prepare `dist/`**: Cleans and prepares `dist/`, `dist/assets/`, and `dist/public/`.
3. **CSS Compilation & Bundling**: Combines all 10 component and page stylesheets into a single unified `dist/assets/styles.bundle.css` while stripping nested `@import` statements to eliminate redundant network requests.
4. **Public Assets Cloning**: Copies all public documents (such as `cv.pdf`), favicons (`favicon.svg`), and images into `dist/public/`.
5. **JavaScript Application Bundling**: Bundles `src/bundle.js` into `dist/assets/app.bundle.js` with dynamic path resolution that works seamlessly across `file:///` local disk inspection, static CDN hosting, and HTTP servers.
6. **Production HTML Generation**: Emits an optimized, standalone `dist/index.html` linked directly to the bundled assets with full SEO meta tags and Google typography.

### 3. Production Output Directory (`dist/`)
```
dist/
├── index.html                  # Production HTML entry point
├── assets/
│   ├── styles.bundle.css       # Complete inlined CSS stylesheet
│   └── app.bundle.js           # Complete application JavaScript bundle
└── public/
    ├── documents/
    │   └── cv.pdf              # Downloadable CV document
    ├── images/                 # Bundled author photographs & book covers
    └── favicon.svg             # Vector site monogram favicon
```

---

## 🚀 Running the Web Server & Modes

### 1. Built-in Node.js Web Server (Zero External Dependencies)
Run:
```bash
npm start
```
or
```bash
node server.js
```
Then visit:
👉 **`http://localhost:3000`** (or **`http://localhost:3000/dist/`** to view the production build).

#### Server Features:
- **Zero Configuration**: Uses native Node.js core modules (`http`, `fs`, `path`, `url`).
- **Dual Mode**: Serves both source root (`/`) and production distribution (`/dist/`).
- **Static Asset Delivery**: Serves HTML, CSS, JavaScript, PDF, SVG, WebP, JPEG with MIME types and caching headers.
- **REST API Endpoints**:
  - `POST /api/contact`: Receives contact form submissions and stores them in `data/messages.json`.
  - `GET /api/health`: Health status endpoint.
  - `GET /api/messages`: Returns logged editorial dispatches.

### 2. Direct File Access (Offline Mode)
You can open either `index.html` or `dist/index.html` directly in any web browser (`file:///...`) without running a web server. All assets, modal dialogs, and interactions function offline.

---

## 🌐 Deploy to Web (Vercel & Netlify)

Whenever you make updates and want to deploy them live to the internet:

### Option A: 1-Click Deployment (Windows)
Double-click `deploy.bat` in the portfolio folder.

### Option B: npm Script
Run in your terminal:
```bash
npm run deploy
```

### Option C: Manual Git Commands
```bash
git add .
git commit -m "Deploy: Update editorial portfolio, 3 books, and build configs"
git push origin main
```
Both **Vercel** (`https://portfolioyishau.vercel.app/`) and **Netlify** will automatically rebuild and deploy your site within ~30 seconds of pushing.
