// var, let, const

var oldname = 'John Doe'; // Declare a variable
console.log(oldname);
oldname = 'Steve Smith'; // re-assign a variable
console.log(oldname);

// Initialize var
var greeting;
console.log(greeting); // undefined
greeting = 'Hello';
console.log(greeting); // 'Hello'

// Variable can include: letters, numbers, _, $
// Can not start with number

// Multi word variables
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FistName = 'Tom'; // Pascal case (Constructor classes)

// Let
let newname = 'John Doe'; // Declare a variable
console.log(newname);
newname = 'Steve Smith'; // re-assign a variable
console.log(newname);

// Const
const setname = 'Jim';
console.log(setname);

const person = {
  name: 'James',
  age: 30
}

// person.name = 'Maria'; (changed object property name: to value 'Maria')
person.age = 32;
// Const can't change person variable but can change data inside it
console.log(person)

const numbers = [1,2,3,4,5];
numbers.push(6);
// Const can also mutate Array but not change variable name
console.log(numbers);