import { kClosest } from "./0973_k_closest_points_to_origin";

test("test1", () => {
  const points = [
    [1, 3],
    [-2, 2],
  ];
  const K = 1;
  const output = [[-2, 2]];

  expect(kClosest(points, K)).toStrictEqual(output);
});
