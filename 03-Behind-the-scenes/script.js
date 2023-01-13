'use strict';

// Scoping in Practice
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';

//       output = 'NEW OUPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

const firstName = 'John';
// calcAge(1991);

// console.log(age);
// printAge();

// Hoisting and TDZ in practice
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'John';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// let addExpr = function (a, b) {
//   return a + b;
// };

// let addArrow = (a, b) => a + b;

// This Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };
// jonas.calcAge();

// const zack = {
//   year: 2002,
// };
// zack.calcAge = jonas.calcAge;
// zack.calcAge();

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

// jonas.calcAge();
// jonas.greet();

// Agruments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 3, 4, 5);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3, 4, 5);

// Objects vs Primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'John',
  age: 30,
};
const friend = me;

friend.age = 27;

console.log('Me', me);
console.log('Friend', friend);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'David';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'David';
// console.log('Befor marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// copying objects
const jessica2 = Object.assign({}, jessica);

jessica2.lastName = 'David';
jessica2.family.push('Mary');
console.log(jessica2);
console.log(jessica);
