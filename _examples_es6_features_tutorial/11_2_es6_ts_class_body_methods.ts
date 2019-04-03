// export {};

// class can not be hoisted
// let person2 = new Person(); // error - Uncaught TypeError: Person is not a constructor

// console.log('// ------------------------------');

class Person {

  // constructor method
  constructor(_name) {
    this.name = _name;
    console.log('constructor Person Name:', this.name);
  }

  // static method 
  static showGreetings() {
    console.log('static method showGreetings() - Hello');
  }

  // prototype method
  showMessage() {
    console.log('prototype method showMessage() - Hello');
  }

}

// new class object
let Person1 = new Person('Dinanath');

// invoke static method 
Person.showGreetings();

// invoke prototype method
Person1.showMessage();

console.log('// ------------------------------');
