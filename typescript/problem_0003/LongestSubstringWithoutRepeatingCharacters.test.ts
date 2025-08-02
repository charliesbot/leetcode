import { test, expect } from 'vitest';
import { lengthOfLongestSubstring } from './LongestSubstringWithoutRepeatingCharacters';

test('lengthOfLongestSubstring1', () => {
  const input = 'abcabcbb';
  expect(lengthOfLongestSubstring(input)).toEqual(3);
});

test('lengthOfLongestSubstring2', () => {
  const input = 'bbbbb';
  expect(lengthOfLongestSubstring(input)).toEqual(1);
});

test('lengthOfLongestSubstring3', () => {
  const input = 'pwwkew';
  expect(lengthOfLongestSubstring(input)).toEqual(3);
});
