/**
 * OLUKOREDE YISHUA — EDITORIAL PORTFOLIO SERVER
 * Built with standard Node.js (zero external dependencies required).
 *
 * Usage:
 *   node server.js
 *   npm start
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyAssets } from "./scripts/copy-assets.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const ROOT_DIR = __dirname;
const BRAIN_DIR = "C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\e5d840a1-713b-4f33-917a-c620a0f010fb";
const DATA_DIR = path.join(ROOT_DIR, "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

// Synchronize images into public/images/ on startup
try {
  const copiedCount = copyAssets();
  if (copiedCount > 0) {
    console.log(`[Assets] Synchronized ${copiedCount} media assets into public/images/`);
  }
} catch (err) {
  console.warn("[Assets] Media sync notice:", err.message);
}

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), "utf8");
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8"
};

const server = http.createServer((req, res) => {
  // CORS & Security headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // 1. API ROUTES
  if (pathname === "/api/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "healthy",
        server: "Olukorede Yishua Editorial Portfolio Server",
        timestamp: new Date().toISOString()
      })
    );
    return;
  }

  if (pathname === "/api/contact" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      // Safeguard against oversized payloads
      if (body.length > 1e6) {
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body || "{}");
        const { name, email, organization, subject, message } = data;

        if (!name || !email || !message) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: false,
              error: "Missing required fields: name, email, and message are required."
            })
          );
          return;
        }

        const newEntry = {
          id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          date: new Date().toISOString(),
          name: String(name).trim(),
          email: String(email).trim(),
          organization: String(organization || "").trim(),
          subject: String(subject || "").trim(),
          message: String(message).trim(),
          ip: req.socket.remoteAddress
        };

        let existing = [];
        try {
          existing = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8") || "[]");
        } catch {
          existing = [];
        }

        existing.unshift(newEntry);
        fs.writeFileSync(MESSAGES_FILE, JSON.stringify(existing, null, 2), "utf8");

        console.log(`[Contact] New dispatch received from: ${newEntry.name} <${newEntry.email}>`);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: "Editorial dispatch received and logged successfully.",
            id: newEntry.id
          })
        );
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: "Invalid JSON payload." }));
      }
    });
    return;
  }

  if (pathname === "/api/messages" && req.method === "GET") {
    try {
      const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8") || "[]");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count: messages.length, messages }));
    } catch {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count: 0, messages: [] }));
    }
    return;
  }

  // 2. STATIC FILE SERVING
  let filePath = "";

  // Check if requesting brain storage assets directly
  if (pathname.includes(".gemini") || pathname.includes("antigravity-ide") || pathname.startsWith("/brain/")) {
    const relativeToBrain = pathname.replace(/^.*brain\/e5d840a1-713b-4f33-917a-c620a0f010fb\/?/, "");
    filePath = path.join(BRAIN_DIR, relativeToBrain);
  } else {
    // Normal root-relative static file
    if (pathname === "/") {
      pathname = "/index.html";
    }
    filePath = path.join(ROOT_DIR, pathname);
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      const dirIndex = path.join(filePath, "index.html");
      if (fs.existsSync(dirIndex)) {
        filePath = dirIndex;
      } else {
        err = new Error("No index file in directory");
      }
    }

    if (err || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      // Fallback: If not found and no extension, serve index.html for SPA behavior
      if (!path.extname(pathname)) {
        const fallbackPath = path.join(ROOT_DIR, "index.html");
        fs.readFile(fallbackPath, (fallbackErr, content) => {
          if (fallbackErr) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("404 Not Found");
          } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(content);
          }
        });
        return;
      }

      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    // Set cache control headers (1 hour for static assets, no-cache for index.html)
    if (ext === ".html") {
      res.setHeader("Cache-Control", "no-cache, must-revalidate");
    } else {
      res.setHeader("Cache-Control", "public, max-age=3600");
    }

    const stream = fs.createReadStream(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    stream.pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════════════╗
  ║                                                               ║
  ║      OLUKOREDE YISHUA — EDITORIAL PORTFOLIO SERVER            ║
  ║      Journalist · Writer · Storyteller                        ║
  ║                                                               ║
  ╚═══════════════════════════════════════════════════════════════╝

  ➜ Local:   http://localhost:${PORT}
  ➜ Network: http://127.0.0.1:${PORT}
  ➜ API:     http://localhost:${PORT}/api/health
  ➜ Contact: http://localhost:${PORT}/api/contact (POST)

  Press Ctrl+C to stop the server.
  `);
});

process.on("SIGINT", () => {
  console.log("\n[Server] Shutting down gracefully...");
  server.close(() => {
    console.log("[Server] Stopped.");
    process.exit(0);
  });
});
