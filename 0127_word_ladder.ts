const getNextLetter = char => String.fromCharCode(char.charCodeAt(0) + 1);

const wordCombinator = (word, dictionary, queue) => {
  dictionary.delete(word);
  for (let i = 0; i < word.length; i++) {
    for (let char = "a"; char <= "z"; char = getNextLetter(char)) {
      const combined = word.substr(0, i) + char + word.substr(i + 1);
      if (dictionary.has(combined)) {
        queue.push(combined);
        dictionary.delete(combined);
      }
    }
  }
};

const ladderLength = function(beginWord, endWord, wordList) {
  const dictionary = new Set(wordList);
  const queue = [beginWord];
  let length;
  let distance = 0;

  while ((length = queue.length)) {
    for (let i = 0; i < length; i++) {
      const word = queue.shift();
      if (word === endWord) {
        return distance + 1;
      }
      wordCombinator(word, dictionary, queue);
    }
    distance++;
  }

  return 0;
};

// const beginWord = "hit";
// const endWord = "cog";
// const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const beginWord = "a";
const endWord = "c";
const wordList = ["a", "b", "c"];

console.log(ladderLength(beginWord, endWord, wordList));
