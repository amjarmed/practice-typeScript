# practice-typeScript

A playground for experimenting with TypeScript. This repository is a space for learning, testing, and practicing TypeScript concepts, features, and best practices. Whether it's exploring advanced typing, working with interfaces, or mastering TypeScript's utility types, this repo serves as a sandbox for hands-on learning.

---

## configurations

`bash
tsc --init
`

- **tsconfig.json**
  "rootDir": "./src" /_Specify the root folder within your source files._/,
  // "moduleResolution":

  "outDir": "./build" /_Specify an output folder for all emitted files._/,

- _**starting transpaling:**_

```bash

- tsc
- tsc --watch
```

## types

```ts
let y: [string, number] = ['hello', 10];
let x: (string | number)[] = ['hello', 10];
let d: any = 55;
```

## function type

```ts
const v: (x: string, y: boolean) => [string, boolean] = (x, y) => {
  return ['hel', true];
};
```

## custom types

we define custom type with (interface, enum, class, type)

### interfaces

Interfaces in TypeScript are used to define the structure of an object, and they provide a way to ensure that specific properties and methods are present in an object or class.

```ts
interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

let x: Person = {
  name: 'John',
  age: 30,
  gender: 'male',
};
```

### type

```ts
type MyType = string | number;
type Person2 = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

let w: MyType = 10;
let j: MyType = '10';
let p: Person2 = { name: 'John', age: 30 };
```

#### optional props

```ts
interface Person {
  name: string;
  age: number | undefined;
}

let x: Person;
x = { name: 'John', age: 30 };
console.log(x.age);

// i know it's not a number
const mNumber: number = x.age!;

// if it's undefined or null, it's 0
const mNumber2: number = x.age ?? 0;
```

### Enum

Enums in TypeScript allow you to define a set of named constants, making it easier to work with related values. They are commonly used in scenarios where a variable can have one of a limited set of values.

```ts
//  booking example with enum and custom type
/* 
 enum used for static values like days of the week, status of bookings, etc.

*/
enum BookingStatus {
  initial = 'initial',
  paid = 'paid',
  cancelled = 'cancelled',
}

let bookingStatus: BookingStatus = BookingStatus.initial;

bookingStatus = BookingStatus.paid;

if (bookingStatus === BookingStatus.paid) {
  console.log('paid');
}
```

### class type

```ts
interface ICar {
  model: string;
  year: number;
  sayHello(): void;
}

class Car implements ICar {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
  sayHello(): void {
    throw new Error('Method not implemented.');
  }
}
```

### export the interfaces

- export enum / class ...

## generics

Generics in TypeScript allow you to create reusable components that can work with a variety of data types while maintaining type safety. They provide a way to write functions, classes, or interfaces that can work with different types without losing the specific types’ information.

Why Use Generics?
Generics are useful when:

You want to create functions or data structures that work with multiple types without sacrificing type safety.
You don't know the exact type until the function or class is used, but you still want to enforce consistency across operations involving that type.
Syntax of Generics
Generics are typically declared with angle brackets <T> where T is a placeholder for a type that will be provided when the generic function, class, or interface is used.

Generic Functions
function that works with multiple types by using generics:

```ts
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(42); // T is number
const stringValue = identity<string>('Hello'); // T is string

//TypeScript can also infer the type automatically if it's obvious

const inferredNumber = identity(100); // TypeScript infers T as number
const inferredString = identity('world'); // TypeScript infers T as string
```

- **Generic Interfaces**
  You can use generics with interfaces to define complex types:

```ts
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 123 };
const stringBox: Box<string> = { content: 'hello' };
```

- **Generic Class**

```ts
class GenericNumber<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  add(x: T, y: T): T {
    return x; // simple logic for demonstration
  }
}

const numberInstance = new GenericNumber<number>(10);
const stringInstance = new GenericNumber<string>('TypeScript');
```

- **Generic Class**
  Sometimes you want to limit the types that can be used in generics. You can use constraints to ensure that a type parameter has certain properties or methods.

```ts
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(value: T): void {
  console.log(value.length);
}

logLength('hello'); // Works because string has a length property
logLength([1, 2, 3]); // Works because arrays have a length property
logLength({ length: 10 }); // Works because object has a length property
```

- **Generic Types and Default Values**
  You can also specify default types for generics if the type isn't provided

```ts
function defaultIdentity<T = string>(value: T): T {
  return value;
}

const result = defaultIdentity(); // T is inferred as string by default
```

- **Example: Generic Data Structure**

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // Output: 2

