/*
 * Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".
 *
 * In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".
 *
 * For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications
 * of the following extension operation: choose a group consisting of characters c,
 * and add some number of characters c to the group so that the size of the group is 3 or more.
 *
 * For example, starting with "hello", we could do an extension on the group "o" to get "hellooo",
 * but we cannot get "helloo" since the group "oo" has size less than 3.
 *
 * Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".
 *
 * If S = "helllllooo", then the query word "hello" would be stretchy because of
 * these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.
 *
 * Given a list of query words, return the number of words that are stretchy.
 */

const getWordDict = (word: string) => {
  const hash = word
    .split("")
    .reduce<{ [key: string]: number }>((acum, current) => {
      acum[current] = acum[current] || 0;
      acum[current]++;
      return acum;
    }, {});
  return hash;
};

const expressiveWords = (S: string, words: string[]): number => {
  let counter = 0;

  const sDict = getWordDict(S);

  words.forEach((word) => {
    const wordDict = getWordDict(word);
  });
};

export { expressiveWords };
