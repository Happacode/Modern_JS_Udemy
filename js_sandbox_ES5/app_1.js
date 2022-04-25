// Javascript Sandbox: Section 5
// Constructors & the 'this' keyword

// Object Literal
// const harp = {
//   name: 'Harp',
//   age: 30
// }
// console.log(harp);
// console.log(age);

// Person Constructor
function Person(name, dob) {
  this.name = name;

  // this in the block scope will refer to Person
  // console.log(this);

  this.birthday = new Date(dob);
  this .calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

// this in global scope will refer to all Window objects
// this.alert(1) is a window object

const harp = new Person('Harp', '9-10-1981');

console.log(harp);
console.log(harp.calculateAge());