import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { maxSumDivThree } from "./1262_greatest_sum_divisible_by_three.ts";

Deno.test(function maxSumDivThree1() {
  const input = [3, 6, 5, 1, 8];
  assertEquals(maxSumDivThree(input), 18);
});

Deno.test(function maxSumDivThree2() {
  const input = [4];
  assertEquals(maxSumDivThree(input), 0);
});

Deno.test(function maxSumDivThree3() {
  const input = [1, 2, 3, 4, 4];
  assertEquals(maxSumDivThree(input), 12);
});
