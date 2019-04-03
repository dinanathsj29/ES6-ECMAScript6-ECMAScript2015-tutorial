// export {};

class Car {

  // simple constructor method
  /* constructor() {
    console.log('Car constructor');
  } */

  // parameterized constructor method
  constructor(_name) {
    console.log('Car constructor', _name);
  }

  // prototype method
  getModelNumber() {
    return 101;
  }

}

// console.log('// ------------------------------');

class TataCars extends Car {
  constructor(_name1) {
    super(_name1);
    console.log('TataCars constructor', _name1);
  }

  // prototype method - If same method present in child than it overwrite/override parent method
  /* getModelNumber() {
    return 1001;
  } */

  // to call same method from parent use super keyword
  getModelNumber() {
    return super.getModelNumber();
  }
}

// simple constructor method
// let Nexon = new TataCars();

// parameterized constructor method
let Nexon = new TataCars('Tata Nexon');

// prototype method
console.log('Nexon.getModelNumber:', Nexon.getModelNumber());
