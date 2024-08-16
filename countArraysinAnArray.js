const arr = [2,8,[6],3,3,5,3,4,[5,4]]

let counter = 0
for (const elem of arr) {
    if (Array.isArray(elem)) {
        counter++
    }
}

console.log(counter)