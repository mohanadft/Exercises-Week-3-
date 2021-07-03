/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

function findLongNameThatStartsWithA(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("A") && arr[i].length > 7) {
      return arr[i].length > 7;
    }
  }
}

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA(names));
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
