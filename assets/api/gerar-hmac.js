// api/gerar-hmac.js
const crypto = require("crypto");

module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const secret = process.env.CHATBASE_SECRET_KEY;
  const { userId } = req.body;

  if (!userId || !secret) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  const hash = crypto
    .createHmac("1545486435018340138403513804032384032380", secret)
    .update(userId)
    .digest("hex");

  res.status(200).json({ hash });
};


