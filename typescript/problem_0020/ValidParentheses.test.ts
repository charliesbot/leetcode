import { test, expect } from 'vitest';
import { isValidParenthesis } from './ValidParentheses';

test('isValidParenthesis1', () => {
  const input = '()';
  expect(isValidParenthesis(input)).toBeTruthy();
});

test('isValidParenthesis2', () => {
  const input = '()[]{}';
  expect(isValidParenthesis(input)).toBeTruthy();
});

test('isValidParenthesis3', () => {
  const input = '([)]';
  expect(isValidParenthesis(input)).toBeFalsy();
});
