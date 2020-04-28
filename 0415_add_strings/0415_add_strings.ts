/*
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 *
 * Note:
 * - The length of both num1 and num2 is < 5100.
 * - Both num1 and num2 contains only digits 0-9.
 * - Both num1 and num2 does not contain any leading zero.
 * - You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

const addStrings = (num1: string, num2: string): string => {
  let num1Cursor = num1.length - 1;
  let num2Cursor = num2.length - 1;
  let result = "";

  let carry = 0;

  while (num1Cursor >= 0 || num2Cursor >= 0) {
    const digit1 = parseInt(num1[num1Cursor]) || 0;
    const digit2 = parseInt(num2[num2Cursor]) || 0;
    const sum = digit1 + digit2 + carry;

    carry = Math.floor(sum / 10);

    result = (sum % 10).toString() + result;
    num1Cursor--;
    num2Cursor--;
  }

  if (carry > 0) {
    result = `${carry}${result}`;
  }

  return result;
};

export { addStrings };
