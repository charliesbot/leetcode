import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lengthOfLongestSubstring } from "./0003_longest_substring_without_repeating_characters.ts";

Deno.test(function lengthOfLongestSubstring1() {
  const input = "abcabcbb";
  assertEquals(lengthOfLongestSubstring(input), 3);
});

Deno.test(function lengthOfLongestSubstring2() {
  const input = "bbbbb";
  assertEquals(lengthOfLongestSubstring(input), 1);
});

Deno.test(function lengthOfLongestSubstring3() {
  const input = "pwwkew";
  assertEquals(lengthOfLongestSubstring(input), 3);
});
