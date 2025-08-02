/*
 * [200] Number of Islands
 *
 * Given an m x n 2D binary grid grid which represents a map of &#39;1&#39;s (land) and &#39;0&#39;s
(water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or
vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:


Input: grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]
]
Output: 1


Example 2:


Input: grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]
]
Output: 3



Constraints:


    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is &#39;0&#39; or &#39;1&#39;.
 *
 * Difficulty: Medium
 */

#include <vector>
using namespace std;

class Solution {
  private:
    void dfs(vector<vector<char>>& grid, size_t row, size_t column) {
        if (row >= grid.size() || column >= grid[row].size() || grid[row][column] == '0') {
            return;
        }

        grid[row][column] = '0';
        dfs(grid, row + 1, column);
        dfs(grid, row, column + 1);
        dfs(grid, row - 1, column);
        dfs(grid, row, column - 1);
    }

  public:
    int numIslands(vector<vector<char>>& grid) {
        int islands = 0;
        for (size_t row = 0; row < grid.size(); row++) {
            for (size_t column = 0; column < grid[row].size(); column++) {
                if (grid[row][column] == '1') {
                    islands++;
                    dfs(grid, row, column);
                }
            }
        }

        return islands;
    }
};
