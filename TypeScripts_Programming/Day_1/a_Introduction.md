/**
 * Day 1 - Introduction to Playwright and TypeScript
 * TypeScript is a superset of JavaScript that adds static typing to the language.
 * Playwright is a Node.js library for automating browser interactions.
 * Author: Vinod
 * Description: Introduction to TypeScript and Playwright installation.
 */

/**
 * 1. What is Playwright?
 *  Its Open Source tool by Microsoft.
 * Playwright is a Framework for end-to-end testing of web applications.
 * Playwright is a Node.js library, that allows you to automate browser interactions. 
 * It provides a high-level API to control headless browsers like Chromium, Firefox, and WebKit.
 * We can automate both web and api testing using Playwright.
 * Playwright supports multiple programming languages, including JavaScript, TypeScript, Python, C#, and Java.
 * Playwright is designed to enable cross-browser testing, allowing developers to write tests that work across different browsers and platforms.
 * Web browsers supported by Playwright include Chromium, Firefox, and WebKit.
 */


/* * 2. What is TypeScript?
 * TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors at compile time rather than runtime, making code more robust and maintainable.
 * TypeScript is developed and maintained by Microsoft.
 * TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
 * 
 * JavaScript ---> Dynamically typed language

let age=30
let name="John"

age="thirty"


TypesScript --- Statically typed language

let age:number=30
let name:string="John"

age="thirty"

 * 
 * */

 1. To Install TypeScript, you can use npm (Node Package Manager) with the following command:
```bash
npm install -D typescript
```

 2. After installing TypeScript, you can create a `tsconfig.json` file to configure your TypeScript project. You can generate this file using the command:
```bash
npx tsc --init
```bash
npx tsc --init
```

 3. This file allows you to specify compiler options, such as the target ECMAScript version, module system, and more.

 4. To compile TypeScript files to JavaScript, you can run:
```bash
npx tsc 
```
 5. This command will compile all `.ts` files in the project according to the settings in `tsconfig.json`.

 6.  To run a TypeScript file directly, you can use `ts-node`, which allows you to execute TypeScript files without compiling them first:
```bash
npx ts-node <your-file>.ts
```

```typescript
// Example of a simple TypeScript variable declaration
let age: number = 30;
let name: string = "John";
let isActive: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
// Output the variables
console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
// Output: Name: John, Age: 30, Active: true
// Output: Hobbies: Reading, Traveling, Cooking

to run this code, save it in a file named `example.ts` and run:
```bash
npx ts-node example.ts

7. Install tsx 
```bash
npm install -D tsx
```

Then you can run TypeScript files directly using:
```bash
npx tsx example.ts