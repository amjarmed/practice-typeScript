
type Person = {
  name: string;
  age: number;
  email: string;
}
type Car ={
  carName: string;
  carModel: string;
  carYear?: number;
}
type PersonWithoutEmail= Omit<Person, "email">;

type PersonWithCar = Person & Car;
const person: PersonWithCar = {
  name: "John",
  age: 30,
  carName: "Ford",
  carModel: "Mustang",
  carYear: 2021,
  email: "john.doe@example.com",

};