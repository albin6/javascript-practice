function sumArray(arr) {
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4]))