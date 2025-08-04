/*
 * [317] Shortest Distance from All Buildings
 *
 * Difficulty: TODO
 */

/*
 * You want to build a house on an empty land which reaches all buildings in the shortest amount of distance.
 * You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:
 *    Each 0 marks an empty land which you can pass by freely.
      Each 1 marks a building which you cannot pass through.
      Each 2 marks an obstacle which you cannot pass through.
 */

const bfs = (
  row: number,
  column: number,
  distances: number[][],
  reach: number[][],
  grid: number[][],
) => {
  const queue = [[row, column]];
  const distanceQueue = [0];
  distances[row][column] = 1;
  const visited = Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length));

  while (queue.length > 0) {
    const [currentRow, currentColumn] = queue.shift() as [number, number];
    const distance = distanceQueue.shift() as number;

    const options = [
      [currentRow + 1, currentColumn],
      [currentRow - 1, currentColumn],
      [currentRow, currentColumn + 1],
      [currentRow, currentColumn - 1],
    ];

    options.forEach(([optionRow, optionColumn]) => {
      if (!visited?.[optionRow]?.[optionColumn] && grid?.[optionRow]?.[optionColumn] === 0) {
        queue.push([optionRow, optionColumn]);
        distanceQueue.push(distance + 1);
        distances[optionRow][optionColumn] += distance + 1;
        reach[optionRow][optionColumn] += 1;
        visited[optionRow][optionColumn] = true;
      }
    });
  }
};

const shortestDistance = (grid: number[][]): number => {
  if (!grid || grid.length === 0) {
    return -1;
  }

  const distances = Array(grid.length)
    .fill(null)
    .map(() => Array(grid[0].length).fill(0));

  const reach = Array(grid.length)
    .fill(null)
    .map(() => Array(grid[0].length).fill(0));

  let totalBuildings = 0;
  let minDistance = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === 1) {
        totalBuildings++;
        bfs(row, column, distances, reach, grid);
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (reach[row][column] === totalBuildings) {
        minDistance = Math.min(distances[row][column], minDistance);
      }
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
};

export { shortestDistance };
