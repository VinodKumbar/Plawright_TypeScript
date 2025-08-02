let age2: number = 25; // age is a number

// let is Declare a block-scoped variable
// age is Variable name
// number is Type annotation - TypeScript type (must be number)
// 25 is Initial value assigned to age


let personName: string = "John"; // personName is a string

console.log("my name is " + personName + " and I am " + age + " years old."); // Output: John is 25 years old.

console.log("*******************************************************************************************************"); 

// Number type example

let burgerPrice : number = 100.55; // burgerPrice is a number
console.log("The price of the burger is: " + burgerPrice); // Output: The price of the burger is: 100.55

console.log("*******************************************************************************************************"); 

// String type example
let welcomeMessage: string = "Hello, TypeScript!"; // welcomeMessage is a string
console.log(welcomeMessage); // Output: Hello, TypeScript!

console.log("*******************************************************************************************************");

// Boolean type example
let isAvailable: boolean = true; // isAvailable is a boolean
console.log("Is the burger available? " + isAvailable); // Output: Is the burger available? true

console.log("*******************************************************************************************************");

// Null type example
let emptyValue: null = null; // emptyValue is null
console.log("The value is: " + emptyValue); // Output: The value is: null

console.log("*******************************************************************************************************");

// Any type example
let randomValue: any = "This can be anything"; // randomValue can be of any type
randomValue = 42; // Now it's a number
console.log("The random value is: " + randomValue); // Output: The random value is: 42  
console.log("*******************************************************************************************************");

// Void type example
 function show(): void{     // show is a function that returns void
     // This function does not return anything
     console.log("Welcome everyone to TypeScript!");
 }
show(); // Output: Welcome everyone to TypeScript!
console.log("*******************************************************************************************************");
 function addNumbers(x:number, y:number): number { // addNumbers is a function that takes two numbers and returns a number
     let sum: number = x + y; // sum is a number
    console.log("Sum of x and y is: ", sum); // Output: Sum of x and y is: 30
    return sum;
 }
 let result = addNumbers(10, 20); // Call the addNumbers function to execute it
 console.log("The result is: ", result); // Output: The result is: 30