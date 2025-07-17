// Aithmetic Operators
let a: number = 10;
let b: number = 5;

// Performing arithmetic operations
let sum: number = a + b; // Addition
let difference: number = a - b; // Subtraction
let product: number = a * b; // Multiplication
let quotient: number = a / b; // Division
let remainder: number = a % b; // Modulus


// Displaying results
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);   
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);

console.log('------------------------------------------------------------------------------------------------------------');


// Assignment Operators
let x: number = 20;
console.log(`Initial value of x: ${x}`);

// Using assignment operators
x += 5; // x = x + 5
console.log(`Updated x after addition: ${x}`);

x -= 3; // x = x - 3
console.log(`Updated x after subtraction: ${x}`);

x *= 2; // x = x * 2
console.log(`Updated x after multiplication: ${x}`);

x /= 4; // x = x / 4
console.log(`Updated x after division: ${x}`);

x %= 3; // x = x % 3
console.log(`Updated x after modulus: ${x}`);

console.log('------------------------------------------------------------------------------------------------------------');


// Logical Operators
let isTrue: boolean = true;
let isFalse: boolean = false;
let andResult: boolean = isTrue && isFalse; // Logical AND
let orResult: boolean = isTrue || isFalse; // Logical OR
let notResult: boolean = !isTrue; // Logical NOT

// Displaying logical results
console.log(`AND Result: ${andResult}`);
console.log(`OR Result: ${orResult}`);
console.log(`NOT Result: ${notResult}`);

console.log('------------------------------------------------------------------------------------------------------------');

// Comparison Operators
let num1: number = 15;
let num2: number = 20;

console.log(`Comparing ${num1} and ${num2}`);

let isEqual: boolean = num1 === num2; // Equal to
let isNotEqual: boolean = num1 !== num2; // Not equal to
let isGreater: boolean = num1 > num2; // Greater than
let isLess: boolean = num1 < num2; // Less than
let isGreaterOrEqual: boolean = num1 >= num2; // Greater than or equal
let isLessOrEqual: boolean = num1 <= num2; // Less than or equal

// Displaying comparison results
console.log(`Is Equal: ${isEqual}`);
console.log(`Is Not Equal: ${isNotEqual}`);
console.log(`Is Greater: ${isGreater}`);
console.log(`Is Less: ${isLess}`);
console.log(`Is Greater or Equal: ${isGreaterOrEqual}`);
console.log(`Is Less or Equal: ${isLessOrEqual}`);
console.log('------------------------------------------------------------------------------------------------------------');