// const sortYears = (arrYear) => {
//   let newYears = [];
//   arrYear.sort();
//   return arrYear;
// };
// const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
// console.log(sortYears(years));

// another way
// Write your code here:
// const sortYears = (arrYear) => {
//   let newYears = [];

//   arrYear.sort();
//   return arrYear;
// };
// another way
// const sortYears = (arr) => arr.sort((x, y) => y - x);

// another way
// As a function declaration AND using a named function:
// function sortYears(arr) {
//       const checkYears = (year1, year2) => year2 - year1
//       return arr.sort(checkYears)
// }
// Feel free to uncomment the below code to test your function:
const sortYears = (arr) =>
  arr.sort((a, b) => {
    // const bDate = new Date(b.date + ' ' + b.time)

    return b - a;
  });

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
