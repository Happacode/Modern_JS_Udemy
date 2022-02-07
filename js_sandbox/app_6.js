const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let value;

value = firstName + lastName;

// Concatenation
value = firstName + ' ' + lastName; // output William Johnson

// Append
value = 'Brad ';
value += 'Traversy'; // output Brad Traversy

value = 'Hello, my name is ' + firstName + ' and I am ' + age; // output: Hello, my name is William and I am 36

// Escaping
value = 'That\'s awesome, I can\'t wait'; // output: That's awesome, I can't wait

// Length
value = firstName.length; // output: 7

// concat()
value = firstName.concat(' ', lastName); // output: William Johnson

// Chage case
value = firstName.toUpperCase(); // WILLIAM
value = firstName.toLowerCase(); // william

// Array index
value = firstName[2]; // output: l

// indexOf()
value = firstName.indexOf('l'); // output: 2
value = firstName.lastIndexOf('l'); // output: 3

// chartAt()
value = firstName.charAt('1'); // output: i
// get last char
value = firstName.charAt(firstName.length - 1); // output m

// substring()
value = firstName.substring(0, 4); // output: Will

// slice()
value = firstName.slice(0, 4); // output: Will
value = firstName.slice(-3); // output: iam

// split() into an Array
value = str.split(' ');
value = tags.split(',');

// replace()
value = str.replace('Brad', 'Jack'); // output: Hello there my name is Jack

// includes() test if char/words in a string
value = str.includes('Hello'); // output: true

console.log(value);