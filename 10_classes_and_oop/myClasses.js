// ES6

class User {
  constructor(username, email, passsword) {
    this.username = username;
    this.email = email;
    this.passsword = passsword;
  }

  encryptPassword (){
    return `${this.passsword}abc`
  }
}

const chai = new User("chai", "chai@ex.com", "1254")

console.log(chai.encryptPassword());

