class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }


  get password(){
return this._password.toUpperCase()
  }

  set password(value){
    this._password = value

  }
}

const tribhuwan = new User("tb@tbcom", "aabcd");

console.log(tribhuwan.password);
