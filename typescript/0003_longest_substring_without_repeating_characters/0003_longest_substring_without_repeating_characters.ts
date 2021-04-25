/*
 * Given a string, find the length of the
 * longest substring without repeating characters.
 */

const lengthOfLongestSubstring = (s: string): number => {
  const hash: { [key: string]: number } = {};
  let maxLength = 0;
  let length = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (hash[char] !== undefined && hash[char] >= start) {
      start = hash[char] + 1;
      length = i - start;
    }

    length++;
    hash[char] = i;

    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
};

export { lengthOfLongestSubstring };
