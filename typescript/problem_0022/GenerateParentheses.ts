/*
 * [22] Generate Parentheses
 *
 * Difficulty: TODO
 */

/*
 * Given n pairs of parentheses,
 * write a function to generate all
 * combinations of well-formed parentheses.
 */

type DFS = (result: string[], string: string, left: number, right: number, n: number) => void;

const dfs: DFS = (result, string, left, right, n) => {
  if (string.length === n * 2) {
    result.push(string);
    return;
  }

  if (left < n) {
    dfs(result, string + '(', left + 1, right, n);
  }

  if (right < left) {
    dfs(result, string + ')', left, right + 1, n);
  }
};

const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];

  dfs(result, '', 0, 0, n);

  return result;
};

export { generateParenthesis };
