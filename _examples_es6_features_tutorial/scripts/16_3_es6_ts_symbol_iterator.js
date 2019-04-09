"use strict";
// exports{}
var string1 = 'Dinanath';
var array1 = ['Dinanath', 29];
var num1 = 29;
var object1 = { name: 'Dinanath' };
// check Symbol.iterator` method exist on which primitive data type
console.log('string Symbol.iterator:', typeof string1[Symbol.iterator]);
console.log('array Symbol.iterator:', typeof array1[Symbol.iterator]);
console.log('num Symbol.iterator:', typeof num1[Symbol.iterator]);
console.log('object Symbol.iterator:', typeof object1[Symbol.iterator]);
//# sourceMappingURL=16_3_es6_ts_symbol_iterator.js.map