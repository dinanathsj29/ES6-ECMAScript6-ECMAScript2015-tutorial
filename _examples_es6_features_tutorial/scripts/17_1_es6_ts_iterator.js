"use strict";
// exports{}
var iterableArray = ['One', 'Two', 'Three', 'Four', 'Five'];
function createCustomIterator(_arr) {
    var curCount = 0;
    return {
        next: function () {
            return curCount < iterableArray.length ? { value: iterableArray[curCount++], done: false } : { value: 'iteration completed', done: true };
        }
    };
}
var customIterator1 = createCustomIterator(iterableArray);
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log(customIterator1.next());
console.log('// ------------------------------');
// console.log('// ------------------------------');
//# sourceMappingURL=17_1_es6_ts_iterator.js.map