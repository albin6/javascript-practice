const sum = new Function('a', 'b', 'return a + b')

const sumIs = sum(10, 20)

console.log(sumIs)

var x = 10

function demo() {
    const x = 20
    return new Function("return x")
    // return function () {
    //     return x
    // }
}