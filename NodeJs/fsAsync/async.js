const fs = require("fs");

// const data = fs.readFileSync("read.txt", "utf-8");

// console.log(data);

// console.log("after the data");

// asynchronous function

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("after the data");

// fs.mkdir('thapa', (err) =>{
//     console.log('folder created');
// });

// fs.writeFile("./thapa/bio.txt", "my name is Tribhuwan", (err) => {
//   console.log("files created");
// });

// fs.appendFile("./thapa/bio.txt", " plz like and shere my video", (err) => {
//   console.log("files appennded");
// });

// fs.readFile("./thapa/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rename("./thapa/bio.txt", "./thapa/myBio.txt", (err, data) => {
//   console.log("rename is done");
// });

// fs.unlink("./thapa/myBio.txt", (err) => {
//   console.log("files are deleted");
// });

fs.rmdir("./thapa", (err) => {
  console.log("folder deleted");
});
