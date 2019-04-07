// export {};

let dummySet = new Set(), idKey = {};

dummySet.add(idKey);
console.log(dummySet.size); // 1

console.log('// ------------------------------');

// eliminate original reference
idKey = null;

console.log(dummySet.size);      // 1

// get the original reference back
idKey = [...dummySet][0];

console.log('// ------------------------------');
