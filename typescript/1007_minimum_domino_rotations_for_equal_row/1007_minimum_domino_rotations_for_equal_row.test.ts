import { minDominoRotations } from "./1007_minimum_domino_rotations_for_equal_row";

test("test1", () => {
  const A = [2, 1, 2, 4, 2, 2];
  const B = [5, 2, 6, 2, 3, 2];
  const output = 2;
  expect(minDominoRotations(A, B)).toBe(output);
});
