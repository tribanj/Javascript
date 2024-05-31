// in this filr fpoor better understanding wn named the variabel as promise1, promise2 etc

const promiseOne = new Promise(function (resolve, reject) {
  //doo an async task
  // DB calls , cryptography, network

  setTimeout(function () {
    console.log("Async tsask is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolve");
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@chaicode.com" });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "tribhuwan", password: "13456" });
    } else {
      reject("ERROR: Something wen twrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("THe Promise Is Ether Resolved or rejected ");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: Js went wronng");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//  try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//  } catch (error) {
//     console.log("E: error");
//  }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
