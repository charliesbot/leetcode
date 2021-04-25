/*
 * Given an array nums of integers,
 * we need to find the maximum possible sum of elements
 * of the array such that it is divisible by three.
 */

const maxSumDivThree = (nums: number[]): number => {
  let dp = [0, -Infinity, -Infinity];

  nums.forEach((num) => {
    const temp = [0, 0, 0];
    temp[0] = Math.max(dp[0], dp[num % 3] + num);
    temp[1] = Math.max(dp[1], dp[(num + 1) % 3] + num);
    temp[2] = Math.max(dp[2], dp[(num + 2) % 3] + num);

    dp = temp;
  });

  return dp[0];
};

export { maxSumDivThree };
