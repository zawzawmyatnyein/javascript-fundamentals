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

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (err) => reject(err)
//     );
//   });
// };
// getPosition().then((pos) => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     });
// };
// whereAmI();

// Consuming Promises with Asyn/Await
// Error Handling with try...catch

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    const geoResult = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    if (!geoResult.ok) throw new Error('Problem getting location data');

    const geoData = await geoResult.json();
    console.log(geoData);
    const { country } = geoData;

    // const country = 'adfdsfasdf';

    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${geoData.country}`);
    // const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
// whereAmI();

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.log(err.message);
  }
};
// get3Countries('myanmar', 'canada', 'japan');

// Other Promises Combinators: race, allSettled, any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

// Promise.allSettled
// prettier-ignore
Promise.allSettled([
    Promise.resolve('Success'),
    new Promise((resolve, reject) => setTimeout(reject, 5000, 'ERROR')),
    Promise.resolve('Another success')
]).then(
  (res) => console.log(res)
);

// prettier-ignore
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
])
.then((res) => console.log(res))
.catch((err) => console.log(err));

// Promise.any
// prettier-ignore
Promise.any([
    new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Success')),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
])
.then((res) => console.log(res))
.catch((err) => console.log(err));
