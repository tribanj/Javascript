//  Object litral
const user = {
  userName: "Tribhuwan",
  loginCount: 8,
  signedIn: true,

  getuserDetails: () => {
    console.log("Got User details from database");
  },
};

console.log(user.userName);
console.log(user.getuserDetails());
// console.log(this)

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn
  return this
}

const userOne = User("tribhuwan", 12, true)
console.log(userOne)

