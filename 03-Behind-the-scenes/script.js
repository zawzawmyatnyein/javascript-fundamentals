'use strict';

// Scoping in Practice
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';

      output = 'NEW OUPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }

    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'John';
// calcAge(1991);

// console.log(age);
// printAge();

// Hoisting and TDZ in practice
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'John';
let job = 'teacher';
const year = 1991;

// console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

let addExpr = function (a, b) {
  return a + b;
};

let addArrow = (a, b) => a + b;

// This Keyword in Practice
