const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const neNums = myNums.filter((num) => {
//   return num > 4;
// });

// console.log(neNums);

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
// console.log(newNums);

const books = [
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
];

// const userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);

const userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
