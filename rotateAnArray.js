function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        const last = arr[arr.length -1]
        arr.pop()
        arr.unshift(last)
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];

rotateArray(arr, 3)

console.log(arr)