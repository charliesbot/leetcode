import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { minRemoveToMakeValid } from "./1249_minimum_remove_to_make_valid_parentheses.ts";

Deno.test(function test1() {
  const input = "lee(t(c)o)de)";
  const output = "lee(t(c)o)de";
  assertEquals(minRemoveToMakeValid(input), output);
});

Deno.test(function test2() {
  const input = "a)b(c)d";
  const output = "ab(c)d";
  assertEquals(minRemoveToMakeValid(input), output);
});

Deno.test(function test3() {
  const input = "))((";
  const output = "";
  assertEquals(minRemoveToMakeValid(input), output);
});
