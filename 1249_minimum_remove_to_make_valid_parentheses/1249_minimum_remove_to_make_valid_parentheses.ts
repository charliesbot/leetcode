/*
 * Given a string s of '(' , ')' and lowercase English characters.
 *
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )
 * so that the resulting parentheses string is valid and return any valid string.
 *
 * Formally, a parentheses string is valid if and only if:
 *    - It is the empty string, contains only lowercase characters, or
 *    - It can be written as AB (A concatenated with B), where A and B are valid strings, or
 *    - It can be written as (A), where A is a valid string.
 */

type Entry = {
  symbol: "(" | ")";
  index: number;
};

const minRemoveToMakeValid = (s: string): string => {
  const stack: Entry[] = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      stack.push({ symbol: char, index: i });
      continue;
    }

    if (char === ")") {
      if (stack.length > 0) {
        const entry = stack.pop()!;
        if (entry.symbol === "(") {
          continue;
        }

        stack.push(entry);
      }

      stack.push({ symbol: char, index: i });
    }
  }

  const set = new Set(stack.map(({ index }) => index));

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!set.has(i)) {
      result += char;
    }
  }

  return result;
};

export { minRemoveToMakeValid };
