const fs = require("fs");

const bioData = {
  name: "Tribhuwan",
  age: 20,
  fav_col: "red",
  channel: "revel tejash",
};

// console.log(bioData.channel);
// console.log(bioData.name);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData.channel);

// const objectData = JSON.parse(jsonData);
// console.log(objectData);

const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json", jsonData, (err) => {
  console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
    const orignalData = JSON.parse(data);
      console.log(orignalData);
});
