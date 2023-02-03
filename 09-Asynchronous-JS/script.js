'use strict';

// AJAX Call: XMLHttpRequest
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Get neighbour country
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//     });
//   });
// };
// getCountryData('myanmar');

// callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Consuming, Chanining, Handling rejected Promises
// Throwing Errors manually
// Fetch API

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[0]); // country 1
      const neighbour = data[0].borders[0];
      //   const neighbour = 'adfjlkajdlfs';
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0]); // country 2
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      console.log('everything finished');
    });
};
// getCountryData('myanmar');

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => console.log(data));
// };
// whereAmI(52.508, 13.381);
// whereAmI(16.8394236, 96.0414867);

// Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN');
//     } else {
//       reject(new Error('YOu lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err.message));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//     return wait(1);
//   });

// Promise.resolve('abc').then((x) => console.log(x));
// Promise.reject(new Error('Problem !')).catch((x) => console.log(x));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
  });
};
// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    });
};
whereAmI();
