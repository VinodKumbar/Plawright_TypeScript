console.log("String Declarations:");

let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);

console.log("----------------------------------------------------------------------------------------")

console.log("String Concatenation:");
console.log("Hello " + firstName + " " + lastName + "! Welcome to Visual Studio.");


console.log("----------------------------------------------------------------------------------------")


console.log("Using Template Literals:");
console.log(`Full Name: ${fullName}`);
let greeting: string = `Hello, ${firstName}! Welcome to TypeScript.`;
console.log(greeting);


console.log("----------------------------------------------------------------------------------------")

console.log("String Length:", fullName.length);


console.log("First Character:", fullName.charAt(0));
console.log("Second Character:", fullName.charAt(1));
console.log("Third Character:", fullName.charAt(2));

console.log("----------------------------------------------------------------------------------------");

console.log("Last Character:", fullName.charAt(fullName.length - 1));
console.log("Full Name in Characters:");
for (let i = 0; i < fullName.length; i++) {
    console.log(`Character at index ${i}: ${fullName.charAt(i)}`);
}

console.log("----------------------------------------------------------------------------------------")
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("Substring (0-4):", fullName.substring(0, 4));
console.log("Index of 'Doe':", fullName.indexOf("Doe"));
console.log("Replace 'John' with 'Jane':", fullName.replace("John", "Jane"));
console.log("Split Full Name:", fullName.split(" "));
console.log("Trimmed Full Name:", fullName.trim());
console.log("Starts with 'John':", fullName.startsWith("John"));