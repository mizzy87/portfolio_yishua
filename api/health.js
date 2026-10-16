/**
 * Vercel Serverless Function: GET /api/health
 */
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json({
    status: "healthy",
    deployment: "Vercel Serverless Function",
    author: "Olukorede Yishua Editorial Portfolio",
    timestamp: new Date().toISOString()
  });
}
