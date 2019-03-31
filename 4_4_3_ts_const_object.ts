// export {};

const Person = {
  firstName: 'Dinanath',
  lastName: 'Jayaswal',
  age: 35,
  gender: 'Male',
  isMale: true
}

console.log(Person.firstName);

// we can re-assign value
Person.firstName = 'Vedika';

console.log(Person.firstName);

//error - we cannot re-assign new object
/* Person = {

} */