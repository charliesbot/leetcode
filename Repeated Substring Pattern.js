/*
 * Given a non-empty string check if it can be constructed
 * by taking a substring of it and appending multiple copies
 * of the substring together.
 *
 * You may assume the given string consists of lowercase English letters
 * only and its length will not exceed 10000.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let s2 = s + s;
  s2 = s2.substring(s2.length - 1, 1);
  return s2.includes(s);
};

console.log(repeatedSubstringPattern("abcabccc"));
