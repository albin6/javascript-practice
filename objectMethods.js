// const person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
// };

// console.log(person.name)
// console.log(person["name"])

// for (const key in person) {
//  console.log(person[key])
// }

// const keys = Object.keys(person)
// console.log(keys)
// const values = Object.values(person)
// console.log(values)

// if (person.age > 35) {
//   delete person.age
// }

// console.log(person)

// const entries = Object.entries(person)
// console.log(entries)
// for (const [key, value] of entries) {
//   console.log(`${key} : ${value}`)
// }

// const addInfo = {hobbies : ["coding", "sleeping", "traveling"]}
// const updatedPerson = Object.assign({}, person, addInfo, {tags : ["id", "non", "sunt"]}, {index : 10})
// const updatedPerson = {...person, ...addInfo, ...{tags : "id"}}
// console.log(updatedPerson)

// Object Methods
const person = Object.create(
  {},
  {
    name: {
      value: "John",
      writable: true,
      enumerable: true,
      configurable: true,
    },
    age: {
      value: 30,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
);

// checking writeable
// console.log(person.name)

// person.name = "Mary"

// console.log(person.name)

//checking enumerable
// for (let key in person) {
//     console.log(person[key])
// }

// console.log(Object.keys(person))

// console.log(Object.values(person))

//checking configurable
// delete person.name
// person.name = "mary"

// defining properties
// Object.defineProperties(person, {
//   address: { value: "john villa" },
// });

// console.log(person);
// console.log(person.address);


const user = Object.create({}, {
  name : {
    value : "Albin",
    writable : false,
    enumerable : false,
    configurable : true
  }
})

console.log(user.name)

console.log("name" in user)

user.name = "Mary"

console.log(user.name)

for (const key in user) {
  console.log(user[key])
}

Object.defineProperty(user, 'name', {
  value : "Mary"
})

console.log(user.name)
