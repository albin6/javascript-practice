// const promiseOne = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("promise one resolved");
//   }, 1000);
// });

// function promiseTwo() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("promise two resolved");
//     }, 1000);
//   });
// }

// const promiseThree = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("promise three resolved");
//   }, 1000);
// });

// function promiseFour() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("promise four resolved");
//     }, 1000);
//   });
// }

// promiseOne
//   .then((data) => {
//     console.log(data);
//     return promiseTwo();
//   })
//   .then((data) => {
//     console.log(data);
//     return promiseThree;
//   })
//   .then((data) => {
//     console.log(data);
//     return promiseFour();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -----------promise types------------

const p1 = new Promise((res, rej) => {
  const status = true;
  setTimeout(() => {
    if (status) {
      res("promise 1 resolve");
    }
  });
});

const p2 = new Promise((res, rej) => {
  const status = true;
  setTimeout(() => {
    if (status) {
      // res("promise 2 resolve");
      rej("promise 2 rejected");
    }
  });
});

const p3 = new Promise((res, rej) => {
  const status = true;
  setTimeout(() => {
    if (status) {
      res("promise 3 resolve");
    }
  });
});

Promise.all([p1, p2, p3])
  .then((result) => console.log("all", result))
  .catch((err) => console.log(err));

Promise.allSettled([p1, p2, p3])
  .then((result) => console.log("allSettled", result))
  .catch((err) => console.log(err));

Promise.race([p1, p2, p3])
  .then((result) => console.log("race", result))
  .catch((err) => console.log(err));

Promise.any([p1, p2, p3])
  .then((result) => console.log("any", result))
  .catch((err) => console.log(err));