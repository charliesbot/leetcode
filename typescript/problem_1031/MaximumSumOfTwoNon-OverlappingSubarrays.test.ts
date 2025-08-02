import { test, expect } from 'vitest';
import { maxSumTwoNoOverlap } from './MaximumSumOfTwoNon-OverlappingSubarrays';

test("maxSumTwoNoOverlap1", () => {
  const A = [0, 6, 5, 2, 2, 5, 1, 9, 4];
  const L = 1;
  const M = 2;
  expect(maxSumTwoNoOverlap(A, L, M)).toBe(20);
});
