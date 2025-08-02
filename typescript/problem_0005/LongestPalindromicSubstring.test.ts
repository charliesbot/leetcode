import { test, expect } from 'vitest';
import { longestPalindrome } from './LongestPalindromicSubstring';

test('longestPalindromicSubstring1', () => {
  const input = 'babad';
  expect(longestPalindrome(input)).toBe('aba');
});
