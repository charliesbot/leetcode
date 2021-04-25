import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { exist } from "./0079_word_search.ts";

Deno.test(function exist1() {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  assertEquals(exist(board, "ABCCED"), true);
});

Deno.test(function exist2() {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  assertEquals(exist(board, "SEE"), true);
});

Deno.test(function exist3() {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  assertEquals(exist(board, "ABCB"), false);
});

Deno.test(function exist4() {
  const board = [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"],
  ];

  assertEquals(exist(board, "AAB"), true);
});

Deno.test(function exist5() {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "E", "S"],
    ["A", "D", "E", "E"],
  ];

  assertEquals(exist(board, "ABCESEEEFS"), true);
});
