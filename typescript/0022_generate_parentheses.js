/*
 * Given n pairs of parentheses,
 * write a function to generate all combinations
 * of well-formed parentheses.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  dfs(result, "", 0, 0, n);
  return result;
};

function dfs(result, string, left, right, n) {
  if (string.length === n * 2) {
    result.push(string);
    return;
  }

  if (left < n) {
    dfs(result, string + "(", left + 1, right, n);
  }

  if (left > right) {
    dfs(result, string + ")", left, right + 1, n);
  }
}

console.log(generateParenthesis(3));
