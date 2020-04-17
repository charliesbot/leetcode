/*
 * Given a string containing just
 * the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *    1. Open brackets must be closed by the same type of brackets.
 *    2. Open brackets must be closed in the correct order.
 *    3. Note that an empty string is also considered valid.
 */

const isValidParenthesis = (s: string): boolean => {
  const dict: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const array: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (dict.hasOwnProperty(current)) {
      array.push(dict[current]);
      continue;
    }

    const popped = array.pop();

    if (popped !== current) {
      return false;
    }
  }

  return array.length === 0;
};

export { isValidParenthesis };
