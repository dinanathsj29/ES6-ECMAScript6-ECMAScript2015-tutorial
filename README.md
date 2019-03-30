<p align="center">
    <img src="_images_es6_features_tutorial/es6_logo_2.jpg" alt="es6 logo" title="es6 logo" width="200" />
</p>

JavaScript ES6-ECMAScript 6-ECMAScript 2015 Features for everyone
=====================
`ES6-ECMAScript 6-ECMAScript 2015` is the latest version of the specification for JavaScript. Here will meet the `future of JavaScript`: as JavaScript follows ECMAScript standards. This course takes a look at the latest features of ECMAScript 6 (aka ES6) and how these changes are making JavaScript even more powerful and concise. Will learn/review the `new keywords-let const` and `function/object syntax` and shows how the new `class, module syntax` can be used with JavaScript library like Angular, React, Node. You'll also review the ES6 compiling tool `Typescript`,`Babel` and `Scratch JS` and also use these to make your ES6 code compatible with modern browsers.

Prerequisites for current course / What you need to know
=====================
`ES6-ECMAScript 6-ECMAScript 2015` introduces us to the newest language features that can be used in JavaScript code. Due to this, I assume you have some working knowledge/understanding of JavaScript. If you haven't, will recommend watching [JavaScript Essentials Tutorial for beginners](https://github.com/dinanathsj29/javascript-beginners-tutorial). Also, some basic knowledge of HyperText Markup Language (HTML) [HTML5 Essentials](https://github.com/dinanathsj29/html5-essentials-tutorial) and [CSS3 Fundamentals](https://github.com/dinanathsj29/css3-fundamentals-tutorial) will likely be useful in your work with ES6. Finally, you will be using a bit of Angular.js, React.js, and Node.js but nothing that requires deep/advanced knowledge.

