const nums = [5, 2, 3, 4, 5, 6, 7, 1, 2]

function thirdLargest(nums) {
    let largest = Number.MIN_SAFE_INTEGER
    let secondLargest = Number.MIN_SAFE_INTEGER
    let thirdLargest = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            thirdLargest = secondLargest
            secondLargest = largest
            largest = nums[i]
        } else if (nums[i] < largest && nums[i] > secondLargest) {
            thirdLargest = secondLargest
            secondLargest = nums[i]
        } else if (nums[i] < secondLargest && nums[i] > thirdLargest) {
            thirdLargest = nums[i]
        }
    }
    return thirdLargest
}

console.log(thirdLargest(nums))