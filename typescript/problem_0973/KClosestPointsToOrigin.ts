/*
 * [973] K Closest Points to Origin
 *
 * Difficulty: TODO
 */

/*
 * We have a list of points on the plane.
 * Find the K closest points to the origin (0, 0).
 *
 * (Here, the distance between two points on a plane is the Euclidean distance.)
 *
 * You may return the answer in any order.
 *
 * The answer is guaranteed to be unique (except for the order that it is in.)
 */

type Args = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const distanceBetweenPoints = ({ x1, y1, x2, y2 }: Args) => {
  // d=√((x_2-x_1)²+(y_2-y_1)²)
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

const kClosest = (points: number[][], K: number): number[][] => {
  const distances = [];

  for (const currentPoints of points) {
    const [x, y] = currentPoints;
    distances.push({
      points: currentPoints,
      distance: distanceBetweenPoints({ x1: 0, y1: 0, x2: x, y2: y }),
    });
  }

  distances.sort((a, b) => a.distance - b.distance);

  return distances.slice(0, K).map(distances => distances.points);
};

export { kClosest };
