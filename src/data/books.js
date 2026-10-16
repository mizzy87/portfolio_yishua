/**
 * OLUKOREDE YISHAU — Books & Publications Data
 * Easily update book titles, descriptions, covers, publication years, and optional links here.
 */

const BRAIN_BASE = "../.gemini/antigravity-ide/brain/e5d840a1-713b-4f33-917a-c620a0f010fb";

export const BOOKS = [
  {
    id: "book-1",
    title: "After The End",
    author: "Olukorede Yishau",
    publicationYear: "2021",
    coverImage: `${BRAIN_BASE}/.user_uploaded/media_1791707184082.png`,
    fallbackCover: `${BRAIN_BASE}/.user_uploaded/media_1791707184082.png`,
    description: "A humane and deeply sympathetic novel exploring the frailty of human connections, grief, and emotional survival in contemporary society.",
    synopsis: `
      <p class="book-synopsis-lead">"A humane and sympathetic narration of the frailty of human connections." — Jumoke Verissimo</p>
      <p><em>After The End</em> is a poignant, character-driven narrative that navigates the aftermath of loss, marriage, societal expectations, and personal redemption. With striking emotional resonance, Yishau crafts a tender exploration of human vulnerability and resilience.</p>
    `,
    quote: "A humane and sympathetic narration of the frailty of human connections. — Jumoke Verissimo",
    genre: "Literary Fiction / Novel",
    // Optional links: Leave empty string ("") if not available. Buttons will only render when valid URLs are set.
    buyLink: "",
    readOnlineLink: ""
  },
  {
    id: "book-2",
    title: "In The Name of Our Father",
    author: "Olukorede Yishau",
    publicationYear: "2018",
    coverImage: `${BRAIN_BASE}/.user_uploaded/media_1791707197981.png`,
    fallbackCover: `${BRAIN_BASE}/.user_uploaded/media_1791707197981.png`,
    description: "A gripping political thriller unmasking the intoxicating nexus of military authoritarianism, religious charlatanism, and journalistic courage.",
    synopsis: `
      <p class="book-synopsis-lead">"A mesmerising tale of duty, ambition, greed and hunger for power." — Toni Kan, poet and novelist</p>
      <p>Set against the turbulent backdrop of military dictatorship, <em>In The Name of Our Father</em> follows two men intent on preserving their lives while caught in the crosshairs of a nation fighting to throw off the shackles of a power-mad regime. A seminal contribution to contemporary African political fiction.</p>
    `,
    quote: "A mesmerising tale of duty, ambition, greed and hunger for power. — Toni Kan",
    genre: "Political Thriller / Novel",
    // Optional links: Leave empty string ("") if not available.
    buyLink: "",
    readOnlineLink: ""
  },
  {
    id: "book-3",
    title: "Black Market",
    author: "Olukorede Yishau",
    publicationYear: "2023",
    coverImage: `${BRAIN_BASE}/.user_uploaded/media_1791707217466.png`,
    fallbackCover: `${BRAIN_BASE}/.user_uploaded/media_1791707217466.png`,
    description: "A searing, stripped-down novel delving into the shadow economies of human desires, ethical dilemmas, and survival in modern cityscapes.",
    synopsis: `
      <p class="book-synopsis-lead">"Told with striking simplicity, this book strips away excess; nothing is overstated, yet everything is felt." — Ayo Deforge</p>
      <p>Praised by critics as an emotional roller coaster, <em>Black Market</em> cuts into the complex moral ambiguities of urban survival, illicit transactions, and the quiet dignity of souls navigating systemic adversity.</p>
    `,
    quote: "Yishau takes us on an emotional roller coaster. — Ever Obi",
    genre: "Contemporary Fiction / Novel",
    // Optional links: Leave empty string ("") if not available.
    buyLink: "",
    readOnlineLink: ""
  }
];
