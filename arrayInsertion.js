const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const commonElements = arr1.filter(x => arr2.includes(x))

console.log(commonElements) // [3, 4]

// alternative method


const set_two = new Set(arr2)
const commonItems = arr1.filter(x => set_two.has(x))

console.log(commonItems) // [3, 4]