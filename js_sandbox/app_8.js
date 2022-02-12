// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const numbers3 = [41,58,34,21,74,86,5];
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length; // 7
// Chech if is array
val = Array.isArray(numbers); // true
// Get single value
val = numbers[3]; // 23
val = numbers[0]; // 43
// Insert into array
numbers[2] = 100; // [43, 56, 100, 23, 44, 36, 5]
// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays
numbers.push(250); // Add on to end
numbers.unshift(120); // Add on to end 
numbers.pop(); // Take off from end 
numbers.shift(); // Take off from front
// Splice values
numbers.splice(1,1); // [43, 100, 23, 44, 36, 5] (56) spliced
// Reverse
numbers.reverse(); // [5, 36, 44, 23, 100, 4
// Concatenate array
val = numbers.concat(numbers2); // [5, 36, 44, 23, 100, 43, 22, 45, 33, 76, 54]

// Sorting arrays
val = fruit.sort(); // ['Apple', 'Banana', 'Orange', 'Pear']
// sort with 'compare function'
val = numbers.sort(function(x, y){
  return x - y;
}); // [5, 23, 36, 43, 44, 100]
// reverse sort
val = numbers.sort(function(x, y){
  return y - x;
}); // [100, 44, 43, 36, 23, 5]

// Find
function under50(num){
  return num < 50;
}
val = numbers3.find(under50); // 41 first number < 50 then returns

console.log(numbers3);
console.log(val);