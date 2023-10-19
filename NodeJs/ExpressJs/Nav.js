const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("hello from home page");
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

app.listen(8000, () => {
  console.log("listning on port 8000");
});
