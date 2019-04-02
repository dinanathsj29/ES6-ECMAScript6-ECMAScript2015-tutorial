"use strict";
// export {};
//old plain javascript approach
var objEmployee = {
    firstName: 'Dinanath',
    lastName: 'Jayaswal',
    gender: 'Male',
    age: 35,
    isSenior: true
};
console.log(objEmployee.firstName);
console.log(objEmployee.lastName);
console.log('// ------------------------------');
//ES6 Destructuring approach
//assign a meaningful name to each property
var firstName = objEmployee.firstName, lastName = objEmployee.lastName, gender = objEmployee.gender, age = objEmployee.age, isSenior = objEmployee.isSenior;
console.log(firstName);
console.log(lastName);
console.log(gender);
console.log(age);
console.log(isSenior);
console.log('// ------------------------------');
// ------------------------------
//# sourceMappingURL=9_2_es6_ts_destructuring_object.js.map