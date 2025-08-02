import { test, expect } from 'vitest';
import { maxSumDivThree } from './GreatestSumDivisibleByThree';

test("maxSumDivThree1", () => {
  const input = [3, 6, 5, 1, 8];
  expect(maxSumDivThree(input)).toBe(18);
});

test("maxSumDivThree2", () => {
  const input = [4];
  expect(maxSumDivThree(input)).toBe(0);
});

test("maxSumDivThree3", () => {
  const input = [1, 2, 3, 4, 4];
  expect(maxSumDivThree(input)).toBe(12);
});
