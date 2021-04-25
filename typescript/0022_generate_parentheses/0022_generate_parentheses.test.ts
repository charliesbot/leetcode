import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { generateParenthesis } from "./0022_generate_parentheses.ts";

Deno.test(function test1() {
  const n = 3;
  const result = ["((()))", "(()())", "(())()", "()(())", "()()()"];
  assertEquals(generateParenthesis(n), result);
});
