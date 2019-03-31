"use strict";
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
// export {};
function greetUser1(userName1) {
    if (userName1 === 'Dinanath1') {
        var greetings1 = 'Hello Dinanath, Welcome';
    }
    else {
        var greetings1 = 'Hello Guest';
    }
    console.log(greetings1); //var variables available outside as it have functional scope
    var greetings1; //hoisting variable declaration will move to top
}
greetUser1('Dinanath1');
// ------------------------------
/*
function greetUser2(userName2:string){
    if(userName2 === 'Dinanath2'){
        let greetings2 = 'Hello Dinanath2';
    }else{
        let greetings2 = 'Hello Guest';
    }
    console.log(greetings2); //error - let variables not available out side block
}
*/
function greetUser2(userName2) {
    var greetings2;
    if (userName2 === 'Dinanath2') {
        greetings2 = 'Hello Dinanath2';
    }
    else {
        greetings2 = 'Hello Guest';
    }
    console.log(greetings2);
}
greetUser2('Dinanath2');
// ------------------------------ 
var num1 = 10;
var num2 = 20;
if (num1 === 10) {
    var num1 = 100;
    var num2_1 = 200;
    console.log('inside num1  : ' + num1);
    console.log('inside num2  : ' + num2_1);
}
console.log('outside num1  : ' + num1);
console.log('outside num2  : ' + num2);
// ------------------------------
// let variables not hoisted
/* function greetUser3(userName3:string){
    if(userName3 === 'Dinanath3'){
        greetings3 = 'Hello Dinanath3'; //error - let variables not hoisted
    }else{
        greetings3 = 'Hello Guest'; //error - let variables not hoisted
    }
    console.log(greetings3); //error - let variables not hoisted
    let greetings3;
} */
// ------------------------------
// let variables not be re-declared
// var firstName: string = 'Dinanath'; //error
// var firstName: string = 'DJ'; //error
var fName;
// let fName; //cannot redeclare block-scoped variable 'fName'
//# sourceMappingURL=4_2_es6_ts_let.js.map