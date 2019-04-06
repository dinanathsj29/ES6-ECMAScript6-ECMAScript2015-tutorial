// export {};

// define variables/functions to export
let fName = 'Dinanath';
const DOBY = 1980;

function getAge(_curYear) {
  console.log(_curYear - DOBY);
}

// Exporting variables and functions so that it can be used in other modules
// Export keyword makes variables/functions/classes ready to be used in other modules

// export let fName;
export { fName, DOBY, getAge };

// console.log('// ------------------------------');
