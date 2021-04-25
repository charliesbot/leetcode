import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lengthOfLIS } from "./0300_longest_increasing_subsequence.ts";

Deno.test(function lengthOfLIS1() {
  const input = [10, 9, 2, 5, 3, 7, 101, 18];
  assertEquals(lengthOfLIS(input), 4);
});

Deno.test(function lengthOfLIS2() {
  const input: [] = [];
  assertEquals(lengthOfLIS(input), 0);
});

Deno.test(function lengthOfLIS3() {
  const input = [0];
  assertEquals(lengthOfLIS(input), 1);
});

Deno.test(function lengthOfLIS4() {
  const input = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  assertEquals(lengthOfLIS(input), 6);
});
