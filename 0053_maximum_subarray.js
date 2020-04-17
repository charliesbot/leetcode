/*
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
