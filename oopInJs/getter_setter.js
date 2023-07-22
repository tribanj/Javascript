class User {
    constructor(email, password) {
      this._email = email; // Use a different name for the instance variable
      this.password = password;
    }
  
    // Getter for the email property
    get email() {
      return this._email.toUpperCase();
    }
  
    // Setter for the email property
    set email(value) {
      this._email = value;
    }
  
    // Getter for the password property
    get password() {
      return `${this._password} Tribhuwan`;
    }
  
    // Setter for the password property
    set password(value) {
      this._password = value;
    }
  }
  
  const Tribhuwan = new User("t@tb.ai", "abc");
  console.log(Tribhuwan.email); // Output: "T@TB.AI"
  