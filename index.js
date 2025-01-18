const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get(req.query.url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Port numarasını kaldırın veya Vercel'in sağladığı portu kullanın
const port = process.env.PORT || 5000; // Vercel'in portunu kullan veya varsayılan olarak 5000
app.listen(port, () => console.log(`Proxy server running on port ${port}`));
