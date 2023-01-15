// String Methods

// const str = 'Hello World 123';

// console.log(String(1234));
// console.log(typeof str);
// console.log(str[4]);
// console.log(str.indexOf('W'));
// console.log(str.lastIndexOf('o'));
// console.log(str.slice(0, 4));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(' '));
// console.log(str.startsWith('Hel'));
// console.log(str.endsWith('234'));
// console.log(str.includes('fdsa'));
// console.log(str.replace('World', 'Earth'));
// console.log('    Hello World    '.trim());

// const password = 'thisispassword';
// console.log(password.padStart(20, '*'));
// console.log(password.padEnd(20, '*'));
// console.log(password.repeat(3));

// const strArr = ['h', 'e', 'l', 'l', 'o'];
// console.log(strArr.join(''));

// The Spread Operator (...)

// const arr = [7, 8, 9];
// const newArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const originalArr = [1, 2, 3, 4, 5];
// const copyArr = originalArr.slice();
// const copyArr = [...originalArr];
// console.log(copyArr);

// Iterables: arrays, strings, maps, sets
// const str = 'John';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 27,
// };

// const johnCopy = { ...john, lastName: 'Cena' };
// console.log(johnCopy);

// Destructuring Arrays, Objects
// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// const [x, , z] = arr;
// console.log(x, y, z);
// console.log(x, z);
// console.log(arr);

let primary = 'blue';
let secondary = 'gray';

// let temp = primary;
// primary = secondary;
// secondary = temp;
// console.log(primary, secondary);
[primary, secondary] = [secondary, primary];
// console.log(primary, secondary);

function destruct() {
  const a = 3;
  const b = 5;
  //   return [a, b];
  return { first: 'Hello', second: 'World' };
}

// const [x, y] = destruct();
const { first: x, second: y } = destruct();
// console.log(x, y);

// Rest Parameter
const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

// add(2, 3, 4, 5, 6, 7);

// Logical Assignment Operators
const restaurant1 = {
  name: 'Capri',
  numGuests: 0,
};

const restaurant2 = {
  name: 'La Pizza',
  owner: 'Giovanni',
  numGuests: 0,
};

// restaurant2.numGuests = restaurant2.numGuests ? restaurant2.numGuests : 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;
restaurant2.numGuests ||= 10; // OR assignment operator
// restaurant2.numGuests &&= 10; // AND assignment operator

restaurant1.numGuests ??= 10; // nullish assignment operator (null or undefined)

// console.log(restaurant1);
// console.log(restaurant2);

// Nullish Coalescing Operator(null, undefined)
const guest = restaurant1.numGuests ?? 10;
// console.log(guest);

// Short Circuiting (&& and ||)
// console.log(3 || 'John');
// console.log('' || 'John');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// console.log(0 && 'John');
// console.log(7 && 'John');
// console.log('Hello' && 23 && null && 'John');

// array ,objects,
const company = {
  team1: 'Front End',
  team2: 'Back End',
  members: [
    ['John', 'Jane', 'Zack'],
    ['Jones', 'Zuka', 'Mike'],
  ],
  performance: '3:2',
  date: 'Now 12th 2022',
};

// console.log(Object.entries(company));

// for (const [key, val] of Object.entries(company)) {
//   console.log(key, val);
// }

// console.log(Object.values(company));
// console.log(Object.keys(company));

// optional chaining
const results = [
  {
    name: 'Cheese Pizza',
    ingredients: ['Cheese', 'Flour', 'Tomato'],
    websiteUrl: 'https://www.makepizza.com',
  },
  {
    name: 'BBQ Pizza',
    ingredients: ['Meat', 'Flour', 'Tomato'],
  },
];

const [first, second] = results;

// console.log(first.name, first.ingredients, first.websiteUrl);

// console.log(second?.name, second?.ingredients, second?.websiteUrl);

// Sets
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(orderSet);

// console.log(new Set('JohnDoe'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
// console.log(orderSet);
orderSet.delete('Risotto');
// console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Maps
const rest = new Map();
rest.set('name', 'John');
rest.set(1, 'Teacher');
rest.set(true, 'hasLicense');
// console.log(rest);

rest.set('nationality', 'American').set('age', 32).set('marital status', 'single');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// console.log(rest.has('age'));
// rest.delete('marital status');
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

for (const [key, val] of question) {
  console.log(key, val);
}

console.log(question.entries());
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
