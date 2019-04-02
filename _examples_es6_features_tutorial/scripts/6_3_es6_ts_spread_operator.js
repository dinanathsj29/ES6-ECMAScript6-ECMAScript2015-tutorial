"use strict";
// export {};
var colorsList = ['red', 'green', 'blue', 'black'];
var showColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log('spread operator:', colors);
    console.log('arguments.length', arguments.length);
    for (var color in colors) {
        console.log('colorsList:', colors[color]);
    }
};
showColors.apply(void 0, colorsList);
console.log.apply(console, ['Elements in the colors List:'].concat(colorsList));
//# sourceMappingURL=6_3_es6_ts_spread_operator.js.map