function promiseFunc() {
  return new Promise((res, rej) => {
    const timer = 3000
    setTimeout(() => {
      if (timer <= 2000) {
        res("success");
      } else {
        rej("failed");
      }
    }, timer);
  });
}

promiseFunc()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));