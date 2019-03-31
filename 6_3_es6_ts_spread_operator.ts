// export {};

let colorsList = ['red', 'green', 'blue', 'black'];

let showColors = function (...colors) {
    console.log('spread operator:', colors);
    console.log('arguments.length', arguments.length);
    for (let color in colors) {
        console.log('colorsList:', colors[color]);
    }
}

showColors(...colorsList);
console.log('Elements in the colors List:', ...colorsList);