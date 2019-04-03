"use strict";
// export {};
// class can not be hoisted
// let person2 = new Person(); // error - Uncaught TypeError: Person is not a constructor
// console.log('// ------------------------------');
var Person = /** @class */ (function () {
    // constructor method
    function Person(_name) {
        this.name = _name;
        console.log('constructor Person Name:', this.name);
    }
    // static method 
    Person.showGreetings = function () {
        console.log('static method showGreetings() - Hello');
    };
    // prototype method
    Person.prototype.showMessage = function () {
        console.log('prototype method showMessage() - Hello');
    };
    return Person;
}());
// new class object
var Person1 = new Person('Dinanath');
// invoke static method 
Person.showGreetings();
// invoke prototype method
Person1.showMessage();
console.log('// ------------------------------');
//# sourceMappingURL=11_2_es6_ts_class_body_methods.js.map