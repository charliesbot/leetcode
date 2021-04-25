/*
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 */

const expandFromCenter = (s: string, start: number, end: number) => {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }

  return end - start - 1;
};

const longestPalindrome = (s: string): string => {
  let start = 0;
  let end = 0;
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    longestLength = Math.max(
      expandFromCenter(s, i, i),
      expandFromCenter(s, i, i + 1)
    );

    if (longestLength > end - start) {
      start = i - Math.floor((longestLength - 1) / 2);
      end = i + Math.floor(longestLength / 2);
    }
  }

  return s.slice(start, end + 1);
};

export { longestPalindrome };
