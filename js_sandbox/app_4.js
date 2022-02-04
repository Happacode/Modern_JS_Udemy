// Type Conversion
let val;
// Number to string
val = String(5);
val = String(4+4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
// val = Number('hello'); Output: NaN
// val = Number([1,2,3]); NaN
val = parseInt('100');
val = parseFloat('100.33');

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

// type coercion
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum); // output: 11
console.log(typeof sum); // output: Number

const val3 = String(5);
const val4 = 6;
const sum2 = val3 + val4;
console.log(sum2); // output: 56
console.log(typeof sum2); // output: string