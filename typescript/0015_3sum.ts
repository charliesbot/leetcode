const threeSum = (nums: number[]) => {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }

        while (nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }

      if (sum < 0) {
        left++;
      }

      if (sum > 0) {
        right--;
      }
    }
  }

  return result;
};

const testInput = [-2, 0, 0, 2, 2];
// const input = [-1,0,1,2,-1,-4];
threeSum(testInput);
