function threeSum(nums) {
  let out = [];
  if (nums.length < 3) {
    return out;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        out.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) start++;
        while (start < end && nums[end] === nums[end + 1]) end--;
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return out;
}

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
