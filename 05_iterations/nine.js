//Reduce

// it execute user s

const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, currval) => {
  console.log(`acc: ${acc} and currval : ${currval}`);
  return acc + currval;
}, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS",
    price: 2999,
  },
  {
    itemName: "python",
    price: 2500,
  },
  {
    itemName: "cpp",
    price: 5000,
  },
  {
    itemName: "web dev cource",
    price: 5999,
  },
  {
    itemName: "data science",
    price: 7999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay)