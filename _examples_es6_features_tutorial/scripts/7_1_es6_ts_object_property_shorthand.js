"use strict";
// export {};
//old plain javascript approach
var firstName = 'angular';
var lastName = 'typescript';
var Technology = {
    //new property : variable
    firstName: firstName,
    lastName: lastName
};
console.log(Technology.firstName);
console.log(Technology.lastName);
console.log('// ------------------------------');
// ------------------------------
//ES6 approach - When property names are similar/equivalent to variable name than ES6 provide shorthand notation for object literals
var version1 = 7;
var version2 = 3;
var newTechnology = {
    firstName: firstName,
    lastName: lastName,
    version1: version1,
    version2: version2
};
console.log(newTechnology.firstName);
console.log(newTechnology.lastName);
console.log(newTechnology.version1);
console.log(newTechnology.version2);
console.log('// ------------------------------');
//# sourceMappingURL=7_1_es6_ts_object_property_shorthand.js.map