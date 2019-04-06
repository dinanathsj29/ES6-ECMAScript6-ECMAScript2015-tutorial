// export {};

function *playCricket() {
  yield 'Set Field';
  console.log('1. yield Set Field');
  yield 'Bowl';
  console.log('2. yield Bowl');
  yield 'Bat';
  console.log('3. yield Bat');
}

// create a reference to generator function

let cricket = playCricket(); 
console.log(cricket.next());
console.log(cricket.next());
console.log(cricket.next());
console.log(cricket.next()); // done - true;