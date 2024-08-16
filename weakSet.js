const weakSet = new WeakSet();

let obj1 = { name: "john" };
let obj2 = { name: "john" };
let obj3 = { name: "mary" };

weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj3);

// weakSet.delete(obj1)
// obj2 = null

console.log(weakSet.has(obj1))
console.log(weakSet.has(obj2))