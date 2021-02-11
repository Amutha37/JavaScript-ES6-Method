// 4. The filter helper

// As the name suggests, the filter helper is used
// to filter out some specific elements from an array of elements.
// It creates a new array from the elements of the original array which pass the given criteria.
// The criteria is generally given as a condition in the iterator function.
// Unlike find helper, filter returns an arrow of elements that pass the criteria.

// Syntax
// array.filter(function(currentValue, index, arr), thisValue)
// currentValue: Required. The value of the current element
// index: Optional. The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. The array object the current element belongs to
// Example 1

// Given an array of numbers, find the count of numbers greater than 100

const numbers = [30, 42, 105, 294, 876, 444, 98, 55, 671];

// Without filter helper
const filteredNum = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 100) filteredNum.push(numbers[i]);
}
console.log("filteredNum: ", filteredNum);

// With filter, without arrow fn
const filteredNum2 = numbers.filter(function (number) {
  return number > 100;
});
console.log("filteredNum2: ", filteredNum2);

// With filter, with arrow fn
let filteredNum3 = numbers.filter((number) => number > 100);
console.log("filteredNum3: ", filteredNum3);

// Example 2
// Extract the information of students from an array having
//  information about people

var people = [
  { name: "John", isStudent: false },
  { name: "Mark", isStudent: true },
  { name: "Kepler", isStudent: false },
  { name: "Stan", isStudent: true },
  { name: "Ben", isStudent: true },
];

let students = [];

// Without filter helper
for (let i = 0; i < people.length; i++) {
  if (people[i].isStudent) students.push(people[i]);
}
console.log("Students1: ", students);

// With filter without arrow fn
let students3 = people.filter(function (person) {
  return person.isStudent;
});
console.log("Students2: ", students2);

// With filter with arrow fn
let students3 = people.filter((person) => person.isStudent);
console.log("Students3: ", students3);
