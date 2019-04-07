"use strict";
// export {};
var dummySet = new Set(), idKey = {};
dummySet.add(idKey);
console.log(dummySet.size); // 1
console.log('// ------------------------------');
// eliminate original reference
idKey = null;
console.log(dummySet.size); // 1
// get the original reference back
idKey = dummySet.slice()[0];
console.log('// ------------------------------');
//# sourceMappingURL=14_3_es5_ts_weaksets.js.map