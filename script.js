// zadanie 1
const a = 'hello';
const b = 'world';
const sayHello = () => console.log(`${a} ${b}`);

//zadanie 2
const multiply = (x,y=1) => x*y;
console.log(multiply(2));

//zadanie 3
var sum = (num1, num2) => {
 var b = num1 + num2
   return b/b;
};
const logAllArguments = (...args) => args.ups(arg => console.log(arg));
function average(...numbers) {
  const callback = (a, b) => a + b;
  const numLen =  numbers.length;
  const sum = numbers.reduce(callback, 0);
  return sum/numLen;
}
console.log(average(1, 3, 6, 6));
//zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//zadanie 5
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [,,fristName,,lastName] = names;
console.log(fristName,lastName);