const stringStack = new Stack<string>();
stringStack.push('a');
stringStack.push('b');
console.log(stringStack.pop()); // Output: "b"
```

- **Use Cases for Generics**

- Reusable Functions: Functions that can operate on multiple types while maintaining type safety (e.g., identity function, sorting functions).
- Data Structures: Custom types like List<T>, Stack<T>, or Queue<T>, which are generic and can store any data type.
- APIs: You can use generics in APIs to accept or return different types while preserving the structure and constraints across different components.
- Generics in TypeScript allow for the creation of components that can work with a variety of types.
- They enable reusability and type safety by allowing developers to write flexible, type-agnostic functions, classes, and interfaces.
- You can add constraints to generics to restrict them to specific types with certain properties.
- Generics are especially useful for working with complex data structures or APIs where type flexibility is needed.

### general object types

```ts
// flixable obj type

// first method
const obj: { [key: string]: any } = {
  name: 'John',
  age: 30,
};

obj.bithDate = '1995-01-01';

console.log(obj);

// second method

interface Person {
  [key: string]: any;
}
const obj: Person = {
  name: 'John',
  age: 30,
};

obj.bithDate = '1995-01-01';

console.log(obj);
```

### utilities

In TypeScript, utilities refer to utility types, which are built-in types that help transform or manipulate other types in a concise and reusable way. They allow developers to perform common tasks like making types optional, readonly, or picking and omitting properties from types. These utilities are useful when working with complex type structures and help make the code more maintainable.

```ts
interface User {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
//Omit<T, K> : Creates a new type by omitting specific properties from an existing type.

interface UserWithoutEmail extends Omit<User, 'email' | 'isActive'> {}

// Pick<T, K> : Creates a new type by selecting specific properties from an existing type.
interface UserWithNameOnly extends Pick<User, 'name'> {}

const user: UserWithoutEmail = {
  name: 'string',
  age: 55.5,
  email: 'string',
  isActive: true,
};

// Partial<T> : Makes all properties in a type optional.

interface UserWithPartialName extends Partial<User> {}
const userPartial: UserWithPartialName = {
  name: 'string',
};

// Required<T> :Makes all properties in a type required.

interface CarWithRequiredYear extends Required<Car> {}
const secondCar: CarWithRequiredYear = {
  name: 'Bmw',
  model: '3CX',
};

// Readonly<T> : Makes all properties in a type read-only, meaning they cannot be reassigned after creation.
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = { name: 'Charlie', age: 30 };
user.name = 'Dave'; // Error: Cannot assign to 'name' because it is a read-only property

/* 
 OTHERS :
Utility types in TypeScript simplify working with complex type structures, making it easier to manipulate types for specific use cases. They reduce boilerplate code and help make the codebase more flexible and maintainable.

 - NonNullable<T>
 - Extract<T, U>
 - Exclude<T, U>
 - ReturnType<T>
 - Record<K, T>


*/
```

#### types with uitilies

```ts
type Person = {
  name: string;
  age: number;
  email: string;
};
type Car = {
  carName: string;
  carModel: string;
  carYear?: number;
};
type PersonWithoutEmail = Omit<Person, 'email'>;

type PersonWithCar = Person & Car;
const person: PersonWithCar = {
  name: 'John',
  age: 30,
  carName: 'Ford',
  carModel: 'Mustang',
  carYear: 2021,
  email: 'john.doe@example.com',
};
```

## Promise with typeScript

[promise](https://youtu.be/7s6aMzXyt3g?si=Ftjdo4zLZJwbrKdp)<https://youtu.be/7s6aMzXyt3g?si=Ftjdo4zLZJwbrKdp>

```ts
const myFun = async () => {
  return 'hello world';
};
const myFun2 = () => {
  return new Promise<string>((resolve, reject) => {
    resolve('hello world');
  });
};
// with await will return string ,
// without await will return promise
const x = myFun();
const y = myFun2();
```

### typescript with react

```ts
// option 1
const MyComponent = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <h1>
        hello {name} your age is {age}
      </h1>
    </div>
  );
};

export default MyComponent;

// option 2

interface MyComponentProps {
  name: string;
  age: number;
}

// with destructing props
const MyComponent = ({ name, age }: MyComponentProps) => {
  return (
    <div>
      <h1>
        hello {name} your age is {age}
      </h1>
    </div>
  );
};

export default MyComponent;

// option 3

import { useState } from 'react';

interface MyComponentProps {
  name: string;
  age?: number;
}
interface Person {
  name: string;
  age: number;
}

// with destructing props
const MyComponent = ({ name, age = 18 }: MyComponentProps) => {
  const [count, setCount] = useState(0);
  // const [person, setPerson] = useState<{ name: string; age: number }>({});
  const [person, setPerson] = useState<{ [key: string]: any }>({});
  return (
    <div>
      <h1>
        hello {name} your age is {age}
      </h1>
      <h3>your name is {person.name}</h3>
      <h3> your count is {count}</h3>
      <button
        className='btn mt-5 btn-primary'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add count
      </button>
    </div>
  );
};
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
export default MyComponent;
```

### typescript with express

```ts
import express, { Request, Response } from 'express';

const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send(` <h1> hello express</h1>`);
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```
