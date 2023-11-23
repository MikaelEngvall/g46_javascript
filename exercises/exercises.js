
// Helper function to log exercise messages in red
function logExercise(message) {
    console.log(message);

}

// Exercise 1
logExercise("Exercise 1");
let currentDate = new Date();
let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
let formattedDate1 = currentDate.toLocaleDateString('en-US', options);
let formattedDate2 = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
console.log(`${formattedDate1}, ${formattedDate2}`);
console.log(" ");

// Exercise 2
logExercise("Exercise 2");
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let givenYear = 2023; // Change this to the desired year
if (!isLeapYear(givenYear)) {
console.log(`${givenYear} is not a leap year`);
} else {
    console.log(`${givenYear} is a leap year`); 
}
console.log(" ");

// Exercise 3
logExercise("Exercise 3");
for (let year = 2014; year <= 2050; year++) {
    let january1st = new Date(year, 0, 1);
    if (january1st.getDay() === 0) {
        console.log(`1st January ${year} is a Sunday`);
    }
}
console.log(" ");

/*// Exercise 4
logExercise("Exercise 4");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        
        console.log(`Multiplication: ${num1 * num2}`);
        console.log(`Division: ${num1 / num2}`);
        
        rl.close();
    });
}); */

// Exercise 5
logExercise("Exercise 5");
function convertTemperature(temp, scale) {
    if (scale === 'C') {
        return `${temp}°C is ${(temp * 9/5) + 32}°F`;
    } else if (scale === 'F') {
        return `${temp}°F is ${(temp - 32) * 5/9}°C`;
    }
}
console.log(convertTemperature(60, 'C'));
console.log(convertTemperature(45, 'F'));
console.log(" ");

// Exercise 6
logExercise("Exercise 6");
function removeCharAtPosition(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}
let inputString = "Hello, World!";
let positionToRemove = 7;
console.log(removeCharAtPosition(inputString, positionToRemove));
console.log(" ");

// Exercise 7
logExercise("Exercise 7");
function reverseString(str) {
    return str.split('').reverse().join('');
}
let originalString = "Hello, World!";
console.log(reverseString(originalString));
console.log(" ");

// Exercise 8
logExercise("Exercise 8");
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of array: ${sumArray(numbers)}`);
console.log(" ");

// Exercise 9
logExercise("Exercise 9");
function findLargestElement(arr) {
    return Math.max(...arr);
}
console.log(`Largest element: ${findLargestElement(numbers)}`);
console.log(" ");

// Exercise 10
logExercise("Exercise 10");
function filterOutEvenNumbers(arr) {
    return arr.filter(num => num % 2 == 0);
}
console.log(`Array with even numbers: ${filterOutEvenNumbers(numbers)}`);
console.log(" ");

// Exercise 11 
logExercise("Exercise 11");
function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(`Array with odd numbers: ${filterOutOddNumbers(numbers)}`);
console.log(" ");

// Exercise 12
logExercise("Exercise 12");
let squaredArray = numbers.map(num => num ** 2);
console.log(`Squared array: ${squaredArray}`);
console.log(" ");

// Exercise 13
logExercise("Exercise 13");
let person = {
    name: "John Doe",
    age: 25,
    address: "123 Main Street"
};
console.log(person);
console.log(" ");

// Exercise 14
logExercise("Exercise 14");
function getPropertyValue(obj, propName) {
    return obj[propName];
}
let propertyName = "age";
console.log(`Value of ${propertyName}: ${getPropertyValue(person, propertyName)}`);
console.log(" ");

// Exercise 15
logExercise("Exercise 15");
function addProperty(obj, propName, propValue) {
    obj[propName] = propValue;
}
function deleteProperty(obj, propName) {
    delete obj[propName];
}
let newPropertyName = "email";
let newPropertyValue = "john.doe@example.com";
addProperty(person, newPropertyName, newPropertyValue);
console.log(person);
deleteProperty(person, newPropertyName);
console.log(person);
console.log(" ");

// Exercise 16
logExercise("Exercise 16");
let nestedObject = {
    person: {
        name: "Alice",
        age: 30,
        address: {
            street: "Sveavägen 18",
            city: "Stockholm",
            country: "Sweden"
        }
    }
};
console.log(nestedObject);
console.log(" ");

// Exercise 17
logExercise("Exercise 17");
function filterObject(obj, condition) {
    let filteredObj = {};
    for (let key in obj) {
        if (condition(obj[key])) {
            filteredObj[key] = obj[key];
        }
    }
    return filteredObj;
}
let ageCondition = value => typeof value === 'number' && value > 25;
console.log(filterObject(nestedObject.person, ageCondition));
console.log(" ");

// Exercise 18
logExercise("Exercise 18");
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };  // The function uses the object spread syntax (...) to create a new object that combines the properties of both obj1 and obj2.
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
let objA = { a: 1, b: 2 };
let objB = { b: 3, c: 4 };
console.log(mergeObjects(objA, objB));
