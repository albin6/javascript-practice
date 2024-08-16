function secondLargest(nums) {
    if (Array.isArray(nums) || nums.length < 2) {
        return null
    }
    let lar = Number.MIN_SAFE_INTEGER
    let secLar = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > lar) {
            secLar = lar
            lar = nums[i]
        } else if (nums[i] > secLar && nums[i] < lar) {
            secLar = nums[i]
        }
    }
    if (secLar === Number.MIN_SAFE_INTEGER) {
        return null
    }
    return secLar
}

console.log(secondLargest([3, 5, 7, 5, 7])); // 5
console.log(secondLargest([10, 10, 10]));    // null
console.log(secondLargest([5, 3, 1]));       // 3
console.log(secondLargest([1]));             // null
