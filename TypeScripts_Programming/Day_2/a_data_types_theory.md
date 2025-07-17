/*
✔ Primitive types (number, string, boolean, etc.) are basic and hold single values.
✔ Non-primitive types (Array, Class, Interface, etc.) are complex and hold structured data.


 1. Primitive Data Types  - Number, String, Boolean, Null, Any, Void, Undefined
 2. Non-Primitive Data Types - Array, Tuple, Object, Class, Enum, Interface, Function

 -> Primitive Data Type will allow only one type of value to be assigned to a variable at a time.
 -> Non-Primitive Data Type will allow multiple types of values to be assigned to a variable at a time.

*/


/* Primitive Types (Built-in Types)
1.	Number
•	Represents both integers and decimals (e.g., 42, 3.14).
let age: number = 30; // Example of a number type

2.	String
•	Represents text data.
•	Can be written in:
o	Single quotes ('Hello')
o	Double quotes ("Hello")
o	Backticks (`Hello ${name}`) for template literals.
let name: string = "John"; // Example of a string type
let greeting: string = `Hello, ${name}`; // Template literal example

3.	Boolean
•	Represents true or false values.
•	Used in conditions (e.g., if (isLoggedIn) {...}).
let isLoggedIn: boolean = true; // Example of a boolean type

4.	Null
•	Represents an intentional empty value (let x = null).
let emptyValue: null = null; // Example of a null type


6.	Any
•	A flexible type that allows any value (disables TypeScript checks).
•	Avoid using unless necessary (let z: any = "Hello"; z = 10;).
let flexible: any = "Hello"; // Example of an any type
flexible = 10; // Can be reassigned to any type


7.	Void
•	Used for functions that don’t return anything (function log(): void { console.log("Hi"); }).
function logMessage(): void {
    console.log("This function does not return anything.");
}
let log: () => void = logMessage; // Example of a void type function
log(); // Call the function
*/



// Non-Primitive Types (Complex Types)
/*
1.	Array
•	Represents a collection of values (e.g., [1, 2, 3]).
let numbers: number[] = [1, 2, 3]; // Example of an array type

3.	Object
•	Represents a collection of key-value pairs.
let person: { name: string; age: number } = { name: "Bob", age: 25 }; // Example of an object type

4.	Class
•	Represents a blueprint for creating objects.
class Car {
    constructor(public make: string, public model: string) {}
}
let myCar: Car = new Car("Toyota", "Camry"); // Example of a class type

5.	Interface
•	Represents a contract for objects.
interface Animal {
    name: string;
    sound: () => void;
}
let dog: Animal = {
    name: "Buddy",
    sound: () => console.log("Woof!"),
}; // Example of an interface type

6.	Function
•	Represents a callable block of code.
type Greet = (name: string) => void;
let greet: Greet = (name) => console.log(`Hello, ${name}!`); // Example of a function type
*/


