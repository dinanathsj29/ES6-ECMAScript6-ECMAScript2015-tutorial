// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

greetUser1('Dinanath1'); //hoising function declaration will move to top

function greetUser1(userName1: string) {
    if (userName1 === 'Dinanath1') {
        var greetings1 = 'Hello Dinanath, Welcome';
    } else {
        var greetings1 = 'Hello Guest';
    }
    console.log(greetings1); //var variables available outside as it have functional scope
    var greetings1: string; //hoisting variable declaration will move to top
}

greetUser1('Dinanath2'); 