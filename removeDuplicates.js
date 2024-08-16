// function removeDuplicate(arr) {
//     return [... new Set(arr)]
// }

function removeDuplicate(arr) {
    let size = arr.length
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (arr[i] === arr[j] && i != j) {
                for (let k = j; k < arr.length -1; k++) {
                    arr[k] = arr[k+1]
                }
                size--
                i--
            }
        }
    }
    return arr
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4]))