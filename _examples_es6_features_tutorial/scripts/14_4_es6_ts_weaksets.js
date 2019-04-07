"use strict";
// export {};
var peopleSet = new WeakSet(), nameKey = {};
// add the object to the peopleSet
peopleSet.add(nameKey);
console.log(peopleSet.has(nameKey)); // true
console.log('// ------------------------------');
nameKey = null;
console.log(peopleSet.has(nameKey)); // false
console.log('// ------------------------------');
peopleSet.delete(nameKey);
console.log(peopleSet.has(nameKey)); // false
//# sourceMappingURL=14_4_es6_ts_weaksets.js.map