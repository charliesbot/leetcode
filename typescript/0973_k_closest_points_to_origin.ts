type Point = [number, number];

const getDistance = (points: Point) => {
  const origin = [0, 0];
  const x = (points[0] - origin[0]) ** 2;
  const y = (points[1] - origin[1]) ** 2;
  return Math.sqrt(x + y);
};

const kClosest = (points: Point[], K: number) => {
  points.sort((a, b) => getDistance(a) - getDistance(b));
  return points.slice(0, K);
};
