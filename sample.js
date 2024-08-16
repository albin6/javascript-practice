let counter = 0;
function getData() {
  console.log(`data fetching ${counter++}`);
}

function myFunc(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

const debouncedFunc = myFunc(getData, 300);

let count = 0;
function getStatus() {
  console.log(`Button Clicked ${count++}`);
}

function mythrottle(func, delay) {
  let status = true
  return function() {
    if (status) {
      status = false
      func()
      setTimeout(() => {
        status = true
      }, delay)
    }
  }
}

const throttleFunc = mythrottle(getStatus, 1000)


