const express = require("express");

const app = express();
let PORT = 5000;
app.get("/", (req, res) => {
  res.send("I am server");
});

const start = async () => {
  try {
    app.listen(PORt, () => {
      console.log(`I am live on port no. ${PORT}`);
    });
  } catch (error) {}
};
