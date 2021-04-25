/*
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is equal to the
 * product of all the elements of nums except nums[i].
 */

const productExceptSelf = (nums: number[]) => {
  const result = [];
  let temp = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = temp;
    temp *= nums[i];
  }

  temp = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= nums[i];
  }

  return result;
};

export { productExceptSelf };
