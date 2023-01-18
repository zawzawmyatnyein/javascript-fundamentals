'use strict';

// Converting and Checking Numbers
// Conversion
// console.log(Number('23'));
// console.log(+'23');

// Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseInt('    2.5rem   '));
// console.log(Number.parseFloat('    2.5rem   '));

// Check if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(3, 9));

// Rounding integers
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(23.3));
// console.log(Math.trunc(-23.3));

// Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// Remainder Operator
// console.log(5 % 2);
// console.log(8 % 3);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// Numeric separators
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// console.log(Number('230_000'));
// console.log(parseInt('230_000'));

// working with BigInt
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 - 1);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(2 ** 53 + 5);

// console.log(4894320234093284023840232n);
// console.log(BigInt(47432423));

// console.log(10000n + 10000n);
// console.log(432432423n * 10000n);

// exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(11n / 3n);
// console.log(11 / 3);

// Creating Dates

const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2021 18:05:41'));
// console.log(new Date('December 24, 2015'));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay()); // Sun, Mon, Tues, Wed, Thur, Fri, Sat
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142233580000));

future.setFullYear(2040);
// console.log(future);

// Operations with Dates
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days);

// Internationalization API (Intl)
const num = 3884764.23;

const options = {
  style: 'currency',
  currency: 'USD',
  //   currencyDisplay: 'name',
};

// console.log(new Intl.NumberFormat('en-US', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat('ar-Sy', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));

// Timers
// setTimeout
// setTimeout(function () {
//   console.log('2 seconds later');
// }, 2000);

const ingredients = ['tomato', 'mushroom'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
  },
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('cheese')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(() => {
//   console.log('every 2 seconds');
// }, 2000);
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
