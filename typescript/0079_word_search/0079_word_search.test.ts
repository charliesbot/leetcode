import { exist } from "./0079_word_search";

test("exist1", () => {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  expect(exist(board, "ABCCED")).toBeTruthy();
});

test("exist2", () => {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  expect(exist(board, "SEE")).toBeTruthy();
});

test("exist3", () => {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  expect(exist(board, "ABCB")).toBeFalsy();
});

test("exist4", () => {
  const board = [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"],
  ];

  expect(exist(board, "AAB")).toBeTruthy();
});

test("exist5", () => {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "E", "S"],
    ["A", "D", "E", "E"],
  ];

  expect(exist(board, "ABCESEEEFS")).toBeTruthy();
});
