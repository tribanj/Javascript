const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the express");
});


app.get("/about", (req, res) => {
  res.send("Hello from the about");
});


app.listen(8000, () => {
  console.log("app is listning on port 8000");
});
