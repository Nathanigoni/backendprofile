const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/me", async (req, res) => {
  try {
    const catApiUrl = "https://catfact.ninja/fact";
    const response = await axios.get(catApiUrl, { timeout: 5000 });

    const data = {
      status: "success",
      user: {
        email: "usnow02@gmail.com",
        name: "Nathan Igey Igoni",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (error) {
    console.error("Cat API Error:", error.message);

    const fallback = {
      status: "success",
      user: {
        email: "usnow02@gmail.com",
        name: "Nathan Igey Igoni",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Cats are mysterious creatures. (Fallback fact)",
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(fallback);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/me`);
});
