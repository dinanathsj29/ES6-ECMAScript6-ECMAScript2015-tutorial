// exports{}

let string1 = 'Dinanath';
let array1 = ['Dinanath', 29] 
let num1 = 29;
let object1 = {name: 'Dinanath'};

// check Symbol.iterator` method exist on which primitive data type
console.log('string Symbol.iterator:', typeof string1[Symbol.iterator]);
console.log('array Symbol.iterator:', typeof array1[Symbol.iterator]);
console.log('num Symbol.iterator:', typeof num1[Symbol.iterator]);
console.log('object Symbol.iterator:', typeof object1[Symbol.iterator]);
