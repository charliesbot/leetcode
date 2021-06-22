var createAbbr = (word: string) => {
  if (word.length < 3) {
    return word;
  }

  return word[0] + (word.length - 2).toString() + word[word.length - 1];
};

class ValidWordAbbr {
  hash: { [key: string]: Set<string> } = {};
  constructor(dictionary: string[]) {
    for (let i = 0; i < dictionary.length; i++) {
      const key = createAbbr(dictionary[i]);
      this.hash[key] = this.hash[key] || new Set();
      this.hash[key].add(dictionary[i]);
    }
  }

  isUnique(word: string) {
    const key = createAbbr(word);
    const words = this.hash[key];
    let result = words === undefined || words.has(word);
    return result;
  }
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */

const valid = new ValidWordAbbr(["deer", "door", "cake", "card"]);
valid.isUnique("dear");
valid.isUnique("door");
valid.isUnique("cart");
valid.isUnique("cake");
