import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { minDominoRotations } from "./1007_minimum_domino_rotations_for_equal_row.ts";

Deno.test(function test1() {
  const A = [2, 1, 2, 4, 2, 2];
  const B = [5, 2, 6, 2, 3, 2];
  const output = 2;
  assertEquals(minDominoRotations(A, B), output);
});
