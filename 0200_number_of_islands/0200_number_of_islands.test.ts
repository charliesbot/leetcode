import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { numIslands } from "./0200_number_of_islands.ts";
import { numIslandsBFS } from "./0200_number_of_islands.bfs.ts";

Deno.test(function numberOfIslandsDFS1() {
  const input = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  assertEquals(numIslands(input), 1);
});

Deno.test(function numberOfIslandsDFS2() {
  const input = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  assertEquals(numIslands(input), 3);
});

Deno.test(function numberOfIslandsBFS1() {
  const input = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  assertEquals(numIslandsBFS(input), 1);
});

Deno.test(function numberOfIslandsBFS2() {
  const input = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  assertEquals(numIslandsBFS(input), 3);
});
