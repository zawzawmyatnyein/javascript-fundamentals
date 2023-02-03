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
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   // getter
//   get age() {
//     return 2023 - this.birthYear;
//   }

//   // static method
//   static hey() {
//     console.log('Hey there');
//   }
// }

// const jessica = new PersonCl('Jessica', 1995);
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
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.firstName = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1990);
// sarah.calcAge();
// console.log(sarah);

// ---------------------------------------//
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

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2010, 'Computer Science');

// mike.calcAge();
// mike.introduce();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Redirect constructor function to correct prototype
Student.prototype.constructor = Student;

// console.log(mike);
// console.dir(Student.prototype.constructor);

const merry = new Person('Marry', 1993);
// merry.calcAge();
// merry.introduce();

// ---------------------------- //
// Inheritance between "Classes" : ES6 Class syntax
class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static  method
  static hey() {
    console.log('Hey there!');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super must be called first in constructor
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2005, 'Computer Science');
// console.log(martha);

// martha.introduce();
// martha.calcAge();

// Inheritance Between "Classes:" Object.create
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
// console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// ------------------------------ //
// Encapsulation: Private class fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// there is also static version

class Account {
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening  an account, ${owner}`);
  }

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  // 4) Private methods
  #approveLoan(val) {
    if (val <= 1000) return true;
    else return false;
  }
}

const acc1 = new Account('John', 'EUR', 1111);
console.log(acc1.currency);
console.log(acc1.locale);
console.log(acc1.owner);
// console.log(acc1.#movements);
// console.log(acc1.#pin);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(560).withdraw(450);
console.log(acc1);
