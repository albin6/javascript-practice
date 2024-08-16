function arSum(nums) {
    let sum = 0
    if (!Array.isArray(nums)) {
        return sum
    }
    if (Object.getPrototypeOf(nums) === Object.prototype) {
        for (const key in nums) {
            if (nums.hasOwnProperty(key)) {
                sum += nums[key]
            } else {
                sum += arSum(nums[key])
            }
        }
    }
    for (const elem of nums) {
        if (Array.isArray(elem)) {
            sum += arSum(elem)
        } else {
            sum += elem
        }
    }
    return sum
}

const arr = [1,[2, 3], {a : 10, b : 20}, 4, 5,[6, 7], {x : 5}, 8]
console.log(arSum(arr))