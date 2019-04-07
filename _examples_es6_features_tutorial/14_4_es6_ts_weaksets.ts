// export {};

let peopleSet = new WeakSet(), nameKey = {};

// add the object to the peopleSet
peopleSet.add(nameKey);

console.log(peopleSet.has(nameKey));      // true

console.log('// ------------------------------');

nameKey = null;

console.log(peopleSet.has(nameKey));      // false

console.log('// ------------------------------');

peopleSet.delete(nameKey);

console.log(peopleSet.has(nameKey));      // false
