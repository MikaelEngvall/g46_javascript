// Exercise 1
console.log("Exercise 1");
let currentDate = new Date();
let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
let formattedDate1 = currentDate.toLocaleDateString('en-US', options);
let formattedDate2 = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
console.log(`${formattedDate1}, ${formattedDate2}`);

// Exercise 2
console.log("Exercise 2");
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let givenYear = 2023; // Change this to the desired year
console.log(`${givenYear} is a leap year: ${isLeapYear(givenYear)}`);

// Exercise 3
console.log("Exercise 3");
for (let year = 2014; year <= 2050; year++) {
    let january1st = new Date(year, 0, 1);
    if (january1st.getDay() === 0) {
        console.log(`1st January ${year} is a Sunday`);
    }
}

/*// Exercise 4
console.log("Exercise 4");
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
console.log("Exercise 5");
function convertTemperature(temp, scale) {
    if (scale === 'C') {
        return `${temp}°C is ${(temp * 9/5) + 32}°F`;
    } else if (scale === 'F') {
        return `${temp}°F is ${(temp - 32) * 5/9}°C`;
    }
}
console.log(convertTemperature(60, 'C'));
console.log(convertTemperature(45, 'F'));

// Exercise 6
console.log("Exercise 6");
function removeCharAtPosition(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}
let inputString = "Hello, World!";
let positionToRemove = 7;
console.log(removeCharAtPosition(inputString, positionToRemove));

// Exercise 7
console.log("Exercise 7");
function reverseString(str) {
    return str.split('').reverse().join('');
}
let originalString = "Hello, World!";
console.log(reverseString(originalString));

// Exercise 8
console.log("Exercise 8");
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of array: ${sumArray(numbers)}`);

// Exercise 9
console.log("Exercise 9");
function findLargestElement(arr) {
    return Math.max(...arr);
}
console.log(`Largest element: ${findLargestElement(numbers)}`);

// Exercise 10
console.log("Exercise 10");
function filterOutEvenNumbers(arr) {
    return arr.filter(num => num % 2 == 0);
}
console.log(`Array with even numbers: ${filterOutEvenNumbers(numbers)}`);

// Exercise 11 
console.log("Exercise 11");
function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(`Array with odd numbers: ${filterOutOddNumbers(numbers)}`);

// Exercise 12
console.log("Exercise 12");
let squaredArray = numbers.map(num => num ** 2);
console.log(`Squared array: ${squaredArray}`);

// Exercise 13
console.log("Exercise 13");
let person = {
    name: "John Doe",
    age: 25,
    address: "123 Main Street"
};

// Exercise 14
console.log("Exercise 14");
function getPropertyValue(obj, propName) {
    return obj[propName];
}
let propertyName = "age";
console.log(`Value of ${propertyName}: ${getPropertyValue(person, propertyName)}`);

// Exercise 15
console.log("Exercise 15");
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

// Exercise 16
console.log("Exercise 16");
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

// Exercise 17
console.log("Exercise 17");
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

// Exercise 18
console.log("Exercise 18");
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let objA = { a: 1, b: 2 };
let objB = { b: 3, c: 4 };
console.log(mergeObjects(objA, objB));
