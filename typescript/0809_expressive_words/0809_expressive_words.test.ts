import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { twoSum } from "./0001_two_sum.ts";

Deno.test(function twoSum1() {
  const input = [2, 7, 11, 15];
  assertEquals(twoSum(input, 9), [0, 1]);
});
