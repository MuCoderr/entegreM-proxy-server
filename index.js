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

app.listen(5000, () => console.log("Proxy server running on port 5000"));
