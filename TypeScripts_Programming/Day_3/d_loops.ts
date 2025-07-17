console.log("For loops");

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

console.log('------------------------------------------------------------------------------------------------------------');    

console.log("While loops");
let count: number = 1;
while (count <= 5) {
    console.log(`Count is: ${count}`);
    count++;
}
console.log('------------------------------------------------------------------------------------------------------------');

console.log("Do-while loops");
let number: number = 1;
do {
    console.log(`Number is: ${number}`);
    number++;
} while (number <= 5);
console.log('------------------------------------------------------------------------------------------------------------');

console.log("Break statements");
for (let j = 0; j <= 100; j++) { 
    if (j === 9) {
        console.log("Breaking the loop at 9");
        break; // Exit the loop when j is 9
    }
    console.log(`Current number: ${j}`);
}
