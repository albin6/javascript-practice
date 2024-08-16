const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  getCarInfo() {
    console.log(
      `make : ${this.make}, model : ${this.model}, year : ${this.year}`
    );
  },
};

// car.getCarInfo()
// console.log(car.year);

// car.updateYear = function (newYear) {
//   this.year = newYear;
// };

// car.updateYear(2024);

// console.log(car.year);

// car.getCarInfo()

function countProperties() {
    let count = 0
    for (const key in car) {
        if (typeof key === 'string') {
            count++
        }
    }
    return count
}

console.log(countProperties())