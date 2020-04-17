/*
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is
 * equal to the product of all the elements of nums except nums[i].
 */

const productExceptSelf = function(nums: number[]) {
  const ret = [];

  for (let i = 0, temp = 1; i < nums.length; i++) {
    ret[i] = temp;
    temp *= nums[i];
  }

  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    ret[i] *= temp;
    temp *= nums[i];
  }

  return ret;
};

console.log(productExceptSelf([1, 2, 3, 4]));
