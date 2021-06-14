/*
 * Given an unsorted array of integers,
 * find the number of longest increasing subsequence.
 */

// const findNumberOfLIS = (nums: number[]): number => {
// const length = nums.length;

// if (length <= 1) {
// return length;
// }

// let lengths = Array(length).fill(0);
// let counts = Array(length).fill(1);

// for (let idx = 0; idx < length; idx++) {
// for (let i = 0; i < idx; i++) {
// if (nums[i] < nums[idx]) {
// //bigger
// if (lengths[i] >= lengths[idx]) {
// lengths[idx] = 1 + lengths[i];
// counts[idx] = counts[i];
// } else if (lengths[i] + 1 === lengths[idx]) {
// counts[idx] += counts[i];
// }
// }
// }
// }

// const longest = Math.max(...lengths);

// return counts.reduce((acum, current, index) => {
// if (lengths[index] === longest) {
// acum += current;
// }

// return acum;
// }, 0);
// };

// export { findNumberOfLIS };
