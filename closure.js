// let y = 20;

// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   let x = 10;
//   return inner;
// }

// outer()();

// function encaps() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     decrement: function () {
//       count--;
//     },
//     showCount: function () {
//       return count;
//     },
//     clearCounter : function () {
//         count = 0
//     }
//   };
// }

// const counter = encaps();

// console.log(counter.showCount())
// counter.increment()
// counter.increment()
// console.log(counter.showCount())
// counter.decrement()
// console.log(counter.showCount())
// counter.clearCounter()
// console.log(counter.showCount())

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// Output: 3, 3, 3 (because the closure captures the same `i` variable)
