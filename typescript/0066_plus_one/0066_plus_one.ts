/*
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list,
 * and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 */

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1;

    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};
