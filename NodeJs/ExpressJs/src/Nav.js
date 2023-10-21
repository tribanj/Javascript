const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello from home page</h1>");
});

app.get("/about", (req, res) => {
  console.log("hello from About page");
});

app.get("/contact", (req, res) => {
  console.log("hello from Contact page");
});

app.get("/temp", (req, res) => {
  console.log("hello from Temperature page");
});

app.listen(PORT, () => {
  console.log(`listning on port ${PORT}`);
});
