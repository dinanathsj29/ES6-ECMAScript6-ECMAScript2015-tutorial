// export {};

// for...of loop
/*for(element of array/string) {
  // Code to be executed
} */

// Iterating over an array
let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let day of arrDays) {
  console.log(day);
  document.write('<li>' + day + '</li>');
}

console.log('// ------------------------------');

// Iterating over string
let name = 'JavaScript';
for (let letter of name) {
  document.write(letter + ',');
  console.log(letter + ',');
}

console.log('// ------------------------------');

// ------------------------------
