// function findMax(arr) {
//     return Math.max(...arr)
// }

function findMax(arr) {
    let max = -Infinity // Number.MIN_SAFE_INTEGER
    console.log(max)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }        
    }
    return max
}

console.log(findMax([3, 5, 7, 2, 8]))