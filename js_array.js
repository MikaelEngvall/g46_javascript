let numbers = [1, 2, 3, 4, 5];

console.log(numbers[2]);
numbers[1] = 10;
// adding elements to the end of the array
numbers.push(6, 7);

// [1, 2, 3, 4, 5, 6, 7]
// removing 
numbers.pop();

numbers.forEach( number => console.log(number));

let evenNumbers = numbers.filter(number => number % 2 === 0); // [2, 4]

// map & reduce
console.log(numbers.sort());