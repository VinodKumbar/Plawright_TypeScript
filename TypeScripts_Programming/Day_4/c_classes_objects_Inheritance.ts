console.log("Classes in TypeScript:");

class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    greeting(): string {
        return `Hello, ${this.firstName}! Welcome to TypeScript.`;
    }
}
let person = new Person("John", "Wick");
console.log("Person Full Name:", person.getFullName());
console.log("Person Greeting:", person.greeting());

console.log("----------------------------------------------------------------------------------------");


console.log("Class with Methods:");
class Employee extends Person {
    position: string;

    constructor(firstName: string, lastName: string, position: string) {
        super(firstName, lastName); // Call the parent class constructor
        this.position = position; 
    }

    getDetails(): string {
        return `${this.getFullName()} is a ${this.position}.`;
    }
}
let employee = new Employee("Jane", "Smith", "Software Engineer");
console.log("Employee Details:", employee.getDetails());

console.log("----------------------------------------------------------------------------------------");

console.log("Constructor and this keyword:");
class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    getVehicleInfo(): string {
        return `${this.make} ${this.model}`;
    }
}
let vehicle = new Vehicle("Toyota", "Camry");
console.log("Vehicle Info:", vehicle.getVehicleInfo());
console.log("----------------------------------------------------------------------------------------");


console.log("Inheritance Example:");
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): string {
        return `${this.name} makes a noise.`;
    }
}
class Dog extends Animal {
    speak(): string {
        return `${this.name} barks.`;
    }
}
let dog = new Dog("Rex");
console.log("Dog Speak:", dog.speak());
console.log("----------------------------------------------------------------------------------------");
console.log("Using super keyword:");
class Cat extends Animal {
    speak(): string {
        return `${this.name} meows.`;
    }
}   
let cat = new Cat("Whiskers");
console.log("Cat Speak:", cat.speak());
console.log("----------------------------------------------------------------------------------------");

class Bird extends Animal {
    constructor(name: string) {
        super(name); // Call the parent class constructor
        console.log(`${this.name} is a bird.`);
        console.log(super.speak()); // Call the parent class speak method
    }
    speak(): string {
        return `${this.name} chirps.`;
    }
    fly(): string {
        return `${this.name} is flying.`;
    }
}
let bird = new Bird("Tweety");
console.log("Bird Speak:", bird.speak());
console.log("Bird Fly:", bird.fly());


