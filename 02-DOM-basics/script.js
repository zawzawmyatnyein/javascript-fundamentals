'use strict';

const h1El = document.querySelector('h1');
// const pEl = document.querySelector('#paragraph');
const pEl = document.getElementById('paragraph');
const btnEl1 = document.querySelector('.btn-1');
const inputEl = document.querySelector('input');
// const btnEls = document.getElementsByClassName('btn');
// const btnEls = document.querySelectorAll('.btn');
// const anchorEl = document.getElementsByTagName('a');

// console.log(h1El);
// console.log(pEl);
// console.log(btnEl1);
// console.log(btnEls);
// console.log(anchorEl);

// console.log(h1El.textContent);
// console.log(pEl.textContent);
// console.log(inputEl.value);

h1El.style.color = 'red';
h1El.style.fontSize = '30px';

// pEl.classList.add('p-1');
// pEl.classList.remove('p-1');

const clickHanlder = function () {
  pEl.classList.toggle('p-1');
};

btnEl1.addEventListener('click', clickHanlder);

setTimeout(function () {
  btnEl1.removeEventListener('click', clickHanlder);
}, 5000);

inputEl.addEventListener('change', function (event) {
  console.log(event.target.value);
});
