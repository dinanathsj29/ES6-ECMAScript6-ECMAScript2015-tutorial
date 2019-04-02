// export {};

//old plain javascript approach
let arrEmployee = ['Dinanath', 'Jayaswal', 'Male', 35, true];
console.log(arrEmployee[0]);
console.log(arrEmployee[1]);

console.log('// ------------------------------');

//ES6 Destructuring approach
//assign a meaningful name to each positions value
let [first, second, third, fourth, fifth] = arrEmployee;

let [firstName, lastName, gender, age, isSenior] = arrEmployee;

console.log(first);
console.log(second);

console.log(gender);
console.log(age);

console.log('// ------------------------------');

let [fn, ln, , , senior] = arrEmployee

console.log(fn);
console.log(senior);

// ------------------------------
