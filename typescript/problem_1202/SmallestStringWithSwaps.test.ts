import { test, expect } from 'vitest';
import { smallestStringWithSwaps } from './SmallestStringWithSwaps';

test("test1", () => {
  const s = "dcab";
  const pairs = [
    [0, 3],
    [1, 2],
  ];
  const result = "bacd";
  expect(smallestStringWithSwaps(s, pairs)).toBe(result);
});

test("test2", () => {
  const s = "dcab";
  const pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ];
  const result = "abcd";
  expect(smallestStringWithSwaps(s, pairs)).toBe(result);
});

test("test3", () => {
  const s = "cba";
  const pairs = [
    [0, 1],
    [1, 2],
  ];
  const result = "abc";
  expect(smallestStringWithSwaps(s, pairs)).toBe(result);
});
