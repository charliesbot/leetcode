import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { findNumberOfLIS } from "./0673_number_of_longest_increasing_subsequence.ts";

Deno.test(function test1() {
  const input = [1, 3, 5, 4, 7];
  assertEquals(findNumberOfLIS(input), 2);
});

Deno.test(function test1() {
  const input = [2, 2, 2, 2, 2];
  assertEquals(findNumberOfLIS(input), 5);
});
