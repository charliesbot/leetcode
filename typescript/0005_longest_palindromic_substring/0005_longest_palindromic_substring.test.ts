import { longestPalindrome } from "./0005_longest_palindromic_substring";

test("longestPalindromicSubstring1", () => {
  const input = "babad";
  expect(longestPalindrome(input)).toBe("aba");
});
