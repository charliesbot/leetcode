/*
 * [7] Reverse Integer
 *
 * Difficulty: TODO
 */

/*
 * Given a signed 32-bit integer x, return x with its digits reversed.
 *
 * If reversing x causes the value to go outside the signed 32-bit integer range
 * [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

const reverse = (x: number): number => {
  let negativeHelper = x < 0 ? -1 : 1;
  let currentNumber = Math.abs(x);
  let result = 0;

  while (currentNumber > 0) {
    const mod = currentNumber % 10;
    currentNumber = Math.floor(currentNumber / 10);
    result = result * 10 + mod;
  }

  return result * negativeHelper;
};

export { reverse };
