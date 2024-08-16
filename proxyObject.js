const target = {
  name: "John",
  age: 25,
  
};

const handler = {
  get: function (target, property) {
    if (property === "age") {
      console.log("Age is private");
    } else {
      return target[property];
    }
  },
  set: function (target, property, value) {
    if (property === "age" && value < 0) {
      console.log("age cannot be negative");
    } else {
        target[property] = value
        console.log("age updated")
    }
  },
};

const proxyObj = new Proxy(target, handler);

console.log(proxyObj.name)

// proxyObj.age = -1


