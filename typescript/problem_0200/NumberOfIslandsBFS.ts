/* BFS
 Given a 2d grid map of '1's (land) and '0's (water),
 count the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.
*/

export const numIslandsBFS = (grid: string[][]) => {
  let counter = 0;

  const bfs = (grid: string[][], row: number, column: number) => {
    const queue = [{ rowHelper: row, columnHelper: column }];

    while (queue.length > 0) {
      const popped = queue.pop();
      if (!popped) {
        continue;
      }
      const { rowHelper, columnHelper } = popped;
      if (
        !grid[rowHelper] ||
        !grid[rowHelper][columnHelper] ||
        grid[rowHelper][columnHelper] === "0"
      ) {
        continue;
      }

      grid[rowHelper][columnHelper] = "0";
      queue.push({ rowHelper: rowHelper + 1, columnHelper });
      queue.push({ rowHelper: rowHelper - 1, columnHelper });
      queue.push({ rowHelper, columnHelper: columnHelper + 1 });
      queue.push({ rowHelper, columnHelper: columnHelper - 1 });
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === "1") {
        counter++;
        bfs(grid, row, column);
      }
    }
  }

  return counter;
};
