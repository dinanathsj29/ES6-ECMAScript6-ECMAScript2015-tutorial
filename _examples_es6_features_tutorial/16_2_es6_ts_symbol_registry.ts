// exports{}

let oneSymbol = Symbol.for('SymbolRegistry');
let twoSymbol = Symbol.for('SymbolRegistry');

console.log(oneSymbol === twoSymbol); // true - as uid/keys passed 'SymbolRegistry' is same for both

console.log('key/uid:', Symbol.keyFor(oneSymbol));
console.log('key/uid:', Symbol.keyFor(twoSymbol));

console.log('// ------------------------------');
// console.log('// ------------------------------');

let id = Symbol('uid');
let Employee = {
  [id]: 101,
}

console.log(Object.getOwnPropertyNames(Employee));
console.log(Object.getOwnPropertySymbols(Employee)); // Symbol('uid')
