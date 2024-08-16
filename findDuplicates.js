function findDuplicate(arr) {
    const duplicateElement = []
    const elements = {}

    for (const i of arr) {
        if (elements[i]) {
            duplicateElement.push(i)
        } else {
            elements[i] = 1
        }
    }
    return duplicateElement
}

const arr = [1, 2, 3, 4, 3, 5, 6, 1];

console.log(findDuplicate(arr))