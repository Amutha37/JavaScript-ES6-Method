// The some helper is used to find if any one or more elements in the given list, pass a specific condition.
// The condition is passed in the iterator function, and it executes that function once for each element in the list.

// If, for any element, the iterator function returns true, some() returns true. Otherwise, it returns false.
// Usage and syntax is similar to every helper.

// Syntax
// array.some(function(currentValue, index, arr), thisValue)
// currentValue: Required. The value of the current element
// index: Optional The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be used as its “this” value.

// Example 1
// Given a collection of games with mentioned least required RAM,
// buy the collection, if at least one of the games can run in
// your computer (return true/false)
// one way
const games = [
  { name: "Counter Strike", ram: 8 },
  { name: "GTA 5", ram: 16 },
  { name: "Need for speed", ram: 12 },
  { name: "Road Rash", ram: 2 },
];

const myRam = 12;

// Without some helper
function canBuy1(games, requiredRam) {
  let canBuy = false;
  for (let i = 0; i < games.length; i++) {
    if (games[i].ram >= requiredRam) {
      canBuy = true;
      break;
    }
  }
  return canBuy;
}
console.log("1. Can buy games? ", canBuy1(games, myRam));

// With some, without arrow functions
function canBuy2(games, requiredRam) {
  return games.some(function (game) {
    return game.ram >= requiredRam;
  });
}
console.log("2. Can buy games? ", canBuy2(games, myRam));

// With some, with arrow function  (one liner)
const canBuy3 = (games, requiredRam) =>
  games.some((game) => game.ram >= requiredRam);
console.log("3. Can buy games? ", canBuy3(games, myRam));

// Example 2
// Do the same question we did in every helper, but by using some helper
// Slots of people are sent for driving license test, check whether each person in a slot is 18 years or above
// Hint: (Every person > 18) is equivalent to (no person <18).
// Try to apply this hint to do this problem using some helper instead of every helper

/**
 * Slots of people are sent for driving license test,
 * check whether each person in a slot is 18 years or above.
 */
// another way
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

const validateSlot = (slot) => !slot.some((person) => person.age < 18);

console.log("Slot 1: ", validateSlot(slot1));
console.log("Slot 2: ", validateSlot(slot2));

// Homework for you
// Check whether a set of numbers has any element which is
// Even
// Odd
// Prime
// Negative
// Positive
// Perfect Square
// Feel free to add more :)
