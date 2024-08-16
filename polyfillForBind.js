const obj = {
  name: "john",
  age: 25,
};

function display(homeTown, dist) {
  console.log(this.name + " " + this.age + " " + homeTown+ " " + dist);
}

const objFunc = display.bind(obj, "tvla");
objFunc("pta");

Function.prototype.myBind = function(...args) {
    const func = this
    const params = args.slice(1)
    return function(...args1) {
        func.apply(args[0], [...params, ...args1])
    }
}

const myObjFunc = display.myBind(obj, "tvla")
myObjFunc("pta")