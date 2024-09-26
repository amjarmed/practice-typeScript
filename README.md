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

---

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

---

### general object types

In TypeScript, general object types allow you to describe the shape of objects more precisely. The term "object" in JavaScript and TypeScript refers to any value that is not a primitive (like numbers, strings, booleans, etc.). When working with objects in TypeScript, you often define a type or interface that describes the structure of the object, what properties it has, and what types those properties should be.

1. Basic Object Types: You can define the structure of an object using an object type in TypeScript.

```ts
let person: { name: string; age: number };

person = {
  name: 'Alice',
  age: 30,
};
```

2. Optional Properties: You can mark some properties of an object as optional using the ?

```ts
let person: { name: string; age?: number };

person = { name: 'Alice' }; // Valid, age is optional
```

3. Readonly Properties: You can use the readonly modifier to make a property unmodifiable (i.e., read-only)

```ts
let person: { readonly name: string; age: number };

person = { name: 'Alice', age: 30 };
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```

4. Index Signatures: Sometimes, you want to define an object with a flexible number of properties that follow a certain type pattern. For example, you might want an object where all property names are strings, and all property values are numbers. You can achieve this with an index signature

```ts
let ratings: { [key: string]: number };

ratings = {
  movie1: 5,
  movie2: 3,
};
/* 
[key: string]: number means that this object can have any number of properties, where the property names are strings and the values are numbers.

*/
```

5. Nested Object Types: Objects can also contain other objects, and you can define these nested structures using TypeScript object types

```ts
let person: {
  name: string;
  address: { city: string; zipCode: number };
};

person = {
  name: 'Alice',
  address: {
    city: 'New York',
    zipCode: 10001,
  },
};
```

- **Using Interfaces for Object Types**

```ts
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'Alice',
  age: 30,
};
```

- **General Object Type (object)**
  In TypeScript, object is a general type that refers to any non-primitive type (i.e., everything that isn't a number, string, boolean, etc.). This is useful when you want to accept or pass around objects but don’t need to specify their exact shape.

```ts
function printObject(obj: object): void {
  console.log(obj);
}

printObject({ name: 'Alice' }); // Valid
printObject([1, 2, 3]); // Valid
printObject('string'); // Error: Argument of type 'string' is not assignable to parameter of type 'object'.

/* 
The object type only ensures that the value is not a primitive; however, it doesn't provide any information about the specific structure of the object.


*/
```

- **{} as a General Object Type**
  Another way to specify a general object type in TypeScript is by using the {} type. The {} type is similar to object but allows any value that is not null or undefined.

```ts
let data: {};
data = { name: 'Alice' }; // Valid
data = [1, 2, 3]; // Valid
data = 'string'; // Also valid
data = null; // Error: Type 'null' is not assignable to type '{}'
data = undefined; // Error: Type 'undefined' is not assignable to type '{}'
```

Differences Between object, {}, and any

- object: Only allows non-primitive types (i.e., objects, arrays, functions), but doesn't accept primitive values like strings or numbers.
- {}: Allows all non-null and non-undefined values, including primitive values.
- any: Allows any value, whether it's an object, primitive, null, undefined, etc. It's the most flexible but also loses type safety.

```ts
let value1: object;
let value2: {};
let value3: any;

value1 = { key: 'value' }; // Valid
value2 = { key: 'value' }; // Valid
value3 = { key: 'value' }; // Valid

value1 = 'string'; // Error
value2 = 'string'; // Valid
value3 = 'string'; // Valid

value1 = 123; // Error
value2 = 123; // Valid
value3 = 123; // Valid

value1 = null; // Error
value2 = null; // Error
value3 = null; // Valid

value1 = undefined; // Error
value2 = undefined; // Error
value3 = undefined; // Valid
```

- **Using the Record Utility Type**
  The Record utility type is a built-in generic that allows you to create a map of keys and values with specific types. It's useful for defining an object where all properties follow the same pattern.

```ts
type PersonRecord = Record<string, string | number>;

let personInfo: PersonRecord = {
  name: 'Alice',
  age: 30, // Can be a number or a string
  city: 'New York',
};

// Record<string, string | number> defines an object where the keys are strings, and the values are either strings or numbers.
```

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

- _**Summary of General Object Types:**_
  Simple object types: Define specific properties and their types.
  Optional and readonly properties: Control whether properties can be omitted or changed.
  Index signatures: Define objects with dynamically named properties of a specific type.
  Nested object types: Objects can have other objects as properties.
  General object types (object, {}, any): Allow for broader, more flexible types without specific property constraints.
  Utility types like Record: Provide built-in flexibility for mapping types.
  These object types allow you to precisely control the structure and behavior of the objects you're working with while maintaining flexibility where necessary.

---

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
