/*
 * Given a sequence of words, check whether it forms a valid word square.
 *
 * A sequence of words forms a valid word square if the kth row and column read the exact same string,
 * where 0 ≤ k < max(numRows, numColumns).
 *
 * Note:
 * The number of words given is at least 1 and does not exceed 500.
 * Word length will be at least 1 and does not exceed 500.
 * Each word contains only lowercase English alphabet a-z.
*/

/**
 * @param {string[]} words
 * @return {boolean}
 */

var validWordSquare = function(words) {
  for (let x = 0; x < words.length; x++) {
    for (let y = 0; y <= x; y++) {
      if (
        (y >= words[x].length && x < words[y].length) ||
        words[x].length > words.length ||
        words[x][y] !== words[y][x]
      ) {
        return false;
      }
    }
  }
  return true;
};

console.log(validWordSquare(["abcd", "bnrt", "crm", "dt"]));
