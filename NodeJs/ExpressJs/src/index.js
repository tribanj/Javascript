const express = require("express");
const path = require('path');
const app = express();

// console.log(__dirname, '../public');

// console.log(path.join((__dirname, '../public')));

const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from the express");
});


app.get("/about", (req, res) => {
  res.send("Hello from the about");
});

app.get("/contact_us", (req, res) => {
  res.send("Hello from the about");
});
app.get("/testimonials", (req, res) => {
  res.send("Hello from the about");
});


app.listen(8000, () => {
  console.log("app is listning on port 8000");
}); 

