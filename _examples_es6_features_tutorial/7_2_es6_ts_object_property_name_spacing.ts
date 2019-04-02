//In ES6 we can use property names with space like 'first name' 

let lastName = 'last name';

let Employee = {
  'first name': 'Dinanath',
  [lastName]:'Jayaswal'
}

console.log(Employee['first name']);
console.log(Employee['last name']);
console.log(Employee);