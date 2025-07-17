// Variable is a container for storing data values.

/*

 x = 10 ; // x is a variable that holds the value 10
 y = 20; // y is a variable that holds the value 20


*/
// Variables can be used to store different types of data, such as numbers, strings, and booleans.
// In TypeScript, you can specify the type of a variable using type annotations.

// Variables can be declared using let, const, or var keywords

let age: number = 30; // age is a variable of type number
const firstName: string = "John"; // firstName is a variable of type string

var z: number = 30; // z is a variable of type number - NOT RECOMMENDED to use var in TypeScript



console.log(age); // Output: 30
console.log(firstName); // Output: John


/*
*Temporary Change (Only for current PowerShell session)*

Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process


*Permanent Change (Recommended for development use)Run PowerShell as Administrator, then:*

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

*/

/* 


// var global level variable
var globalVariable = "I am a global variable"; // Global variable

//let and const are block scoped variables
let blockScopedVariable = "I am a block scoped variable"; // Block scoped variable
const constantVariable = "I am a constant variable"; // Constant variable

difference between let, const, and var:
 let: Block-scoped variable that can be reassigned.
 const: Block-scoped variable that cannot be reassigned.
var: Function-scoped variable that can be reassigned. */