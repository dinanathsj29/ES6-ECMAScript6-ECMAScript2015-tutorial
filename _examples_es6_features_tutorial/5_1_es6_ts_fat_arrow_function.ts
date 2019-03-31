// export {};

//normal function
var getNormalValue = function () {
    return 100;
}
console.log('normal function return', getNormalValue());

// ------------------------------

//arrow function
const getArrowValue1 = () => {
    return 200;
}
console.log('fat arrow function return', getArrowValue1());

// ------------------------------

//arrow function - single line return
var getArrowValue2 = () => 500;
console.log('fat arrow function single line return', getArrowValue2());

// ------------------------------

//arrow function - parameter
var getArrowValue3 = (num: number) => num;
console.log('fat arrow function parameter', getArrowValue3(10));

// ------------------------------

console.log('type of getArrowValue2', typeof getArrowValue2);
