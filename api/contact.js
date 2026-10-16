/**
 * Vercel Serverless Function: POST /api/contact
 */
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
  }

  try {
    const { name, email, organization, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, and message are required."
      });
    }

    const logEntry = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      date: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim(),
      organization: String(organization || "").trim(),
      subject: String(subject || "").trim(),
      message: String(message).trim()
    };

    console.log(`[Vercel Contact API] Received dispatch from: ${logEntry.name} <${logEntry.email}>`);

    return res.status(201).json({
      success: true,
      message: "Editorial dispatch received and logged successfully.",
      id: logEntry.id
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: "Internal server error." });
  }
}
