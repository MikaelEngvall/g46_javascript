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



let _name = "John";
let _age = 30;

// backticks `
let _message = `Hello, my name is ${_name} and I am ${_age} years old.`;
console.log(_message);


function add(x = 0, y = 0){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multipy(x,y){
    return x * y;
}

function divide(x, y){
    if(y === 0){
        throw new Error("Cannot devide by zero!");
    }
    return x / y;
}

function calculate( num1, num2, operation){
    return operation(num1, num2);
}

console.log(calculate(10, 7, subtract));


try {
    console.log(calculate(10, 0, divide));
} catch(error){
    console.log("Caught an error:",error.message);
} finally {
    console.log("finally block has been executed! :)")
}



// String & Date examples
let text = "Hello, World!";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.indexOf('World'));
console.log(text.slice(0, 5));

const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getSeconds());

console.log(currentDate.toLocaleDateString('sv-SE')); 