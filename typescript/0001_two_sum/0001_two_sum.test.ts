import { twoSum } from "./0001_two_sum";

test("twoSum", () => {
  const input = [2, 7, 11, 15];
  expect(twoSum(input, 9)).toStrictEqual([0, 1]);
});
