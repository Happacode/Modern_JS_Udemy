// Log to console(chrome dev tools)
console.log('Hello World');
console.log(123);
console.log(true);
let greeting = 'Hi!';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello'); //starts timer to run following lines
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello'); //timer ends(Hello: 0.087158203125 ms)