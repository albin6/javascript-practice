function searchElem(arr, target) {
    for (const i of arr) {
        if (i === target) {
            return true
        }
    }
    return false
}

console.log(searchElem([1, 2, 3, 4, 5], 4))