/*
✔ Primitive types (number, string, boolean, etc.) are basic and hold single values.
✔ Non-primitive types (Array, Class, Interface, etc.) are complex and hold structured data.

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

5.	Undefined
•	Represents a variable declared but not assigned (let y; → y is undefined).
let notAssigned: undefined; // Example of an undefined type
let uninitialized: undefined; // Example of an uninitialized variable
let unassigned: undefined = undefined; // Explicitly set to undefined

6.	Any
•	A flexible type that allows any value (disables TypeScript checks).
•	Avoid using unless necessary (let z: any = "Hello"; z = 10;).
let flexible: any = "Hello"; // Example of an any type
flexible = 10; // Can be reassigned to any type


7.	Union Type
•	Allows multiple types for a variable (let id: string | number = "123";).
let id: string | number = "123"; // Example of a union type
id = 456; // Can be reassigned to a number

8.	Void
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

2.	Tuple
•	Represents a fixed-size array with known types (e.g., [string, number]).
let user: [string, number] = ["Alice", 30]; // Example of a tuple type

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


