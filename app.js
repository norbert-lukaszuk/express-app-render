const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

// app.get("/", (req, res) => res.type('html').send(html));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/data", function (req, res) {
  res.sendFile(path.join(__dirname, "/data.json"));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
