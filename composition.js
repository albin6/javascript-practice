function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(fn1, fn2) {
  return function (ax, by) {
    return fn1(fn2(ax, by), by);
  };
}

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(2, 3));