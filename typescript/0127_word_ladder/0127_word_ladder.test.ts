import { ladderLength } from "./0127_word_ladder";

test("test1", () => {
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  expect(ladderLength(beginWord, endWord, wordList)).toEqual(5);
});
