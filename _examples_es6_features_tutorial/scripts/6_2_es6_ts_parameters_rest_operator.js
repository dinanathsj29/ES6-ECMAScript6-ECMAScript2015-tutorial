"use strict";
// export {};
// es5 normal function
var displayColors = function () {
    for (var i_1 in arguments) {
        console.log('arguments color list:', arguments[i_1]);
    }
};
displayColors('cyan');
console.log('------------------------------');
displayColors('cyan', 'magenta');
console.log('------------------------------');
displayColors('cyan', 'magenta', 'yellow');
console.log('------------------------------');
console.log('// ------------------------------');
// es6 rest operator
var showColors = function () {
    var colorsList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colorsList[_i] = arguments[_i];
    }
    console.log('colorsList rest operator:', colorsList);
    console.log('arguments.length:', arguments.length);
    for (var i_2 in colorsList) {
        console.log('colorsList rest operator array loop:', colorsList[i_2]);
    }
    console.log('// ');
};
showColors('red');
showColors('red', 'green');
showColors('red', 'green', 'blue');
//# sourceMappingURL=6_2_es6_ts_parameters_rest_operator.js.map