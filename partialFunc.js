function partial(func, ...args) {
  return function (...remainArgs) {
    return func(...args, ...remainArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const out = partial(add, 5);

console.log(out(1, 2));
