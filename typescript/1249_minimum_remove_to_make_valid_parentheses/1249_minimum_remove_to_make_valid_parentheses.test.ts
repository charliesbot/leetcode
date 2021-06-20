import { minRemoveToMakeValid } from "./1249_minimum_remove_to_make_valid_parentheses";

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
