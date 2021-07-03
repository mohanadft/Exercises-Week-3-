// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

// solution 1
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyBy100(number) {
  return number * 100;
}
let a = numbers.map(multiplyBy100);

console.log(a);

// solution 2

var numbersMultiplyBy100 = numbers.map(function multi100(number) {
  return number * 100;
});

console.log(numbersMultiplyBy100);

// solution 3

var selectedNumbers = numbers.map(function (number) {
  return number * 100;
});

console.log(selectedNumbers);

// solution 4

var numbersMultiplyingBy100 = numbers.map((number) => {
  return number * 100;
});

console.log(numbersMultiplyingBy100);
