const fs = require("fs");

// fs.writeFile("read.txt", "Today is owsem day", (err) => {
//   console.log("file is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", "plz study everyday", (err) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
