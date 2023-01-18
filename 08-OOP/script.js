'use strict';

// Constructor Functions and new Operator
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never declare methods like this
//   //   this.calcAge = function () {
//   //     console.log(2023 - this.birthYear);
//   //   };
// };

// const john = new Person('John', 1991);
// console.log(john);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const matilda = new Person('Matilda', 2002);
// const jack = new Person('Jack', 1989);
// console.log(matilda, jack);

// const zack = { firstName: 'Zack', birthYear: 2000 };

// console.log(john instanceof Person);
// console.log(zack instanceof Person);

// Person.hey = function () {
//   console.log('Hey there');
// };
// Person.hey();

// john.hey();

// Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// john.calcAge();
// matilda.calcAge();

// console.log(john.__proto__);
// console.log(john.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(jack));
// console.log(Person.prototype.isPrototypeOf(zack));

// Person.prototype.species = 'Humans';
// console.log(john.species, matilda.species);
// console.log(john);

// console.log(john.hasOwnProperty('firstName'));
// console.log(john.hasOwnProperty('species'));

// Prototypal Inheritance on Built-In Objects
// Object.prototype (top of prototype chain)
// console.log(john.__proto__.__proto__);
// console.log(john.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [3, 5, 7, 7, 5, 8, 9];
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// Example 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// ES6 Classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // getter
  get age() {
    return 2023 - this.birthYear;
  }

  // static method
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCl('Jessica', 1995);
// console.log(jessica.age);

// PersonCl.hey();
// jessica.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Setters and Getters
const account = {
  owner: 'John',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.firstName = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1990);
sarah.calcAge();
console.log(sarah);

// Inheritance Between Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
