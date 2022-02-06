const num1 = 100;
const num2 = 50;
let value;

// Simple math with numbers
// value = num1 + num2; // output 150
// value = num1 * num2; // output 500
// value = num1 - num2; // output 50
// value = num1 / num2; // output 2
// value = num1 % num2; // output 0

// Math Object
value = Math.PI; // output 3.14159265
value = Math.E; // output 2.71828182
value = Math.round(2.8); // output 3
value = Math.ceil(2.4); // output 3
value = Math.floor(2.4); // output 2
value = Math.sqrt(64); // output 8
value = Math.abs(-3); // output 3
value = Math.pow(8, 2); // output 64
value = Math.min(2,33,4,1,55,6,3,-2); // output -2
value = Math.max(2,33,4,1,55,6,3,-2); // output 55
value = Math.random(); // output random
value = Math.random() * 20 + 1; // output random # * 20 + 1
value = Math.floor(Math.random() * 20 + 1); // output random # * 20 + 1 rounded to integer

console.log(value);