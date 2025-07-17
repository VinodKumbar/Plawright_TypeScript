console.log("This is a function in TypeScript");

function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

console.log(greet("John"));
console.log(greet("Alice"));
console.log("-------------------------------------------------------------------------------------------------")

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));
console.log(add(20, 30));
console.log("-------------------------------------------------------------------------------------------------")

console.log("Anonymous function example:");


const multiply = function(x: number, y: number): number {
    return x * y;
};

console.log(multiply(5, 10));
console.log(multiply(20, 30));
console.log("-------------------------------------------------------------------------------------------------")

console.log("Arrow function example:");
const divide = (x: number, y: number): number => {
    return x / y;
};
console.log(divide(20, 5));
console.log(divide(100, 25));
console.log("-------------------------------------------------------------------------------------------------");
