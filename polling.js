const pollInterval = 3000;

function pollingFunction() {
  console.log("polling resource...");

  fetchingData()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function fetchingData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = "user data";
      res(data);
    }, 1000);
  });
}

const timer = setInterval(pollingFunction, pollInterval);


setTimeout(() => {
    clearInterval(timer)
}, 10000)