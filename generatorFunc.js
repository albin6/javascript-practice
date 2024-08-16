// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = numbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next()); // undefined

function* sequenceGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const res = sequenceGenerator(1, 5)

for (const element of res) {
    console.log(element)
}

