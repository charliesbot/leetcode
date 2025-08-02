/*
 * [139] Word Break
 *
 * Difficulty: TODO
 */

/*
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note:
 * The same word in the dictionary may be reused multiple times in the segmentation.
 * You may assume the dictionary does not contain duplicate words.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s: string, wordDict: string[]) {
  const wordSet = new Set(wordDict);
  const isWordBreak = new Set().add(0);

  for (let i = 0; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (!isWordBreak.has(j)) {
        // if we don't an initial point, is not a registered break.
        // Skip it
        continue;
      }

      if (wordSet.has(s.substring(j, i))) {
        isWordBreak.add(i);
        break;
      }
    }
  }

  return isWordBreak.has(s.length);
};

const dict = ["aaa", "aaaa"];
console.log(wordBreak("aaaaaaa", dict));
