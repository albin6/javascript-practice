function memoize(func) {
    const cache = {}
    return function(key) {
        if (cache[key]) {
            return cache[key]
        }
        const result = func(key)
        cache[key] = result

        return result
    }
}

function slowFunction(num) {
    for (let i = 0; i < 6000000000; i++) {}
    return num * 2
}

const memoizedFunction = memoize(slowFunction)

console.log(memoizedFunction(5))
console.log('hello')
console.log(memoizedFunction(6))
console.log(memoizedFunction(5))
console.log(memoizedFunction(6))
