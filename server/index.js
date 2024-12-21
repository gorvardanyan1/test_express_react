const express = require("express");
const path = require("path");

const app = express();
const port =  5000;

// Serve the React app in production
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// API endpoint example
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});