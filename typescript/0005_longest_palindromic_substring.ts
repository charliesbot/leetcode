const longestPalindrome = (s: string) => {
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

const expandFromCenter = (s: string, start: number, end: number) => {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return end - start - 1;
};

const input = "babad";

console.log(longestPalindrome(input));

// Solution 2 - using dynamic programming
const longestPalindromeWithDynamicProgramming = (s: string) => {
  let start = 0;
  let end = 0;
  let max = 1;

  const grid = [];

  for (let i = 0; i < s.length; i++) {
    grid.push(new Array(s.length));
    grid[i][i] = true;
  }

  for (let i = s.length; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      grid[i][j] = s[i] === s[j] && (j === i + 1 || grid[i + 1][j - 1]);
      if (grid[i][j] && j - i + 1 > max) {
        start = i;
        end = j;
        max = j - i + 1;
      }
    }
  }

  return s.substring(start, end + 1);
};
