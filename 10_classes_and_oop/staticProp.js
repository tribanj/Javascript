class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const tribhuwan = new User("tribhuwan");

// console.log(tribhuwan.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone.com", "123")

console.log(iphone.createId);
iphone.logMe()