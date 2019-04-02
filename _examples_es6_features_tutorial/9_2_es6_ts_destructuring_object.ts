// export {};

//old plain javascript approach
let objEmployee = {
  firstName: 'Dinanath',
  lastName: 'Jayaswal',
  gender: 'Male',
  age: 35,
  isSenior: true
}
console.log(objEmployee.firstName);
console.log(objEmployee.lastName);

console.log('// ------------------------------');

//ES6 Destructuring approach
//assign a meaningful name to each property

let { firstName, lastName, gender, age, isSenior } = objEmployee;

console.log(firstName);
console.log(lastName);
console.log(gender);
console.log(age);
console.log(isSenior);

console.log('// ------------------------------');

// ------------------------------
