/*
 * Given an unsorted array of integers,
 * find the length of longest increasing subsequence.
 */

export const lengthOfLIS = (nums: number[]) => {
  let max = 1;
  let result = new Array(nums.length).fill(1);
  for (let i = 1; i <= nums.length; i++) {
    const right = nums[i];
    for (let j = 0; j < i; j++) {
      const left = nums[j];
      if (left < right) {
        result[i] = Math.max(result[j] + 1, result[i]);
        max = Math.max(result[i], max);
      }
    }
  }

  return nums.length === 0 ? 0 : max;
};
