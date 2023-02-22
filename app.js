const express = require("express");
const app = express();
const path = require("path");
const data = import("./data.json");
const port = process.env.PORT || 3001;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/data", (req, res) => res.send(data));
// app.get("/data", function (req, res) {
//   res.jsonp(path.join(__dirname, "/data.json"));
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
