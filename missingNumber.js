function missingNumber(nums) {
    if (nums.length >= 2) {
        let curr = nums[0];
        let next = curr + 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== next) {
                return next;
            }
            curr = nums[i];
            next = curr + 1;
        }
    }
}

const nums = [2, 3, 5, 6, 7, 8];

console.log(missingNumber(nums));
