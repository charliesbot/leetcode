import { test, expect } from 'vitest';
import { findNumberOfLIS } from './NumberOfLongestIncreasingSubsequence';

test("test1", () => {
  const input = [1, 3, 5, 4, 7];
  expect(findNumberOfLIS(input)).toEqual(2);
});

test("test1", () => {
  const input = [2, 2, 2, 2, 2];
  expect(findNumberOfLIS(input)).toEqual(5);
});
