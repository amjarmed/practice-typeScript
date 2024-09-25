interface Calculate {
  (x: number, y: number): number;
}

const add: Calculate = (x, y) => x + y;
const subtract: Calculate = (x, y) => x - y;

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 5)); // Output: 5
