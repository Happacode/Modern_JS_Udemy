// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue; // continue keeps going through the loop, won't show Number 2
//   }
  
//   if(i === 5){
//     console.log('Stop the loop');
//     break; // stops the loop at Number 4
//   }

//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE LOOP

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// ARRAY LOOP

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// };

// FOREACH LOOP
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users = [
//   {id:1, name:'John'},
//   {id:2, name:'Sara'},
//   {id:3, name:'Karen'}
// ];

// const ids = users.map(function(user){
//   return user.name;
// });

// console.log(ids[1]);

// FOR IN LOOP

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}