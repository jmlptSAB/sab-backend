export default function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // preflight
    return res.status(200).end();
  }

  // --- Your payload ---
  res.status(200).json({
    gmail: ["No urgent emails", "Stripe payment received"],
    calendar: ["10:00 Gym session", "13:00 Lead calls"],
    stocks: { AAPL: 231.79, APP: 476.17, SE: 185.79 },
    business: {
      leads: ["Gavin", "Hoang", "Sophie"],
      atRisk: ["Client A"]
    },
    generated_at: new Date().toISOString(),
    takeaway: "Prospect at 13:00 is the move. Keep meals simple and hit steps."
  });
}
