import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { smallestStringWithSwaps } from "./1202_smallest_string_with_swaps.ts";

Deno.test(function test1() {
  const s = "dcab";
  const pairs = [
    [0, 3],
    [1, 2],
  ];
  const result = "bacd";
  assertEquals(smallestStringWithSwaps(s, pairs), result);
});

Deno.test(function test2() {
  const s = "dcab";
  const pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ];
  const result = "abcd";
  assertEquals(smallestStringWithSwaps(s, pairs), result);
});

Deno.test(function test3() {
  const s = "cba";
  const pairs = [
    [0, 1],
    [1, 2],
  ];
  const result = "abc";
  assertEquals(smallestStringWithSwaps(s, pairs), result);
});
