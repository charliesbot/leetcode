/*
 * Given an unsorted array nums,
 * reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
 *
 * Example:
 * Input: nums = [3,5,2,1,6,4]
 * Output: One possible answer is [3,5,1,6,2,4]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = (nums, i) => {
  nums[i] ^= nums[i + 1];
  nums[i + 1] ^= nums[i];
  nums[i] ^= nums[i + 1];
};

var wiggleSort = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0 && nums[i] > nums[i + 1]) {
      swap(nums, i);
      continue;
    }

    if (i % 2 !== 0 && nums[i] < nums[i + 1]) {
      swap(nums, i);
    }
  }
};

const entry = [3, 5, 2, 1, 6, 4];
wiggleSort(entry);

console.log(entry);
