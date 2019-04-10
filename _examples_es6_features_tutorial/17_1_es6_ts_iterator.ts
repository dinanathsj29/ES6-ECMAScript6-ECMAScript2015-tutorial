// exports{}

let iterableArray = ['One', 'Two', 'Three', 'Four', 'Five']

function createCustomIterator(_arr) {
  let curCount = 0;
  return {
    next: function () {
      return curCount < iterableArray.length ? { value: iterableArray[curCount++], done: false } : { value: 'iteration completed', done: true };
    }
  }
}

let customIterator1 = createCustomIterator(iterableArray);

console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());

console.log('// ------------------------------');
// console.log('// ------------------------------');
