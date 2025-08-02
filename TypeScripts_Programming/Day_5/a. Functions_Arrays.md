A. Functions

1. Named Function
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
greet("Alice"); // Returns "Hello, Alice!"

2. Anonymous Function
```typescript
const greet = function(name: string): string {
    return `Hello, ${name}!`;
};
```
greet("Bob"); // Returns "Hello, Bob!"

3. Arrow Function
```typescript
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};
```
greet("Charlie"); // Returns "Hello, Charlie!"

******************************************************************************************************************

B. Arrays
1. Array Declaration
```typescript
const fruits: string[] = ["Apple", "Banana", "Cherry", "Avocado", "Blueberry"];

console.log(fruits[0]); // Outputs "Apple"

2. Array addition and Removal 
```typescript
fruits.push("Date");
console.log(fruits.length); // Outputs 6

```typescript
fruits.pop();
console.log(fruits.length); // Outputs 5
```
3. Array Sorting
```typescript
fruits.sort();
console.log(fruits); // Outputs ["Apple", "Avocado", "Banana", "Blueberry", "Cherry", "Date"]
```
4. Array Modification
```typescript
fruits[2] = "Mango";
console.log(fruits[2]); // Outputs "Mango"

5. Array Length
```typescript
console.log(fruits.length); // Outputs 4
```
6. Array Iteration
```typescript
fruits.forEach((fruit) => {
    console.log(fruit);
});
// Outputs each fruit in the array print the output
// Apple
// Avocado
// Banana
// Cherry
// Date
// Blueberry
```
7. Array Slicing
```typescript
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Outputs ["Avocado", "Banana"]


8. reduce Method : reduces an array to a single value by applying a function to each element.
```typescript
const numbers: number[] = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Outputs 10

9. filter Method : filters elements of an array based on a condition.
```typescript
const filteredFruits = fruits.filter((fruit) => fruit.startsWith("A"));
console.log(filteredFruits); // Outputs ["Apple"]

10. map Method : creates a new array by applying a function to each element of the original array.
```typescript
const fruitLengths = fruits.map((fruit) => fruit.length);
console.log(fruitLengths); // Outputs [5, 6, 6, 4, 6]