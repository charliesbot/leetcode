import { test, expect } from 'vitest';
import { lengthOfLIS } from './LongestIncreasingSubsequence';

test("lengthOfLIS1", () => {
  const input = [10, 9, 2, 5, 3, 7, 101, 18];
  expect(lengthOfLIS(input)).toEqual(4);
});

test("lengthOfLIS2", () => {
  const input: [] = [];
  expect(lengthOfLIS(input)).toEqual(0);
});

test("lengthOfLIS3", () => {
  const input = [0];
  expect(lengthOfLIS(input)).toEqual(1);
});

test("lengthOfLIS4", () => {
  const input = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  expect(lengthOfLIS(input)).toEqual(6);
});
