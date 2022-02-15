// if statements and comparison operators
// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// Equal To
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // STRICT Equal To Value and Type
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// GREATER OR LESS THAN
// if(id > 200){
//     console.log('CORRECT');
//   } else {
//     console.log('INCORRECT');
//   }

// IF ELSE
const colour = 'yellow';

if(colour === 'red'){
  console.log('Colour is red');
} else if(colour === 'blue'){
  console.log('Colour is blue');
} else {
  console.log('Colour is not red or blue');
}

// LOGICAL OPERATIONS

const username = 'Steve';
const age = 36;

// AND &&
if(age > 0 && age < 12){
  console.log(`${username} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${username} is a teenager`);
} else {
  console.log(`${username} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${username} can not run in race`);
} else {
  console.log(`${username} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
// if id is equal to 100? than it's CORRECT : else it's INCORRECT