Topics include
===================== 
1. [Course Introduction](#section-1-course-introduction)
2. [Introduction to ES6-ECMAScript 6](#section-2-introduction-to-es6-ecmascript-6)
3. [Transpiling ES6-ECMAScript 6](#section-3-transpiling-es6-ecmascript-6)
4. [New Variables—Creation Updating and Scoping](#section-4-new-variables-creation-updating-and-scoping)
5. [Function Improvements objects](#section-5-function-improvements-objects)
6. [Extended Parameter Handling](#section-6-extended-parameter-handling)
7. [Template Strings Literals](#section-7-template-strings-literals)
8. [Destructuring Assignment](#section-8-destructuring-assignment)
9. [Iterables and Iterators Looping](#section-9-iterables-and-iterators-looping)
10. [Classes](#section-10-classes)
11. [Generators](#section-11-generators)
12. [Sets and WeakSets](#section-12-sets-and-weaksets)
13. [Map and Weak Map](#section-13-map-and-weak-map)
14. [Symbols](#section-14-symbols)
15. [Modules](#section-15-modules)
16. [Whats Next Step?](#section-16-whats-next-step)

Section 1. Course Introduction
=====================
1.1. Welcome
---------------------
Hi All, I'm **`Dinanath Jayaswal, Senior UI/Web Developer and Adobe Certified Expert Professional`**, I wanna welcome you to `ES6-ECMAScript 6-ECMAScript 2015`. In this course/tutorial will go over how to start with using the latest ES6 features right with the bang. Will dive into the specifics of ES6 and new features it includes. We'll look at new keywords, syntax, and operators that can be used to simplify code structure. At the end we'll take a look at class, module syntax in ES6 and how that can be used immediately with very popular JavaScript library/frameworks like Angular, React, Node, etc. Let us explore and learn some pretty exciting stuff so let's go ahead and get started with `ES6-ECMAScript 6-ECMAScript 2015`.

`ES6-ECMAScript 6-ECMAScript 2015` will introduce us to the newest language features that can be used in JavaScript code - The Modern JavaScript.

1.2. Who is this for?
---------------------
This course is for anyone and everyone, Almost everyone! who is interested in boost skills and further career - by learning new latest programming/coding standards/features/syntaxes/keywords introduced in the latest version of JavaScript to become a hi-tech developer.

Section 2. Introduction to ES6-ECMAScript 6
=====================
2.1. ES5/ECMAScript 5
---------------------
- JavaScript is standard implementations of standard specifications called ECMAScript
- The last ECMAScript Version is 5.0 ie. ES5
- JavaScript = Language in practice, ES5/ES6 = Langauge standards

2.2. What is ES6-ECMAScript 6-ECMAScript 2015
---------------------
- `1995` - JavaScript invented/created by `“Brandan Eich”` at `Netscape` originally named as `"LiveScript"`
- `1996` - `Microsoft` has developed new version of JavaScript named as `"JScript"` for `IE-3`
- Due to different standards/version on a different browser, there was an urgent need to standardized language
- `ECMA (European Computer Manufacturers Association)` is the governing body which provides standardization/specification or JavaScript language implementation 
- `1997` - ECMAScript 1 released (JavaScript Submitted to `ECMAScript`)
- `2009` - ECMAScript 5 released (`for...each, array method, map, filter`)
- `2015` - ECMAScript 6 released (tones of advanced awesome features - `let, const, function default parameters, arrow function, classes, template string, new array/object methods`)
  - ES6-ECMAScript 6-ECMAScript 2015 is the evolution of ES5...Future of JavaScript
  - ES6 adds a tremendous amount of features to JavaScript such as let, constants, classes, Fat Arrow functions, etc.
  - `ES6-ECMAScript 6-ECMAScript 2015 = ES5 + New Awesome Features`

2.3. Typescript
---------------------
- Typescript is Open source/free development language
- Developed and maintained by Microsoft
- Typed superset of JavaScript which Compiles to plain JavaScript
- It consists of variables Data Types string, number, boolean, etc. but it is optional
- One can write safer/meaningful/easily maintainable/scalable code

2.4. ES6 Browser Support
---------------------
Most of the features will discuss here are supported in `latest version of the major web browsers` such as Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.

Check current browser support and compatibility status for ES6:
- [ES6/ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/)
- [W3C Browser Support for ES6/ECMAScript 6 (ECMAScript 2015)](https://www.w3schools.com/js/js_versions.asp)

> **Note**: Internet Explorer does not support ES6/ECMAScript 6.

2.5. Using ES6/ECMAScript 6 now
---------------------
- If the browser does not support all of the ES6/ECMAScript 6 features than alternatively:
  - we can use the `online transpilers (source-to-source compilers)` free of cost which `transpile our current ES6 code to ES5` for better browser compatibility without leaving out the benefits of enhanced syntax and capabilities of ES6
- Transpiling is the process of taking `ES6 code and converting it into ES5`, so browsers can read it 
- The transpiling process is also used for languages like `CoffeeScript and TypeScript` to convert code into JavaScript
- There are many different transpilers/transpiling tools available, the most popular are: 
  - [Typescript](https://www.typescriptlang.org/)
  - [Babel](https://babeljs.io/), 
  - [Traceur](https://github.com/google/traceur-compiler) and 
  - [Closure](https://closure-compiler.appspot.com/)
- Some testing we can try in [Chrome Canary - https://www.google.com/intl/en_in/chrome/canary/ ](https://www.google.com/intl/en_in/chrome/canary/) a version of Google Chrome (some ES6 feature supported not all, unstable)

Section 3. Transpiling ES6-ECMAScript 6
=====================
3.1 Transpiler
---------------------
- All browsers `does not supports all latest new features` of ES6/ES2015
- Chrome and Firefox supports almost 90% of features
- `Transpilers` - converts ES6/ES2015 code into ES5 (plain JavaScript, browser understandable code)
- Popular Transpilers - Typescript, Babel, Traceur, Closure

3.2. Babel.js (https://babeljs.io/) - working with Babel
---------------------
- Babel is one of the most popular tools for trasnpiling ES6 code and gets ES5 code 
- Babel was `created by Sebastian McKenzie` an Australian developer at Facebook
- `ReactJS the UI library created by Facebook uses Babel` as a preferred tool for transpiling the ES6 features back into ES5 JavaScript

3.3. Babel in-browser transpiling
---------------------
- In real project it's advisable `not to use In Browser Transformer`, it will force the browser to convert all of the ES6 to ES5 at run time, which may make our projects run much slower
- For the purpose of demo create a .html file and under script tag use an ES6 function syntax to pass default parameters or any other ES6 feature. If browser support ES6 feature you will get proper output else will get error `UnCaught SyntaxError: Unexpected token = `
- To get rid of ES6 non/not support error in browser, download and use/include Babel transpiler script library like: `<script src="babel.js URL">` and finally register/make it official with `<script type="text/babel">`

> **Note**: Now a days majority of browser supports most of the ES6 features so accordingly as per needs/requirements include Babel or other transpilers in HTML file.

> **Syntax & Example**:
```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <!-- include babel library to transpile/convert ES6 code to ES5 -->
    <script src="../assets/script/babel/babel_browser_5.8.29.min.js"></script>
    
    <!-- internal JavaScript - head section -->
    <script type="text/babel">
      // Write all JavaScript code here

      // ES6 function syntax with default parameter
      function showFullName(firstName='Dinanath', lastName='Jayaswal') {
        console.log(firstName + ' '+ lastName);
      }
      showFullName();
    </script>    

  </head>
  
  <body>

  </body>

</html>
```

3.4. Transpiling ES6 with babel and babel node
---------------------
Alternatively, install babel with nodejs ie npm package and use respective commands at CLI to transpile ES6 files into ES5.

3.5. Transpiling ES6 with Webpack
---------------------
- https://webpack.github.io/
- https://webpack.js.org/
- For the larger scale applications its advisable to use a build tool like `webpack` which helps to automate the process like transpiling, less/sass conversion, script/image/CSS bundling and more
- Webpack is a module bundler (bundle your assets, scripts, images, styles)
- Webpack takes modules with dependencies and emits static assets representing those modules
- Create a package.json file (contains module/dependency, documentation, project information) with the command: `npm init`
- Install webpack with node/npm with the command: `npm install -g webpack`
- Install babel-loader (helps to convert ES6 to ES5) node/npm with command: `npm install --save-dev babel-loader`
- Create a `webpack.config.js`
- Run command: `webpack`
- In the .html file with script src use a path of newly created `bundle.js` file

3.6. Typescript - Working and Transpiling with Typescript
---------------------
- Download and Install node (node comes with npm) (website: https://nodejs.org/en)
- After installation check version of node and npm by command: `node -v / npm -v`
- Install a `Text Editor` to write a code like `VS code`, `Sublime Text`, `Adobe Brackets` or any one of your choice
- Install a `transpiler` like `typescript` globally to transpile/convert a code into plain JavaScript, by using the command: `npm install typescript -g`
- In VS Code editor configure typescript: Press `CTRL+SHIFT+B` -> Choose Task Runner - > Typescript Watch Mode -> it will create `task.json`

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_es6_features_tutorial/3_transpiling_es6/3_6_1_choose_vscode_transpiler_typescript.png" alt="VScode - Select Typescript as Transpiler" title="VScode - Select Typescript as Transpiler" width="100%" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - VScode - Select Typescript as Transpiler</figcaption>
  </figure>
</p>

> **Syntax & Example**: `task.json`
```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558 
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "option": "watch",
      "problemMatcher": [
        "$tsc-watch"
      ]
    },
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": [
        "$tsc"
      ]
    }
  ]
}
```

- Create a typescript configuration (`tsconfig.json` file) by using the command: `tsc --init`
  - include/modify some settings in tsconfig.json: 
    - `"sourceMap": true,` - map files helps to debug (.ts to .js mapping)
    - `"outDir": "./scripts",` - typescript transpiler will generate/organize all .js files into scripts folder

> **Syntax & Example**: `tsconfig.json`
```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",
    "module": "commonjs",
    "outDir": "./scripts",
    "strict": true,
    "esModuleInterop": true
  }
}
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="././_images_es6_features_tutorial/3_transpiling_es6/3_6_2_tsconfig_json.png" alt="tsconfig.json" title="tsconfig.json" width="70%" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - tsconfig.json</figcaption>
  </figure>
</p>

- create a simple .ts file to verify its conversion/transpilation to .js

> **Syntax & Example**: `Typescript 3_6_es6_ts_transpiling.ts`
```typescript
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws an error: Cannot redeclare block-scoped variable - to solve issue use export {}

// export {};

console.log('Welcome to ES6');
let firstName: string = 'Dinanath';
let lastName: string = 'Jayaswal';
const country: string = 'India'
let isMale: boolean = true;
console.log(firstName + ' ' + lastName);

// ES6 function syntax with default parameter
function showFullName(_firstName = 'Dinanath', _lastName = 'Jayaswal') {
  console.log(_firstName + ' ' + _lastName);
}
showFullName();
```

- check typescript version by command: `tsc -v`
- check typescript help by command: `tsc -h` or `tsc --help`
- To convert/transpile individual .ts into .js file run command: `tsc fileName.ts`
- Run command for watch mode: `tsc filename.ts --watch` or to watch all files at once type command: `tsc --watch`

> **Syntax & Example**: `Typescript code converted to JavaScript 3_6_es6_ts_transpiling.js`
```javascript
"use strict";
// by default typescript consi: stringder all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
// export {};
console.log('Welcome to ES6');
var firstName = 'Dinanath';
var lastName = 'Jayaswal';
var country = 'India';
var isMale = true;
console.log(firstName + ' ' + lastName);
// ES6 function syntax with default parameter
function showFullName(_firstName, _lastName) {
    if (_firstName === void 0) { _firstName = 'Dinanath'; }
    if (_lastName === void 0) { _lastName = 'Jayaswal'; }
    console.log(_firstName + ' ' + _lastName);
}
showFullName();
//# sourceMappingURL=3_6_es6_ts_transpiling.js.map
```

- create an `index.html` file and include newly created .js file with script tag to check and verify the output

> **Syntax & Example**: index.html
```html
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

     <!-- internal style -->
     <style>
      /* css selector: { property:value; } */
      body {
        font-family: arial;
      }
    </style>

    <title>3_6_es6_ts_transpiling</title>

    <script src="./scripts/3_6_es6_ts_transpiling.js"></script>
   
  </head>

  <body>
      
    <h1>Working with ES6 & Typescript features</h1>

  </body>

</html>
```

- To Run a to run the app from virtual local web server install npm utilities like `serve, HTTP, lite-server, static` etc 
  - command: `npm install lite-server -g`
  - start server with the command: `lite-server` and check the output in the browser

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="././_images_es6_features_tutorial/3_transpiling_es6/3_6_3_app_project_folder_structure.png" alt="App-project folder structure" title="App-project folder structure" width="70%" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - App-project folder structure</figcaption>
  </figure>
</p>

3.7. ScratchJS - ES6 to ES5 code transpile/conversion
---------------------
- Typescript installation/transpilation process is pretty lengthy and tedious
- Alternatively, Simply we can add/install a `Google Chrome Extention` named `Scratch JS`, an add-on for DevTools which integrates both the Traceur and Babel transpilers, allowing us to test out the new JS features coming with ES6/ES2015
- `Scratch JS` also supports `CoffeeScript`, `LiveScript` and more compile-to-JS languages will be added soon
- To install `Scratch JS` as a `Google Chrome Extention`:
  - In google chrome web store https://chrome.google.com/webstore/category/extensions?hl=en-GB or at https://www.google.com/ search for Scratch JS
  - From searched result select Scratch JS and click -> ADD to Chrome
    
<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_es6_features_tutorial/3_transpiling_es6/3_7_1_scratchjs_web_store.png" alt="Chrome web store search scratchjs" title="Chrome web store search scratchjs" width="70%" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Chrome web store search scratchjs</figcaption>
  </figure>
</p>

<hr/>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_es6_features_tutorial/3_transpiling_es6/3_7_2_scratchjs_web_store.png" alt="Google search scratchjs" title="Google search scratchjs" width="70%" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Google search scratchjs</figcaption>
  </figure>
</p>

- Once extension installed properly, open developer tool (F12, Fn12, Right Click on web page Inspect), click on ScratchJS - at left side type ES6 code and right side check ES5 output

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_es6_features_tutorial/3_transpiling_es6/3_7_3_scratchjs_es6_results_es5.png" alt="Scratchjs ES6 to ES5 code conversion" title="Scratchjs ES6 to ES5 code conversion" width="100%" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Scratchjs ES6 to ES5 code conversion</figcaption>
  </figure>
</p>

Section 4. New Variables Creation Updating and Scoping
=====================
4.1. Purpose/challenges in ES5 (Why ES6)
---------------------
- `Hoisting` - Behind the scene JavaScript declare variables at the top
- `Functional scope` - `var` keyword got functional scope (accessible through-out the function body), at the same time var keyword variables also get hoisted
- `Let keyword block scope` - let keyword variables exist only inside `block { }`scope, but never hoisted

> **Syntax & Example**: `Typescript 4_1_es6_ts_var_hoisting.ts`
```typescript
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws an error: Cannot redeclare block-scoped variable - to solve issue use export {}

// export {};

greetUser1('Dinanath1'); //hoising funciton declaration will move to top

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
```

<hr />

> **Syntax & Example**: `JavaScript 4_1_es6_ts_var_hoisting.js`
```javascript
"use strict";
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws error: Cannot redeclare block-scoped variable - to solve issue use export {}
// export {};
greetUser1('Dinanath1');//hoising funciton declaration will move to top
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
greetUser1('Dinanath2'); 
//# sourceMappingURL=4_1_es6_ts_var_hoisting.js.map
```

4.2. let keyword
---------------------
- To `deal with scope` in JavaScript we have new keyword named `let` used to declare variables
- We use the let keyword to `create block scoping` in JavaScript in locations where we weren't able to do so before 
- `Let keyword block scope` - let keyword variables exist only inside `block { }`scope
- let keyword variables cannot be used before declaration (`never hoisted`)
- let keyword variables `cannot be re-declared`

> **Syntax & Example**: `Typescript 4_2_es6_ts_let.ts`
```typescript
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws an error: Cannot redeclare block-scoped variable - to solve issue use export {}

// export {};

function greetUser1(userName1: string) {
    if (userName1 === 'Dinanath1') {
        var greetings1 = 'Hello Dinanath, Welcome';
    } else {
        var greetings1 = 'Hello Guest';
    }
    console.log(greetings1); //var variables available outside as it have functional scope
    var greetings1: string; //hoisting variable declaration will move to top
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

function greetUser2(userName2: string) {
    let greetings2
    if (userName2 === 'Dinanath2') {
        greetings2 = 'Hello Dinanath2';
    } else {
        greetings2 = 'Hello Guest';
    }
    console.log(greetings2);
}

greetUser2('Dinanath2');

// ------------------------------ 

var num1: number = 10;
var num2: number = 20;

if (num1 === 10) {
    var num1: number = 100;
    let num2: number = 200;
    console.log('inside num1  : ' + num1);
    console.log('inside num2  : ' + num2);
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

let fName;
// let fName; //cannot redeclare block-scoped variable 'fName'
```

<hr />

> **Syntax & Example**: `JavaScript 4_2_es6_ts_let.js`
```javascript
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
```

4.3. let in for loop
---------------------
- While dealing with `closures and loops` its advisable to `use let` instead of `var`

> **Syntax & Example**: `Typescript 4_3_es6_ts_let_loop.ts`
```typescript
// export {};

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log('var based for loop', i); //6
    }, 1000);
}

// ------------------------------

for (let j = 1; j <= 5; j++) {
    setTimeout(() => {
        console.log('let based for loop', j); //1,2,3,4,5
    }, 1000);
}
```

<hr />

> **Syntax & Example**: `JavaScript 4_3_es6_ts_let_loop.js`
```javascript
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
```

4.4. const keyword (also known as `"immutable variables"`),
---------------------
- Like the let keyword, we can also use `const` an alternative for declaring variables
- const is short for `constant` allows us to set constant variables which `shouldn't be reassigned`
- We can not change the value of const variable, so use const to define `fixed set of values` also to `protect the values` of certain variables
- Creating/Using an existing const variable again or re-assigning value to const variable generates `TypeError, SyntaxError`
- const keyword is used to define/create `variable with read-only` constants
- const must have some value `while declaration/initialized`
- const value is fixed, `not to change/re-assigned` in future
- const is also having `block scope`
- the const value `never hoisted`
- However, we can still change object properties or array elements

### 4.4.1 const keyword variable

> **Syntax & Example**: `Typescript 4_4_1_ts_const_var.ts`
```typescript
// export {};

let firstName

//const firstName1; //error - const must have some value `while declaration/initialized`
const lastName = 'Jayaswal';
// const lastName //error - const value is fixed, `not to change/re-assigned` in future

console.log(firstName);
console.log(lastName);
```

<hr />

> **Syntax & Example**: `JavaScript 4_4_1_ts_const_var.js`
```javascript
"use strict";
// export {};
var firstName;
//const firstName1; //error - const must have some value `while declaration/initialized`
var lastName = 'Jayaswal';
// const lastName //error - const value is fixed, `not to change/re-assigned` in future
console.log(firstName);
console.log(lastName);
//# sourceMappingURL=4_4_1_ts_const_var.js.map
```

### 4.4.2 const with array

> **Syntax & Example**: `Typescript 4_4_2_ts_const_array.ts`
```typescript
// export {};

const PersonArray = ['Dinanath', 'Jayaswal', 35, 'Male', true];

console.log(PersonArray[0]);

// we can re-assign value
PersonArray[0] = 'Vedika';

console.log(PersonArray[0]);

//error - we cannot re-assign new array
/* PersonArray = {

}*/
```

<hr />

> **Syntax & Example**: `JavaScript 4_4_2_ts_const_array.js`
```javascript
"use strict";
// export {};
var PersonArray = ['Dinanath', 'Jayaswal', 35, 'Male', true];
console.log(PersonArray[0]);
// we can re-assign value
PersonArray[0] = 'Vedika';
console.log(PersonArray[0]);
//error - we cannot re-assign new array
/* PersonArray = {

}*/ 
//# sourceMappingURL=4_4_2_ts_const_array.js.map
```

### 4.4.3 const with object

> **Syntax & Example**: `Typescript 4_4_3_ts_const_object.ts`
```typescript
// export {};

const Person = {
  firstName: 'Dinanath',
  lastName: 'Jayaswal',
  age: 35,
  gender: 'Male',
  isMale: true
}

console.log(Person.firstName);

// we can re-assign value
Person.firstName = 'Vedika';

console.log(Person.firstName);

//error - we cannot re-assign new object
/* Person = {

} */
```

<hr />

> **Syntax & Example**: `JavaScript 4_4_3_ts_const_object.js`
```javascript
"use strict";
// export {};
var Person = {
    firstName: 'Dinanath',
    lastName: 'Jayaswal',
    age: 35,
    gender: 'Male',
    isMale: true
};
console.log(Person.firstName);
// we can re-assign value
Person.firstName = 'Vedika';
console.log(Person.firstName);
//error - we cannot re-assign new object
/* Person = {

} */ 
//# sourceMappingURL=4_4_3_ts_const_object.js.map
```

4.5 let vs const
---------------------
- If variables have `one time assignments (fixed value, not changed in future)` use const
- If value re-assignments/`value updation` requires use `let`
- Const variables need value at the time of definition; `const name='Dinanath';`
- Let variables can be defined/initialized with empty value; `let name;`
- Const variables are `immutable, not changeable ` variables
- Let variables are `mutable, can be changed or re-assigned`


Section 5. Function Improvements objects
=====================


Section 6. Extended Parameter Handling
=====================


Section 7. Template Strings Literals
=====================

Section 8. Destructuring Assignment
=====================


Section 9. Iterables and Iterators Looping
=====================

Section 10. Classes
=====================


Section 11. Generators
=====================


Section 12. Sets and WeakSets
=====================


Section 13. Map and Weak Map
=====================


Section 14. Symbols
=====================


Section 15. Modules
=====================


Section 16. Whats Next Step?
=====================
This is superb! Thank you for joining me for `JavaScript ES6-ECMAScript 6-ECMAScript 2015 Features for everyone`. I hope you will start checking/testing and incorporating these features into your code right away. I hope now you have solid understanding of ES6 new features. Your next step could be looking into [ES7 standards/features](http://kangax.github.io/compat-table/es2016plus/) which is very new and not purely tested.

reference
---------------------
### Websites
- http://es6-features.org
- https://www.ecma-international.org/ecma-262/6.0/
- https://babeljs.io/docs/en/learn
- https://www.w3schools.com/js/js_es6.asp

### Books
- http://exploringjs.com/es6/
- https://leanpub.com/understandinges6/read/
