A. Operators

1. Arithmetic Operators : These operators perform basic mathematical operations.
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)


2. Assignment Operators : These operators are used to assign values to variables.
   - Assignment (=)
   - Addition Assignment (+=)
   - Subtraction Assignment (-=)
   - Multiplication Assignment (*=)
   - Division Assignment (/=)
   - Modulus Assignment (%=)

3. Logical Operators : These operators are used to perform logical operations.
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)
   
4. Relational / Comparison Operators : These operators are used to compare values.
   - Equal (==)
   - Not Equal (!=)
   - Strict Equal (===)
   - Strict Not Equal (!==)
   - Greater Than (>)
   - Less Than (<)
   - Greater Than or Equal To (>=)
   - Less Than or Equal To (<=)

*************************************************************************************************************************************


B. Conditional Statements
1. if Statement : Executes a block of code if a specified condition is true.
   ```typescript
   if (condition) {
       // code to execute if condition is true
   }
   ```
2. if...else Statement : Executes one block of code if a condition is true, and another block if it is false.
   ```typescript
   if (condition) {
       // code to execute if condition is true
   } else {
       // code to execute if condition is false
   }
   ```
3. else if Statement : Allows you to check multiple conditions.
   ```typescript
   if (condition1) {
       // code to execute if condition1 is true
   } else if (condition2) {
       // code to execute if condition2 is true
   } else {
       // code to execute if neither condition is true
   }
   ```
4. switch Statement : A control statement that allows you to execute different blocks of code based on the value of a variable.
   ```typescript
   switch (expression) {
       case value1:
           // code to execute if expression equals value1
           break;
       case value2:
           // code to execute if expression equals value2
           break;
       default:
           // code to execute if expression does not match any case
   }
*************************************************************************************************************************************
C. Loops
1. for Loop : Executes a block of code a specified number of times.
   ```typescript
   for (let i = 0; i < 5; i++) {
       // code to execute in each iteration
   }
   ```
2. while Loop : Executes a block of code as long as a specified condition is true.
   ```typescript
   let i = 0;
   while (i < 5) {
       // code to execute in each iteration
       i++;
   }
   ```
3. do...while Loop : Executes a block of code once, and then repeats the loop as long as a specified condition is true.
   ```typescript
   let i = 0;
   do {
       // code to execute in each iteration
       i++;
   } while (i < 5);
   ```
4. break Statement : Exits a loop or switch statement prematurely.
   ```typescript
   for (let i = 0; i < 5; i++) {
       if (i === 3) {
           break; // exit the loop when i is 3
       }
       console.log(i);
   }
   ```
   *************************************************************************************************************************************