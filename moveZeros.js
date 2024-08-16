function moveZeros(arr) {
    const newArr = []
    let count = 0
    for (const i of arr) {
        if (i != 0) {
            newArr.push(i)
        }
        else {
            count++
        }
    }
    for (let i = 0; i < count; i++) {
        newArr.push(0)
    }
    return newArr
}

const arr = [0, 1, 0, 3, 12];

console.log(moveZeros(arr))