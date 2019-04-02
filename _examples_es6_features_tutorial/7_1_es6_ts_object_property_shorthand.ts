// export {};

//old plain javascript approach
let firstName = 'angular';
let lastName = 'typescript';

let Technology = {
  //new property : variable
  firstName: firstName,
  lastName: lastName
}

console.log(Technology.firstName);
console.log(Technology.lastName);
console.log('// ------------------------------');

// ------------------------------

//ES6 approach - When propery names are similar/equivalent to variable name than ES6 provide shorthand notation for object literals

let version1 = 7;
let version2 = 3;

let newTechnology = {
  firstName,
  lastName,
  version1,
  version2
}
console.log(newTechnology.firstName);
console.log(newTechnology.lastName);
console.log(newTechnology.version1);
console.log(newTechnology.version2);
console.log('// ------------------------------');
