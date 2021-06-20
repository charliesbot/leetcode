import { shortestDistance } from "./0317_shortest_distance_from_all_buildings";

test("shortestDistance1", () => {
  const input = [
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ];
  expect(shortestDistance(input)).toBe(7);
});

test("shortestDistance2", () => {
  const input = [[1]];
  expect(shortestDistance(input)).toBe(-1);
});
