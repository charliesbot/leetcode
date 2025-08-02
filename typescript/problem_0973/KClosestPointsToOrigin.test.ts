import { test, expect } from 'vitest';
import { kClosest } from './KClosestPointsToOrigin';

test("test1", () => {
  const points = [
    [1, 3],
    [-2, 2],
  ];
  const K = 1;
  const output = [[-2, 2]];

  expect(kClosest(points, K)).toStrictEqual(output);
});
