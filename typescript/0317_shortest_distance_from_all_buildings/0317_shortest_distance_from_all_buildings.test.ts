import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { shortestDistance } from "./0317_shortest_distance_from_all_buildings.ts";

Deno.test(function shortestDistance1() {
  const input = [
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ];
  assertEquals(shortestDistance(input), 7);
});

Deno.test(function shortestDistance2() {
  const input = [[1]];
  assertEquals(shortestDistance(input), -1);
});
