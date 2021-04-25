import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { kClosest } from "./0973_k_closest_points_to_origin.ts";

Deno.test(function test1() {
  const points = [
    [1, 3],
    [-2, 2],
  ];
  const K = 1;
  const output = [[-2, 2]];

  assertEquals(kClosest(points, K), output);
});
