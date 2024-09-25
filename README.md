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

```ts
const sum = <T>(n1: T, n2: T) => {};

sum<string>('hello', '2');

sum<number>(1, 2);
```

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

export default MyComponent;
```

### typescript with express
