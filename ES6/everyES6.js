// The every helper is used to find whether all the elements in a given list pass a specific condition.

// The condition is passed in the iterator function,
//  and it executes that function once for each element in the list.
// If, for any element, the iterator function returns false, every() returns false. Otherwise, it returns true.

// Syntax

// array.every(function(currentValue, index, arr), thisValue)
// currentValue: Required. The value of the current element
// index: Optional The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be used as its “this” value.

// Example 1

// When the users submit a form, suppose that all the fields are taken out in an array before submitting
// You have to validate that every field has at least 1 character.

const fieldData1 = ["Dan", "abc@xyz.com", "21", "Delhi", ""];
const fieldData2 = ["John", "efg@pqr.com", "25", "Delhi", "Student"];

// Without `every`
function validateFields(fields) {
  let allFieldsValid = true;
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].length === 0) allFieldsValid = false;
  }
  return allFieldsValid;
}
console.log("Validating Fields without every: ");
console.log("fieldData1: ", validateFields(fieldData1));
console.log("fieldData2: ", validateFields(fieldData2));

// With every, without arrow function
function validateFields2(fields) {
  return fields.every(function (field) {
    return field.length > 0;
  });
}
console.log("Validating Fields with every: ");
console.log("fieldData1: ", validateFields2(fieldData1));
console.log("fieldData2: ", validateFields2(fieldData2));

// With every, with arrow function (one liner)
const validateFields3 = (fields) => fields.every((field) => field.length > 0);
console.log("Validating Fields with every: ");
console.log("fieldData1: ", validateFields3(fieldData1));
console.log("fieldData2: ", validateFields3(fieldData2));

// Example 2
// Slots of people are sent for driving license test, check whether each person in a slot is 18 years or above

const slot1 = [
  { name: "John", age: 16 },
  { name: "Matt", age: 20 },
  { name: "Dan", age: 17 },
];
const slot2 = [
  { name: "Amanda", age: 32 },
  { name: "Kepler", age: 20 },
  { name: "Stan", age: 25 },
];

// Without arrow functions
function validateSlot(slot) {
  return slot.every(function (person) {
    return person.age >= 18;
  });
}
console.log("Result 1 \n------------------");
console.log("Slot 1: ", validateSlot(slot1));
console.log("Slot 2: ", validateSlot(slot2));
console.log("------------------");

// With arrow functions
const validateSlot2 = (slot) => slot.every((person) => person.age >= 18);
console.log("Result 2 \n------------------");
console.log("Slot 1: ", validateSlot2(slot1));
console.log("Slot 2: ", validateSlot2(slot2));

// Homework for you
// Check whether a set of numbers is
// Even
// Odd
// Prime
// Negative
// Positive
// Perfect Square
// Feel free to do more, and do contribute with more examples to this repository.
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
// Iterating over a Map
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

// Iterating over a Set
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
// Iterating over the arguments object
(function () {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3

// Iterating over a DOM collection

// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
const articleParagraphs = document.querySelectorAll("article > p");

for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}

// Closing iterators
// In for...of loops, abrupt iteration termination can be caused by break, throw or return. In these cases, the iterator is closed.

function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

for (const o of foo()) {
  console.log(o);
  break; // closes iterator, execution continues outside of the loop
}
console.log("done");

// Iterating over generators
// You can also iterate over generators, i.e. functions generating an iterable object:

function* fibonacci() {
  // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}

// Difference between for...of and for...in
// Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

// The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

// The for...of statement iterates over values that the iterable object defines to be iterated over.

// The following example shows the difference between a for...of loop and a for...in loop when used with an Array.

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}
