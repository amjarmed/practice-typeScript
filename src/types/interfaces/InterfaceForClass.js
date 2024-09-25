"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}
const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy says Woof!
