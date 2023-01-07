'use strict'; // strict mode

console.log('Hello World');
console.log(45);

// variables (var, let, const)
// var firstName = 'John';
let familyName = 'Doe';
const middleName = 'Michael';

let myFirstJob = 'Teacher'; // camel Case

// Data Types
let children;

console.log(children);

children = null;
console.log(children);

// Basic Operators
// Math Operators
let x = 3;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

x++;
console.log(x);
x--;
console.log(x);

// x = x + 10;
x += 10;
// x = x - 1;
x -= 1;
console.log(x);

// comparison operators
console.log(x > y);
console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// operator precedence
// a = b = 25 - 10 * 5;
let a;
let b;
a = b = (25 - 10) * 5;
console.log(a, b);

// string concatenation and template literals
const firstName = 'John';
const job = 'teacher';
const birthYear = 1990;
const year = 2023;

// const john = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
const john = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(john);

// if / else statements
// const age = 15;

// if (age >= 18) {
//   console.log('You are an adult. You can drink alcohol');
// } else if (age === 17) {
//   console.log('You are still underage. But you can drink wine');
// } else {
//   console.log('You are underage. You cannot drink alcohol yet');
// }

// switch (age) {
//   case 18:
//     console.log('You are an adult. You can drink alcohol');
//     break;
//   case 17:
//     console.log('You are still underage. But you can drink wine');
//     break;
//   default:
//     console.log('You are underage. You cannot drink alcohol yet');
//     break;
// }

// type conversion and coercion
const inputYear = '1991';
const currentYear = 2023;
// const inputYearNumber = Number(inputYear);
// console.log(inputYearNumber);
// console.log(currentYear - inputYearNumber);

// type coercion
console.log(currentYear - inputYear);

// Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// const hasLicensed = '';

// if (hasLicensed) {
//   console.log('You can drive');
// }

// Equality Operators: == vs ===
// const age = 17;
// if (age == 18) console.log('you are an adult'); // loose comparison
// if (age === 18) console.log('you are an adult'); // strict comparison
// if (age !== 18) console.log('you are underaged');

// Logical Operator (and, or)

const hasLicense = true;
const hasGoodVision = false;

// if (hasLicense && hasGoodVision) {
if (hasLicense || hasGoodVision) {
  console.log('You can drive');
} else {
  console.log('You cannot drive');
}

// Ternary Operator (expression ? truthy statement : falsy statement)
const age = 15;
// if (age >= 18) {
//   console.log('You can drink alcohol');
// } else {
//   console.log('You cannot drink');
// }

age >= 18 ? console.log('You can drink alcohol') : console.log('You cannot drink');

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('You can drive');

// functions
// function declaration
// function logger() {
//   console.log('My name is John');
// }

// logger(); // function calling, invoking
// logger();
// logger();
// logger();

// function declaration
// function logger(data) {
//   // parameter
//   console.log(data);
// }

// function expression
const logger = function (data) {
  console.log(data);
};

logger('Hello World'); // argument
const myAge = 32;
logger(myAge);

// const calcAge = function (birthYear) {
//   let age = 2023;
//   console.log(age - birthYear);
// };

// Arrow Function
const calcAge = (birthYear) => {
  let age = 2023;
  console.log(age - birthYear);
};

calcAge(1996);

// arrays, objects
