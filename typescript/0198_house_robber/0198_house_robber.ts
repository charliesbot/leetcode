/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  let inclusive = 0;
  let exclusive = 0;

  nums.forEach(current => {
    let temp = inclusive;
    inclusive = Math.max(exclusive + current, inclusive);
    exclusive = temp;
  });

  return inclusive;
};
