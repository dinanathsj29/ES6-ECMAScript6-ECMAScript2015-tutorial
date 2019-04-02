"use strict";
// export {};
// for...of loop
/*for(element of array/string) {
  // Code to be executed
} */
// Iterating over an array
var arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (var _i = 0, arrDays_1 = arrDays; _i < arrDays_1.length; _i++) {
    var day = arrDays_1[_i];
    console.log(day);
    document.write('<li>' + day + '</li>');
}
console.log('// ------------------------------');
// Iterating over string
var name = 'JavaScript';
for (var _a = 0, name_1 = name; _a < name_1.length; _a++) {
    var letter = name_1[_a];
    document.write(letter + ',');
    console.log(letter + ',');
}
console.log('// ------------------------------');
// ------------------------------
//# sourceMappingURL=10_1_es6_ts_loop_for_of.js.map