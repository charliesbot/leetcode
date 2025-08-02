/*
 * [127] Word Ladder
 *
 * Difficulty: TODO
 */

/*
 * Given two words (beginWord and endWord),
 * and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
 *
 * Only one letter can be changed at a time.
 *
 * Each transformed word must exist in the word list.
 *
 * Note:
 *
 * Return 0 if there is no such transformation sequence.
 *    - All words have the same length.
 *    - All words contain only lowercase alphabetic characters.
 *    - You may assume no duplicates in the word list.
 *    - You may assume beginWord and endWord are non-empty and are not the same.
 */

type LadderLength = (
  beginWord: string,
  endWord: string,
  wordList: string[]
) => number;

const ladderLength: LadderLength = (beginWord, endWord, wordList) => {
  const dictionary = new Set(wordList);
  const queue = [beginWord];
  let distance = 0;

  const wordCombinator = (word: string) => {
    dictionary.delete(word);
    for (let i = 0; i < word.length; i++) {
      for (
        let char = "a";
        char <= "z";
        char = String.fromCharCode(char.charCodeAt(0) + 1)
      ) {
        const combinedWord = word.slice(0, i) + char + word.slice(i + 1);
        if (dictionary.has(combinedWord)) {
          queue.push(combinedWord);
          dictionary.delete(combinedWord);
        }
      }
    }
  };

  let length = 0;

  while ((length = queue.length)) {
    for (let i = 0; i < length; i++) {
      const currentWord = queue.shift() as string;

      if (currentWord === endWord) {
        return distance + 1;
      }

      wordCombinator(currentWord);
    }

    distance++;
  }

  return 0;
};

export { ladderLength };
