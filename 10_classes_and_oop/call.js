function SetUserName(username) {
  //complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@db.com", "123456");

console.log(chai);