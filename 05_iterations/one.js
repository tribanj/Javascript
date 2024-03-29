// video no 27

// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let index = 1; index <= 10; index++) {
//   const element = index;
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer Loop Value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value : ${j} and inner loop ${i}`);
  }
}

// one to ten table
for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop Value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArry = ["flash", "batman", "superman"];
// console.log(myArry.length);
for (let index = 0; index < myArry.length; index++) {
  const element = myArry[index];
  //   console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   const element = index;
//   if (index == 7) {
//     console.log("7 detected program is finished");
//     break;
//   }
//   console.log(element);
// }

for (let index = 1; index <= 20; index++) {
  const element = index;
  if (index == 7) {
    console.log("7 detected program is continued");
    continue;
  }
  console.log(element);
}
