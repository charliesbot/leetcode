import { test, expect } from 'vitest';
import { generateParenthesis } from './GenerateParentheses';

test("test1", () => {
  const n = 3;
  const result = ["((()))", "(()())", "(())()", "()(())", "()()()"];
  expect(generateParenthesis(n)).toStrictEqual(result);
});
