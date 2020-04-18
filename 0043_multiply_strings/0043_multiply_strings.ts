/* Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2, also represented as a string.
 */

const multiply = (num1: string, num2: string) => {
  const [A, B] = num1.length >= num2.length ? [num1, num2] : [num2, num1];
  const result = Array(num1.length + num2.length).fill(0);

  let carry = 0;
  let flag = 0;

  for (let i = B.length - 1; i >= 0; i--) {
    for (let j = A.length - 1; j >= 0; j--) {
      const resultIndex = A.length - 1 - j + flag;
      const current =
        parseInt(A[j]) * parseInt(B[i]) + carry + result[resultIndex];
      carry = Math.floor(current / 10);
      result[resultIndex] = current % 10;
      if (j === 0 && carry > 0) {
        result[A.length + flag] += carry;
        carry = 0;
      }
    }
    flag++;
  }

  while (result.length > 1) {
    if (result[result.length - 1] > 0) {
      break;
    }

    result.pop();
  }

  return result.reverse().join("");
};

export { multiply };
