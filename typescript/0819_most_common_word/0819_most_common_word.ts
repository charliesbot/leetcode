/*
 *
 * Given a paragraph and a list of banned words,
 * return the most frequent word that is not in the list of banned words.
 * It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
 *
 * Words in the list of banned words are given in lowercase,
 * and free of punctuation. Words in the paragraph are not case sensitive.
 *
 * The answer is in lowercase.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  banned = new Set(banned);
  const punctuation = new Set([".", ",", " ", "!", "?"]);
  const hash = {};
  let maxWord = "";
  let currentWord = "";
  for (let i = 0; i <= paragraph.length; i++) {
    const char = paragraph[i];
    if (punctuation.has(char) || i === paragraph.length) {
      currentWord = currentWord.toLowerCase();
      if (!banned.has(currentWord) && currentWord) {
        hash[currentWord] = hash[currentWord] || 0;
        hash[currentWord]++;
        maxWord = hash[maxWord] > hash[currentWord] ? maxWord : currentWord;
      }
      currentWord = "";
    } else {
      currentWord += paragraph[i];
    }
  }

  return maxWord;
};

console.log(mostCommonWord("Bob", []));
