import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { longestPalindrome } from "./0005_longest_palindromic_substring.ts";

Deno.test(function test1() {
  const input = "babad";
  assertEquals(longestPalindrome(input), "aba");
});
