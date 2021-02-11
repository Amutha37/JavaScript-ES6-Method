//

// array.forEach(function(currentValue, index, arr), thisValue)

// currentValue: Required. The value of the current element
// index: Optional. The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be used as its “this” value.

// Why forEach?
// Less Amount of Code
// More Readable
// Less Chances of error

// EXAMPLE 1

// Iteration through array

var fruits = ["mango", "orange", "pineapple", "guava"];

// Baisc Syntax

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach syntax

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// forEach with arrow function

fruits.forEach((fruit) => {
  console.log(fruit);
});

//  EXAMPLE 2

/**
 * Sum of each element in array of numbers
 *  1. Create an array of numbers
 *  2. Create a variable to hold the sum
 *  3. Loop over the array and increment the sum value
 *  4. print the sum variable
 */

const numbers = [6, 1, 2, 3, 8];
let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

// Why forEach?
// Less Amount of Code
// More Readable
// Less Chances of error
const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:

// const declineEverything = (arr) => {
//   arr.forEach(politelyDecline);
// };
// declineEverything(veggies);
// accept

// const acceptEverything = (veg) => {
//   veg.forEach((e) => {
//     console.log(`Ok, I guess I will eat some ${e}.`);
//   });
// };
// acceptEverything(veggies);

//  solution options
// Checkpoint 1 solutions:
const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};
declineEverything(veggies);
/*
  // As a function declaration:
  function declineEverything(arr) {
        arr.forEach(politelyDecline)
  }
  */

// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = (arr) => {
  arr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};
acceptEverything(veggies);

/*
  // Using a named function and string concatenation:
  const grudginglyAccept = veg => {
        console.log('Ok, I guess I will eat some ' + veg + '.');
  }
  const acceptEverything = arr => {
        arr.forEach(grudginglyAccept)
  }
  
  // Using a loop:
  const acceptEverything = arr => {
   for(let i = 0; i<arr.length; i++){
      console.log(`Ok, I guess I will eat some ${arr[i]}.`)
   }
  }
  */
