A. Strings
1. String Declaration
```typescript
let message: string = "Hello, TypeScript!";
console.log(message); // Outputs "Hello, TypeScript!"

2. String Concatenation
```typescript
let name: string = "Alice";
let greeting: string = "Hello, " + name + "!";
console.log(greeting); // Outputs "Hello, Alice!"

3. Template Literals // what are template literals? 
Template literals are string literals that allow embedded expressions, which can be multi-line and include variables or expressions using the `${expression}` syntax.

 ```typescript
let age: number = 30;
let introduction: string = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); // Outputs "My name is Alice and I am 30 years old."

4. String Methods
```typescript
let text: string = "TypeScript is awesome!";
console.log(text.toUpperCase()); // Outputs "TYPESCRIPT IS AWESOME!"    
console.log(text.includes("awesome")); // Outputs true
console.log(text.length); // Outputs 24

*****************************************************************************************************************************************
Definitions:
- Constructor is a special method used to initialize an object when it is created.
- The `this` keyword refers to the current instance of the class, allowing access to its properties and methods.
- The `super` keyword is used to call the constructor of the parent class in a derived class.


B. Classes
1. Class Declaration
```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person = new Person("Bob", 25);
console.log(person.greet()); // Outputs "Hello, my name is Bob and I am 25 years old."

2. Constructor
```typescript   
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {  // constructor method allows initialization of properties
        this.make = make;  // this.make is assigned the value of the make parameter
        this.model = model;
        this.year = year;
    }

    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
let car = new Car("Toyota", "Corolla", 2020);
console.log(car.getDetails()); // Outputs "2020 Toyota Corolla"

******************************************************************************************************************************************

B. Objects
1. Object Declaration
```typescript
let person: { name: string; age: number } = {
    name: "Bob",
    age: 25
};
console.log(person.name); // Outputs "Bob"
console.log(person.age); // Outputs 25

2. Object Properties
```typescript
console.log(person.name); // Outputs "Bob"
console.log(person.age); // Outputs 25
```

3. Object Methods
```typescript
let car: { make: string; model: string; year: number; getDetails: () => string } = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.getDetails()); // Outputs "2020 Toyota Corolla"

******************************************************************************************************************************************



Inheritance is a fundamental concept in object-oriented programming that allows a class to inherit properties and methods from another class, promoting code reuse and establishing a hierarchical relationship between classes.

*******************************************************************************************************************************************
C. Inheritance 
1. Class Inheritance


```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): string {
        return `${this.name} makes a sound.`;
    }
}
let dog = new Dog("Rex");
console.log(dog.name); // Outputs "Rex"



class Dog extends Animal {
    speak(): string {
        return `${this.name} barks.`;
    }
}
let dog = new Dog("Rex");
console.log(dog.speak()); // Outputs "Rex barks."

2. super Keyword
```typescript
class Cat extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the parent class
    }

    speak(): string {
        return `${this.name} meows.`;
    }
}       

let cat = new Cat("Whiskers");
console.log(cat.speak()); // Outputs "Whiskers meows."

console.log(super.speak()); // Outputs "Whiskers makes a sound." from the parent class

3. this Keyword : this keyword refers to the current instance of the class. 
 ```typescript
class Bird extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): string {
        return `${this.name} chirps.`;
    }

    fly(): string {
        return `${this.name} is flying.`;
    }
}
let bird = new Bird("Tweety");
console.log(bird.speak()); // Outputs "Tweety chirps."
console.log(bird.fly());   // Outputs "Tweety is flying."

**************************************************************************************************************************************************