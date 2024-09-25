interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  position: string;
}

const newEmployee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  position: "Developer",
};

console.log(newEmployee);
