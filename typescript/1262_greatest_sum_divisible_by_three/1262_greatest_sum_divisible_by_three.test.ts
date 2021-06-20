import { maxSumDivThree } from "./1262_greatest_sum_divisible_by_three";

test("maxSumDivThree1", () => {
  const input = [3, 6, 5, 1, 8];
  expect(maxSumDivThree(input)).toBe(18);
});

test("maxSumDivThree2", () => {
  const input = [4];
  expect(maxSumDivThree(input)).toBe(0);
});

test("maxSumDivThree3", () => {
  const input = [1, 2, 3, 4, 4];
  expect(maxSumDivThree(input)).toBe(12);
});
