// Conditional Statements in TypeScript
console.log("If statements");
let age: number = 15;
console.log(`Age: ${age}`);

// Check if the person is an adult
let isAdult: boolean = age >= 18; // Check if the person is an adult

if (isAdult) {
    console.log("The person is an adult.");
} else {
    console.log("The person is not an adult.");
}


console.log('------------------------------------------------------------------------------------------------------------');


console.log("If-else statements");
let score: number = 49.5; // Example score
console.log(`Score: ${score}`);
if (score >= 50) {
    console.log("The student has passed.");
} else {
    console.log("The student has failed.");
}
console.log('------------------------------------------------------------------------------------------------------------');

console.log("Else if statements");
let temperature: number = 25; // Example temperature in Celsius
console.log(`Temperature: ${temperature}`);


// Check the temperature and print appropriate message
if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a cold day.");
}   
console.log('------------------------------------------------------------------------------------------------------------');

// switch statements
console.log("Switch statements");
// Example of a switch statement to determine the day of the week

let day: number = 3; // 1 for Monday, 2 for Tuesday, 3 for Wednesday, etc.
switch (day) {
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    default:
        console.log("Invalid day.");
}
console.log('------------------------------------------------------------------------------------------------------------');