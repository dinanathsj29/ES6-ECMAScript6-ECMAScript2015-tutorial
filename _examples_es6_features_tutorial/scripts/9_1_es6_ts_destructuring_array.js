"use strict";
// export {};
//old plain javascript approach
var arrEmployee = ['Dinanath', 'Jayaswal', 'Male', 35, true];
console.log(arrEmployee[0]);
console.log(arrEmployee[1]);
console.log('// ------------------------------');
//ES6 Destructuring approach
//assign a meaningful name to each positions value
var first = arrEmployee[0], second = arrEmployee[1], third = arrEmployee[2], fourth = arrEmployee[3], fifth = arrEmployee[4];
var firstName = arrEmployee[0], lastName = arrEmployee[1], gender = arrEmployee[2], age = arrEmployee[3], isSenior = arrEmployee[4];
console.log(first);
console.log(second);
console.log(gender);
console.log(age);
console.log('// ------------------------------');
var fn = arrEmployee[0], ln = arrEmployee[1], senior = arrEmployee[4];
console.log(fn);
console.log(senior);
// ------------------------------
//# sourceMappingURL=9_1_es6_ts_destructuring_array.js.map