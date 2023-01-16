'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join(' - '));

// AT
const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(2));

// getting last element from an array
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// console.log('hello'.at(0));
// console.log('hello'.at(-1));

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    // console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    // console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// forEach with Maps and Sets
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);
currencies.forEach(function (value, key, map) {
  //   console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  //   console.log(`${value}: ${value}`);
});

// Map Method
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'depositd' : 'withdrew'} ${Math.abs(mov)}`
);
// console.log(movementsDescriptions);

// Filter
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
// console.log(deposits);

// Reduce
// 1 -> accu = 0; cur = 1; acc + curr = 0 + 1 => 1
// 2 -> acc = 1; cur = 3; acc + cur = 1 + 3 => 4
// 3 -> acc = 4; cur = 4; acc + cur = 4 + 4 => 8
// 4 -> acc = 8; cur = 8; acc + cur = 8 + 8 => 16
const nums = [1, 3, 4, 8];
const total = nums.reduce(function (acc, cur) {
  return acc + cur;
}, 0);
// console.log(total);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(movements);
// console.log(balance);

// maxium value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);

// method chaining
const totalDepostsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepostsUSD);

// Find and FindIndex
const firstWidthdrawal = movements.find((mov) => mov < 0);
// console.log(firstWidthdrawal);
const firstWidthdrawalIndex = movements.findIndex((mov) => mov < 0);
// console.log(firstWidthdrawalIndex);

// Some and Every
// console.log(movements.includes(-130));

// console.log(movements.some((mov) => mov === -130));
const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// console.log(movements.every((mov) => mov > 0));

// flat and flatMap
const nestedArr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(nestedArr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

const accounts = [
  {
    owner: 'John Doe',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
  },
  {
    owner: 'Williams Doe',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.3,
    pin: 2222,
  },
];

const overAllBalance = accounts.flatMap((acc) => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

// Sorting Arrays

// strings
const owners = ['John', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());

// numbers
console.log(movements);
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Decending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

// Creating and Filling arrays
const array = [2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 5, 6, 7));

const x = new Array(7);
console.log(x);

// x.fill(1, 3, 8);
x.fill(1);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
