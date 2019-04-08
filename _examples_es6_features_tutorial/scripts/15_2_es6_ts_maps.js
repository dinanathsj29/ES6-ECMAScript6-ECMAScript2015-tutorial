"use strict";
// exports{}
var bookMap = new Map();
bookMap.set('bookTitle', 'Learn ES6');
bookMap.set('bookYear', 2018);
console.log(bookMap.get('bookTitle'));
console.log(bookMap.get('bookYear'));
console.log('bookMap.size:', bookMap.size);
console.log('// ------------------------------');
// console.log('// ------------------------------');
console.log(bookMap.has('bookTitle'));
bookMap.delete('bookYear');
console.log('bookMap.size:', bookMap.size);
bookMap.clear();
console.log(bookMap.has('bookTitle'));
console.log('bookMap.size:', bookMap.size);
console.log('// ------------------------------');
// console.log('// ------------------------------');
var personDetailsMap = new Map(), nameKey = {}, ageKey = {};
personDetailsMap.set(nameKey, 'Dinanath');
personDetailsMap.set(ageKey, 35);
console.log(personDetailsMap.get(nameKey));
console.log(personDetailsMap.get(ageKey));
console.log('personDetailsMap.size:', personDetailsMap.size);
console.log('// ------------------------------');
// console.log('// ------------------------------');
//# sourceMappingURL=15_2_es6_ts_maps.js.map