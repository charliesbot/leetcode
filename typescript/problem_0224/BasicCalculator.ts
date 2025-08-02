/*
 * [224] Basic Calculator
 *
 * Difficulty: TODO
 */

/*
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string may contain open ( and closing parentheses ),
 * the plus + or minus sign -, non-negative integers and empty spaces .
 */

export const getNumber = (s: string, index: number): [number, number] => {
  let helper = index;
  while (helper + 1 < s.length && isNumber(s[helper + 1])) {
    helper++;
  }

  return [parseInt(s.slice(index, helper + 1)), helper - 1];
};

const isNumber = (char: string) => !isNaN(parseInt(char));

const calculate = (s: string): number => {
  let sign = 1;
  let result = 0;
  const stack: number[] = [];
  const operators: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (currentChar === ' ') {
      continue;
    }

    if (currentChar === '+') {
      sign = 1;
      continue;
    }

    if (currentChar === '-') {
      sign = -1;
      continue;
    }

    if (isNumber(currentChar)) {
      let num = currentChar;
      while (i + 1 < s.length && isNumber(s[i + 1])) {
        num += s[i + 1];
        i++;
      }
      result += sign * parseInt(num);
      continue;
    }

    if (currentChar === '(') {
      stack.push(result);
      result = 0;
      operators.push(sign);
      sign = 1;
      continue;
    }

    if (currentChar === ')') {
      const operator = operators.pop() || 1;
      const previousResult = stack.pop() || 0;
      result = operator * result + previousResult;
      continue;
    }
  }

  return result;
};

export { calculate };
