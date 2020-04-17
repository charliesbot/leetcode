/*
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const numbers = {
  "0": [" "],
  "1": [],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
  const result = [];

  if (!digits) {
    return result;
  }

  const dfs = (index, acum) => {
    if (index === digits.length) {
      result.push(acum);
      return;
    }

    const letters = numbers[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      dfs(index + 1, acum + letters[i]);
    }
  };

  dfs(0, "");

  return result;
};

console.log(letterCombinations("20"));
