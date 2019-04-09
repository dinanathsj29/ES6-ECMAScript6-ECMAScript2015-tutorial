"use strict";
// exports{}
var _a;
var oneSymbol = Symbol.for('SymbolRegistry');
var twoSymbol = Symbol.for('SymbolRegistry');
console.log(oneSymbol === twoSymbol); // true - as uid/keys passed 'SymbolRegistry' is same for both
console.log('key/uid:', Symbol.keyFor(oneSymbol));
console.log('key/uid:', Symbol.keyFor(twoSymbol));
console.log('// ------------------------------');
// console.log('// ------------------------------');
var id = Symbol('uid');
var Employee = (_a = {},
    _a[id] = 101,
    _a);
console.log(Object.getOwnPropertyNames(Employee));
console.log(Object.getOwnPropertySymbols(Employee)); // Symbol('uid')
//# sourceMappingURL=16_2_es6_ts_symbol_registry.js.map