"use strict";
// export {};
//normal function
var getNormalValue = function () {
    return 100;
};
console.log('normal function return', getNormalValue());
// ------------------------------
//arrow function
var getArrowValue1 = function () {
    return 200;
};
console.log('fat arrow function return', getArrowValue1());
// ------------------------------
//arrow function - single line return
var getArrowValue2 = function () { return 500; };
console.log('fat arrow function single line return', getArrowValue2());
// ------------------------------
//arrow function - parameter
var getArrowValue3 = function (num) { return num; };
console.log('fat arrow function parameter', getArrowValue3(10));
// ------------------------------
console.log('type of getArrowValue2', typeof getArrowValue2);
//# sourceMappingURL=5_1_es6_ts_fat_arrow_function.js.map