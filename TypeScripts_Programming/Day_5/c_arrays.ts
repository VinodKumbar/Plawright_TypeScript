console.log("Arrays in TypeScript");

let fruits: string[] = ["Apple", "Banana", "Cherry", "Avocado", "Mango", "Blueberry"];
console.log("Printing fruits array: " + fruits);

console.log("-------------------------------------------------------------------------------------------------");

console.log("Length of fruits array: " + fruits.length);

console.log("-------------------------------------------------------------------------------------------------");

console.log("Accessing elements in the fruits array:");
console.log("fruits[2]: " + fruits[2]);
console.log("fruits[0]: " + fruits[0]);
console.log("fruits[1]: " + fruits[1]);
console.log("-------------------------------------------------------------------------------------------------");

console.log("Adding a new fruit to the array:");
fruits.push("Pineapple");
console.log("Updated fruits array: " + fruits);
console.log("-------------------------------------------------------------------------------------------------");

console.log("Removing the last fruit from the array:");
fruits.pop();
console.log("Updated fruits array: " + fruits);
console.log("-------------------------------------------------------------------------------------------------");

console.log("Array Sort Example:");
fruits.sort();
console.log("Sorted fruits array: " + fruits);
console.log("-------------------------------------------------------------------------------------------------");

console.log("Iterating through the fruits array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
console.log("-------------------------------------------------------------------------------------------------");

console.log("Using forEach to iterate through the fruits array:");
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});
console.log("-------------------------------------------------------------------------------------------------");

console.log("Using Reduce to concatenate all fruits into a single string:");
let allFruits: string = fruits.reduce((accumulator, current) => {
    return accumulator + ", " + current;
});
console.log("All fruits: " + allFruits);

const marks: number[] = [85, 90, 78, 92, 88];
console.log("Marks array: " + marks);
console.log("Using Reduce to calculate the sum of marks:");
const sum = marks.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of marks: " + sum);

console.log("-------------------------------------------------------------------------------------------------");

console.log("Using Filter to find fruits that start with 'B':");
let bFruits: string[] = fruits.filter(fruit => fruit.startsWith("B"));
console.log("Fruits that start with 'B': " + bFruits);
console.log("-------------------------------------------------------------------------------------------------");

console.log("Using Map to create a new array with the length of each fruit:");
let fruitLengths: number[] = fruits.map(fruit => fruit.length);
console.log("Lengths of each fruit: " + fruitLengths);
console.log("-------------------------------------------------------------------------------------------------");