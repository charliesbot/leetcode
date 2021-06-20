import { findNumberOfLIS } from "./0673_number_of_longest_increasing_subsequence";

test("test1", () => {
  const input = [1, 3, 5, 4, 7];
  expect(findNumberOfLIS(input)).toEqual(2);
});

test("test1", () => {
  const input = [2, 2, 2, 2, 2];
  expect(findNumberOfLIS(input)).toEqual(5);
});
