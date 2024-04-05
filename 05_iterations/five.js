const coding = ["js", "ruby", "python", "cpp"];
// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

// function printMe(item) {
// //   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    langusgeName: "javaScript",
    languageFile: "js",
  },
  {
    langusgeName: "java",
    languageFile: "java",
  },
  {
    langusgeName: "Python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.langusgeName);
});
