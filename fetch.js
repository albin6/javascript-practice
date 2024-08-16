async function readData() {
  try {
    const data = await fetch("https://www.google.com");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readData()