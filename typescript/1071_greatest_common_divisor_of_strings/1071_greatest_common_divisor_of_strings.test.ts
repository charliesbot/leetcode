import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { gcdOfStrings } from "./1071_greatest_common_divisor_of_strings.ts";

Deno.test(function gcdOfStrings1() {
  assertEquals(gcdOfStrings("ABCABC", "ABC"), "ABC");
});

Deno.test(function gcdOfStrings2() {
  assertEquals(gcdOfStrings("ABABAB", "ABAB"), "AB");
});

Deno.test(function gcdOfStrings3() {
  assertEquals(gcdOfStrings("LEET", "CODE"), "");
});
