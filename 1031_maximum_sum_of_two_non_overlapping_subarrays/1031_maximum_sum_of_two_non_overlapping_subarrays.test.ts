import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { maxSumTwoNoOverlap } from "./1031_maximum_sum_of_two_non_overlapping_subarrays.ts";

Deno.test(function maxSumTwoNoOverlap1() {
  const A = [0, 6, 5, 2, 2, 5, 1, 9, 4];
  const L = 1;
  const M = 2;
  assertEquals(maxSumTwoNoOverlap(A, L, M), 20);
});
