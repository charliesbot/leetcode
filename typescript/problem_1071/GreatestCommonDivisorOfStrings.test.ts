import { test, expect } from 'vitest';
import { gcdOfStrings } from './GreatestCommonDivisorOfStrings';

test("gcdOfStrings1", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
});

test("gcdOfStrings2", () => {
  expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
});

test("gcdOfStrings3", () => {
  expect(gcdOfStrings("LEET", "CODE")).toBe("");
});
