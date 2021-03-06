/* import _ from 'lodash';
function component() {
     var element = document.createElement('div');
// Lodash, now imported by this script
     element.innerHTML =  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     return element;
}

document.body.appendChild(component()); */

// ------ Coding ES6 here
/* function f() {
    let x = "data";
    console.log(x);
    
}
console.log(f());
*/

// 1- Let
/* let a = 5;
let b = 100;
if(true) {
    let a = 60;
    var c = 10;
    console.log(a/c);
}
*/
// 2- Const 
// fixed, constant value to variable

/* const  a = 50;
a = 60; // errors right now

const b = "Hello we are here";
b = "Assign me any task"; // errors two

// if we can use it for array - it will be good

const LANGUAGES = ['JS','JAVA','Python','Ruby','Go'];

LANGUAGES = "JavAScript"; // shows error.
LANGUAGES.push('JAVA'); // Works fine.

console.log(LANGUAGES); // show data of array
*/


/* 3.Arrow Function */

// Old function
/* 
function oldFunc() {
    console.log('Hello world here');
}

// New function

var newOne = () => {
    console.log('Hello baby!!!');
}

// first part: declaring a variable, next assigning the function to it.

let newOneFunc = (a,b) => {
    console.log( a + b);
}
newOneFunc(30,40);

// Testing function override variable
 
let runFunction = (a = 10, b) => {
    return a + b;
}
runFunction(20); // not working, cause by b not valid
runFunction(40,10); // 50
let result = runFunction(40,10);
console.log(result);
*/

// 4. For loop
/* 
let arr = [4,5,8,9];
for (let value of arr) {
    console.log(value);
}

let string = "Toilatu";
for (let char of string) {
    console.log(char);
}
*/


// 5. Spread Attribute
// not passing array, passing elements 

/// 01. without spread
/*
let sumAll = (arr) => {
    console.log(arr);

    let sum = 0;
    for(let element of arr) {
        sum += element;
    }
    console.log(sum);
}
sumAll([10,45,88,99,443]);

/// 02. use spread
let sumAll2 = (...arr) => {
    console.log(arr);
    let sum = 0;
    for(let element of arr) {
        sum += element;
    }
    console.log(sum);
}
sumAll2(50,44,88,91); */
/*
// More useful
let arr = [10,50,60];
//Math.max(arr); // will show error


let arr2 = [50,44,11];
console.log(Math.max(...arr2)); // 50

*/
// Map, Sets - will use them laterw'

// Some best practices with ES6
/// T01. Quickly logging to Console
/* let name = 'Tu Nguyen';
let age = 30;

console.log({name, age}); // use object literal to log to console

// T02. Coercing to a string
let num = 2;
let numString = `${num}`;
console.log({num, numString}); // 

// T03. Array destructing
let a=3, b=4;
[a,b] = [b,a];

// T04. Concating Array
arr1 = ['London','Shanghai','Singapore','Bangkok'];
arr2 = ['Boston','Mexico City'];

arrAll=[...arr1,'Hochiminh City','Danang',...arr2];
console.log(arrAll);
*/

// Code Classes 
class Person {                                          // The 'class' keyword
    constructor(name, age) {                            // Constructors
        this.name = name;
        this.age = age;
    }
}

class Developer extends Person {                        // The 'extends' keyword
    constructor(name, age, ...languages) {              // Rest parameters
        super(name, age);                               // Super calls
        this.languages = [...languages];                // The spread operator
    }
    printLanguages() {                                  // Short method definitions
        for(let lang of this.languages) {               // The for..of loop
            console.log(lang);
        }
    }
}

let me = new Developer("Tu", 30, "ES5", "ES6");     // Block scoping
let myFriend = new Developer("Dai",30,"React","Vue"); // test

console.log(me);
console.log(myFriend);