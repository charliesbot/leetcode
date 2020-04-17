import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isValidParenthesis } from "./0020_valid parentheses.ts";

Deno.test(function isValidParenthesis1() {
  const input = "()";
  assertEquals(isValidParenthesis(input), true);
});

Deno.test(function isValidParenthesis2() {
  const input = "()[]{}";
  assertEquals(isValidParenthesis(input), true);
});

Deno.test(function isValidParenthesis3() {
  const input = "([)]";
  assertEquals(isValidParenthesis(input), false);
});
