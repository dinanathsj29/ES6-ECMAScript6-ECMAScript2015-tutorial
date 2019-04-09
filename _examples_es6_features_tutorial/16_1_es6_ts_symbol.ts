// exports{}

// let firstSymbol = symbol();
let firstSymbol = Symbol('First Symbol');
console.log('typeof firstSymbol:',typeof firstSymbol);
console.log('firstSymbol.toString:',firstSymbol.toString())

console.log('// ------------------------------');
// console.log('// ------------------------------');

// symbol always create a unique ids
// let symbol1 = Symbol();
// let symbol2 = Symbol();

// console.log(symbol1 === symbol2);

let symbol1 = Symbol('i am symbol1');
let symbol2 = Symbol('i am symbol2');

console.log(symbol1 === symbol2);

console.log('// ------------------------------');
// console.log('// ------------------------------');
