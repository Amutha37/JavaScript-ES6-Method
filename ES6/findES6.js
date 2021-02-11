// The find helper loops through an array to look for a particular element (first occurrence), which passes the given criteria.
// It runs the provided function over each element, and if the
// particular element passes the criteria, it is returned.
// If no element found, undefined is returned.
// This helper method does not change the original array.

// The Drawback

// The find helper will not work when you want to find more than
// one occurrences, it will work only when you need the first occurrence.
// Which element to choose?In the find helper, we pass an iterator function which iterates
//  over all the elements of the array. The function should have a
//   condition, and the first element which satisfies that conditionis returned.
// When the condition is passed, the iterator function must return true. The element at which the iterator
// function returns a true is taken to be the required element.

// Syntax

// array.find(function(currentValue, index, arr),thisValue)
// currentValue: Required. The value of the current element
// index: Optional. The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be
//  used as its “this” value

// Example 1
// Given an array of numbers, find the first element which is a multiple of 7

/**
 * Given an array of numbers,
 * find the first element which is a multiple of 7
 */

const numbers = [1, 13, 15, 18, 28, 32, 47, 50];
let firstMultiple;

// Without the `find` helper
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 7 === 0) {
    firstMultiple = numbers[i];
    break;
  }
}
console.log(firstMultiple);

// With `find` helper (without arrow func)
let firstMultiple2 = numbers.find(function (number) {
  if (number % 7 === 0) {
    return true;
  }
});
console.log(firstMultiple2);

// With `find` helper (with arrow func)
let firstMultiple3 = numbers.find((number) => number % 7 === 0);
console.log(firstMultiple3);

// Example 2
// Given an array of objects having the data of students, find the student having register number 9018

const students = [
  { regNo: 0192, name: "Madhav" },
  { regNo: 1302, name: "Ram" },
  { regNo: 6723, name: "Rahul" },
  { regNo: 9018, name: "John" },
  { regNo: 4211, name: "Taylor" },
];

let wantedStudent = students.find((student) => student.regNo === 9018);

console.log(wantedStudent);
