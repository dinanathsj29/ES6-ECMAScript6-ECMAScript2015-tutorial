"use strict";
// export {};
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log('var based for loop', i); //6
    }, 1000);
}
var _loop_1 = function (j) {
    setTimeout(function () {
        console.log('let based for loop', j); //1,2,3,4,5
    }, 1000);
};
// ------------------------------
for (var j = 1; j <= 5; j++) {
    _loop_1(j);
}
//# sourceMappingURL=4_3_es6_ts_let_loop.js.map