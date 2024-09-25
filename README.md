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
