interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy says Woof!
