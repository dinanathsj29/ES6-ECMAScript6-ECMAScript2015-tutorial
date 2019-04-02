// export {};

//old plain javascript approach
let user = 'Dinanath';
let greetMessage1 = 'Welcome' + ' ' + user + ' ' + 'to ES6.';

console.log(greetMessage1);
 
console.log('// ------------------------------');

//ES6 Template Literals (Template Strings) approach
let greetMessage2 = `Welcome ${user} to ES6.`;

console.log(greetMessage2);

console.log('// ------------------------------');
// ------------------------------

//ES6 multi-line string
let greetMessage3 = `ES6 Template Literals (Template Strings):
                    With Template Literals (Template Strings)
                    we can add mutiple lines in string concatenation/interpolation
`;

console.log(greetMessage3);