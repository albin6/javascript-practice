const obj = {
    name : "Albin",
    age : 20,
    address : {
        city : "Thiruvalla"
    }
}

const newObj = structuredClone(obj)

newObj.name = "John"
newObj.address.city = "pta"

console.log(obj)
console.log(newObj)