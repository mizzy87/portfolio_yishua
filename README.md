# OLUKOREDE YISHUA — Official Editorial Portfolio
> **Journalist · Writer · Storyteller**

A high-end editorial website crafted with classic broadsheet elegance, warm ivory tones, midnight navy contrasts, and antique gold accents. Designed specifically for editors, literary publishers, media foundations, and readers worldwide.

---

## 🏛️ Section Structure (Exact Hierarchy)

1. **Header / Navigation**: Monogram Logo, Home, About, Stories, Gallery, Contact, and Quick Action
2. **Hero Section**: Editorial introduction, headline, bio, "View My Work" call-to-action, and large formal portrait
3. **About Me**: In-depth biography, journalism beats, academic credentials, career highlights, skills matrix, and documentary writing studio portrait
4. **Selected Journalism Work**: Filterable archive across News Reports, Investigative Stories, Features, and Opinion & Analysis, featuring live reading modal and publication links
5. **Photojournalism Gallery**: Categorized portfolio covering Field Reporting, High-Profile Interviews, and Media Events, with full interactive Lightbox
6. **Experience & Achievements**: Editorial leadership timeline, awards, fellowships (Bloomberg Media Initiative, Wole Soyinka Centre honors), and milestones
7. **Download My CV**: Professional résumé card with live document preview, executive overview, and direct PDF download
8. **Contact Section**: Direct editorial pitch form, WhatsApp quick-connect, email, and social channels
9. **Footer**: Brand signature, navigation index, social presence, and copyright/ethics notice

---

## 🎨 Design System & Palette

- **Navy Blue (Primary & Ink)**: `#0B1325` (Midnight), `#14203D` (Deep Slate Navy), `#1E315C` (Accent Navy)
- **Warm Ivory / Parchment**: `#FBF8F2` (Body Ground), `#F4EDE1` (Card Ivory), `#E7DEC9` (Border Rule)
- **White**: `#FFFFFF`
- **Antique Gold**: `#C5A059` (Primary Accent), `#DFC17B` (Light Highlight), `#9E7D3B` (Burnished Border)
- **Typography**: 
  - Headlines & Titles: *Playfair Display* & *Cormorant Garamond* (Classic Editorial Serif)
  - Body & Captions: *Plus Jakarta Sans* & *Inter* (High-legibility Humanist Sans)
  - Accents & Datelines: *JetBrains Mono* / *Editorial Italic*

---

## 📁 Project Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── about.jpg
│   │   ├── reporting-01.jpg
│   │   └── gallery/
│   ├── documents/
│   │   └── cv.pdf
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── ArticleCard/
│   │   │   ├── ArticleCard.js
│   │   │   └── ArticleCard.css
│   │   └── Gallery/
│   │       ├── Gallery.js
│   │       └── Gallery.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Stories/
│   │   │   ├── Stories.js
│   │   │   └── Stories.css
│   │   └── Contact/
│   │       ├── Contact.js
│   │       └── Contact.css
│   ├── data/
│   │   ├── articles.js
│   │   ├── experience.js
│   │   └── gallery.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── main.css
│   └── App.js
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Running the Web Server

### 1. Built-in Node.js Web Server (Zero External Dependencies)
You do not need to install any external npm packages. Simply run:
```bash
node server.js
```
or
```bash
npm start
```
Then visit:
👉 **`http://localhost:3000`**

#### Server Capabilities:
- **Zero Configuration**: Built using Node's standard modules (`http`, `fs`, `path`).
- **Static Asset Delivery**: Delivers `index.html`, CSS, JavaScript, PDF, and image files with correct MIME types and caching headers.
- **Auto Image Sync**: Synchronizes brain and uploaded images into `public/images/` automatically upon launch.
- **REST API Endpoints**:
  - `POST /api/contact`: Receives contact form submissions and safely stores them in `data/messages.json`.
  - `GET /api/health`: Health status endpoint.
  - `GET /api/messages`: Returns logged editorial inquiries.

### 2. Direct File Access (Offline Mode)
You can also double-click or open `index.html` directly in any web browser without running a server. All modules and styles load immediately.
