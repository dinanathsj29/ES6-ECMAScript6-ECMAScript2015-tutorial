"use strict";
// export {};
// create new set
var currentSet2 = new Set();
// add items in set
currentSet2.add("Item One");
currentSet2.add(2);
currentSet2.add("2");
// check size / / number of items in the set
console.log('currentSet2.size:', currentSet2.size);
// duplicates will ignored not allowed - so size will not change
/* currentSet2.add(2);
currentSet2.add("2");

console.log('currentSet2.size',currentSet2.size); */
console.log('// ------------------------------');
// object property based set with chaining method
var objectBasedSet = new Set(), objKey1 = {}, objKey2 = {};
objectBasedSet.add(objKey1).add(objKey2);
console.log('objectBasedSet.size:', objectBasedSet.size);
console.log('// ------------------------------');
// set with duplicates
var techSet = new Set(['JS', 'jQuery', 'Angular', 'Node', 'React', 'JS', 'jQuery']);
console.log('techSet.size:', techSet.size);
// `has` method is used to check existence.availability of value
console.log('Angular present in set:', techSet.has('Angular'));
// delete 
techSet.delete('JS');
console.log('delete techSet.size:', techSet.size);
console.log('// ------------------------------');
//# sourceMappingURL=14_2_es6_ts_sets.js.map