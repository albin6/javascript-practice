let obj1 = { name: "wick" };
let obj2 = { name: "mary" };
let obj3 = { name: "john" };

const weakmap = new WeakMap();

weakmap.set(obj1, "user1")
weakmap.set(obj2, "user2")
weakmap.set(obj3, "user3")

console.log(weakmap.get(obj1))

obj1 = null

console.log(weakmap.get(obj1))

console.log(weakmap.has(obj2))