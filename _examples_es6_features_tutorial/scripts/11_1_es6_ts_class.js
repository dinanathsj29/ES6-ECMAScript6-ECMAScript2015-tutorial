"use strict";
// export {};
// class can not be hoisted
// let person2 = new Person(); // error - Uncaught TypeError: Person is not a constructor
// console.log('// ------------------------------');
var Person = /** @class */ (function () {
    function Person() {
    }
    // method
    Person.prototype.greetings = function () {
        console.log('inside Person greetings methods');
    };
    return Person;
}());
var person1 = new Person();
console.log('typeof Person:', typeof Person);
console.log(person1.greetings());
// adding a method to a class is same like adding method to protorype object
console.log(person1.greetings === Person.prototype.greetings);
console.log('// ------------------------------');
//# sourceMappingURL=11_1_es6_ts_class.js.map