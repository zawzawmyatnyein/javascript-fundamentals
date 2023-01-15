'use strict';

// default parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 150 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //   console.log(booking);
  bookings.push(booking);
};

createBooking('AS123', 2, 300);
createBooking('AS123');
createBooking('AS123', 3);
// console.log(bookings);

// Passing Arguments : Values vs. Reference
const flight = 'LH234';
const john = {
  name: 'John Doe',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    console.log('checkd in');
  } else {
    console.log('wrong passport');
  }
};

// checkIn(flight, john);
// console.log(flight);
// console.log(john);

// Functions Accepting callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(oneWord('Hello World'));
// console.log(upperFirstWord('hello there myfriend'));

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// transformer('Javascript is the best!', oneWord);
// transformer('Javascript is the best!', upperFirstWord);

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHello = greet('Hello');
const greeterHello = greetArr('Hello');
// greeterHello('John');
// greeterHello('Mike');
// greet('Hey')('Cindy');
// greetArr('Hey')('Cindy');

// call, apply, bind Methods
const airasia = {
  airline: 'Air Asia',
  iataCode: 'AA',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// airasia.book(239, 'John Doe');
// console.log(airasia.bookings);

const mai = {
  airline: 'Myanmar Air Line',
  iataCode: 'MAI',
  bookings: [],
};

const silkair = {
  airline: 'Silk Air',
  iataCode: 'SA',
  bookings: [],
};

const book = airasia.book;
// book(123, 'Sarah');

// Call Method
// book.call(mai, 123, 'Sarah');
// book.call(silkair, 456, 'Williams');

// Apply Method
const flightData = [123, 'Sarah'];
// book.apply(mai, flightData);
// book.apply(silkair, flightData);

// Bind Method
// const bookMai = book.bind(mai, 123, 'Sarah');
const bookMai = book.bind(mai);
// bookMai(123, 'Sarah');
const bookSilkAir = book.bind(silkair);
// bookSilkAir(455, 'Williams');

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('this will run once');
};
// runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

(() => console.log('This will also never run again'))();

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// console.dir(booker);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 5);
