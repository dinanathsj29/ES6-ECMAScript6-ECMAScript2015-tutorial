// export {};

// class can not be hoisted
// let person2 = new Person(); // error - Uncaught TypeError: Person is not a constructor

// console.log('// ------------------------------');

class Person {

  // method
  greetings() {
    console.log('inside Person greetings methods');
  }

}

let person1 = new Person();

console.log('typeof Person:', typeof Person);
console.log(person1.greetings());

// adding a method to a class is same like adding method to protorype object
console.log(person1.greetings === Person.prototype.greetings)

console.log('// ------------------------------');
