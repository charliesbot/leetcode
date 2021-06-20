import { isValidParenthesis } from "./0020_valid_parentheses";

test("isValidParenthesis1", () => {
  const input = "()";
  expect(isValidParenthesis(input)).toBeTruthy();
});

test("isValidParenthesis2", () => {
  const input = "()[]{}";
  expect(isValidParenthesis(input)).toBeTruthy();
});

test("isValidParenthesis3", () => {
  const input = "([)]";
  expect(isValidParenthesis(input)).toBeFalsy();
});
