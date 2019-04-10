"use strict";
// exports{}
// let firstSymbol = symbol();
var firstSymbol = Symbol('First Symbol');
console.log('typeof firstSymbol:', typeof firstSymbol);
console.log('firstSymbol.toString:', firstSymbol.toString());
console.log('// ------------------------------');
// console.log('// ------------------------------');
// symbol always create a unique ids
// let symbol1 = Symbol();
// let symbol2 = Symbol();
// console.log(symbol1 === symbol2);
var symbol1 = Symbol('i am symbol1');
var symbol2 = Symbol('i am symbol2');
console.log(symbol1 === symbol2);
console.log('// ------------------------------');
// console.log('// ------------------------------');
//# sourceMappingURL=16_1_es6_ts_symbol copy.js.map