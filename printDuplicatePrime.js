function duplicatePrimes(arr) {
  const primeArr = arr.filter((x) => {
    let flag = true;
    for (let i = 2; i <= x / 2; i++) {
      if (x % i === 0) {
        flag = false;
      }
    }
    if (flag) {
      return x;
    }
  });
  const elemCount = {};
  const duplicatePrimes = [];
  for (const element of primeArr) {
    if (elemCount[element]) {
      if (!duplicatePrimes.includes(element)) {
        duplicatePrimes.push(element);
      }
    } else {
      elemCount[element] = 1;
    }
  }
  return duplicatePrimes;
}

const nums = [5, 2, 3, 5, 1, 2, 7, 3, 8, 5];

console.log(duplicatePrimes(nums));
