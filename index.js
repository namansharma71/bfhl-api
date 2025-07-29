const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/bfhl", require("./api/bfhl"));

app.get("/", (req, res) => {
  res.send("BFHL API by Naman Sharma");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
