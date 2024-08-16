function mergeArray(arr1, arr2) {
    return [...arr1, ...arr2].sort()
}

console.log(mergeArray([1, 3, 5], [2, 4, 6]))