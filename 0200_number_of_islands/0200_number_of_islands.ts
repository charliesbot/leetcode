/* DFS
 Given a 2d grid map of '1's (land) and '0's (water),
 count the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.
*/

export const numIslands = (grid: string[][]) => {
  let counter = 0;

  const dfs = (grid: string[][], row: number, column: number) => {
    if (!grid[row] || !grid[row][column] || grid[row][column] === "0") {
      return;
    }

    grid[row][column] = "0";

    dfs(grid, row + 1, column);
    dfs(grid, row - 1, column);
    dfs(grid, row, column + 1);
    dfs(grid, row, column - 1);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === "1") {
        counter++;
        dfs(grid, row, column);
      }
    }
  }

  return counter;
};
