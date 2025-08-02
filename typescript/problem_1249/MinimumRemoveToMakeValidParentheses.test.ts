import { test, expect } from 'vitest';
import { minRemoveToMakeValid } from './MinimumRemoveToMakeValidParentheses';

test("test1", () => {
  const input = "lee(t(c)o)de)";
  const output = "lee(t(c)o)de";
  expect(minRemoveToMakeValid(input)).toBe(output);
});

test("test2", () => {
  const input = "a)b(c)d";
  const output = "ab(c)d";
  expect(minRemoveToMakeValid(input)).toBe(output);
});

test("test3", () => {
  const input = "))((";
  const output = "";
  expect(minRemoveToMakeValid(input)).toBe(output);
});
