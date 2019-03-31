// export {};

// es5 normal function
let displayColors = function () {
    for (let i in arguments) {
        console.log('arguments color list:', arguments[i]);
    }
}

displayColors('cyan');
console.log('------------------------------');

displayColors('cyan', 'magenta');
console.log('------------------------------');

displayColors('cyan', 'magenta', 'yellow');
console.log('------------------------------');

console.log('// ------------------------------');

// es6 rest operator
let showColors = function (...colorsList) {
    console.log('colorsList rest operator:', colorsList);
    console.log('arguments.length:', arguments.length);
    for (let i in colorsList) {
        console.log('colorsList rest operator array loop:', colorsList[i]);
    }
    console.log('// ');
}

showColors('red');
showColors('red', 'green');
showColors('red', 'green', 'blue');