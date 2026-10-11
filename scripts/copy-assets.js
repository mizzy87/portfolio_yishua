/**
 * Asset Copier Script (Node.js)
 * Synchronizes brain artifacts and uploaded media into public/images/
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const BRAIN_DIR = "C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\e5d840a1-713b-4f33-917a-c620a0f010fb";
const PUBLIC_IMG_DIR = path.join(ROOT_DIR, "public", "images");
const BOOKS_IMG_DIR = path.join(PUBLIC_IMG_DIR, "books");

export function copyAssets() {
  if (!fs.existsSync(PUBLIC_IMG_DIR)) {
    fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
  }
  if (!fs.existsSync(BOOKS_IMG_DIR)) {
    fs.mkdirSync(BOOKS_IMG_DIR, { recursive: true });
  }

  const assetMap = {
    // Hero authentic author portrait
    [path.join(BRAIN_DIR, ".user_uploaded", "media_1791705352682.jpg")]: path.join(PUBLIC_IMG_DIR, "profile.jpg"),
    // About editorial desk photo in newsroom
    [path.join(BRAIN_DIR, ".user_uploaded", "media_1791710376446.jpg")]: path.join(PUBLIC_IMG_DIR, "about.jpg"),
    // Book 1: After The End
    [path.join(BRAIN_DIR, ".user_uploaded", "media_1791707184082.png")]: path.join(BOOKS_IMG_DIR, "after-the-end.png"),
    // Book 2: In The Name of Our Father
    [path.join(BRAIN_DIR, ".user_uploaded", "media_1791707197981.png")]: path.join(BOOKS_IMG_DIR, "in-the-name-of-our-father.png"),
    // Book 3: Black Market
    [path.join(BRAIN_DIR, ".user_uploaded", "media_1791707217466.png")]: path.join(BOOKS_IMG_DIR, "black-market.png")
  };

  let count = 0;
  for (const [src, dst] of Object.entries(assetMap)) {
    try {
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dst);
        count++;
      }
    } catch (err) {
      console.warn(`[Warning] Could not copy ${src} -> ${dst}:`, err.message);
    }
  }

  return count;
}

// Execute directly if run via CLI
if (process.argv[1] === __filename) {
  const copied = copyAssets();
  console.log(`[Asset Copier] Successfully synchronized ${copied} media assets into public/images/`);
}
