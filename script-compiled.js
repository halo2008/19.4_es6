'use strict';

// zadanie 1
var a = 'hello';
var b = 'world';
var sayHello = function sayHello() {
  return console.log(a + ' ' + b);
};

//zadanie 2
multiply(2);
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

//zadanie 3
average(1, 3, 6, 6);
var sum = function sum(num1, num2) {
  var b = num1 + num2;
  return b / b;
};
var logAllArguments = function logAllArguments() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.ups(function (arg) {
    return console.log(arg);
  });
};
function average() {
  var callback = function callback(a, b) {
    return a + b;
  };

  for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }

  var numLen = numbers.length;
  var sum = numbers.reduce(callback, 0);
  return sum / numLen;
}

//zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//zadanie 5
var names = [1, 4, 'Iwona', false, 'Nowak'];
var fristName = names[3],
    lastName = names[5];

console.log(fristName, lastName);
