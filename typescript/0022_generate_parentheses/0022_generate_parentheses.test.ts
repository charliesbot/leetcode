import { generateParenthesis } from "./0022_generate_parentheses";

test("test1", () => {
  const n = 3;
  const result = ["((()))", "(()())", "(())()", "()(())", "()()()"];
  expect(generateParenthesis(n)).toStrictEqual(result);
});
