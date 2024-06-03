class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.passsword = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@Teacher.com", "123");
chai.addCourse();


const masalaChai = new User("masalaChai")

masalaChai.logMe();