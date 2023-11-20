// JavaScript Variables
let age = 25;
let temperature = -3.5;

let name = "Mehrdad";
let message = "Hello JavaScript!";
console.log(message);

let myVar = 10; // number
myVar = "10"; // string

let isRaining = true; // or false

let person = { id: 1, name: "Alice", isStudent: false };
let numbers = [1, 2, 3, 4, 5];

let nulVar = null;
let description;

const PI = 3.14;
//PI = 13.141; // TypeError
console.log("PI:", PI);
const BASED_API_URL = "http://localhost:8080/api/v1/";

const student = { name: "John" };

for (let i = 1; i <= 10; i++) {
  /*if (i % 2 == 0) {
    console.log(i, " is ", "even");
  } else {
    console.log(i, " is ", "odd");
  }*/
  console.log(i % 2 == 0 ? 'even' : 'odd');
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Tuseday":
    console.log('It\'s the second day of the week.');
    break;
    default:
}


// Operators
let a = 10;
let b = 10;
let c = a + b;

let n1 = 10;
let n2 = "10";
let isEqual = (n1 == n2); // true
let isStrictEqual = 10 === "10"; // false

// Function Declaration
function greet(name){
    console.log("Hello" , name , "! ;)");
} 


greet("JavaScript");


function addition(n1,n2){
    return n1 + n2;
}

const result = addition(10,20); // 30
console.log(result);

function sum(...numbers) {
    let total = 0;
    for ( let number of numbers){
        total +=number;
    }
    return total;
}
console.log(sum(1,2,3,4)); // 10

// Arrow Function
const _greet = (name) => console.log("Hello" , name , "! ;)");
_greet("JS");


const _addition = (n1,n2) => n1 + n2;
console.log(_addition(10,20));






