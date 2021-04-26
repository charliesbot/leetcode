#include <iostream>
#include <vector>

using std::cout;
using std::vector;

class Solution {
private:
  void dfs(vector<vector<char>> &grid, size_t row, size_t column) {
    if (row >= grid.size() || column >= grid[row].size() ||
        grid[row][column] == '0') {
      return;
    }

    grid[row][column] = '0';
    dfs(grid, row + 1, column);
    dfs(grid, row, column + 1);
    dfs(grid, row - 1, column);
    dfs(grid, row, column - 1);
  }

public:
  int numIslands(vector<vector<char>> &grid) {
    int islands = 0;
    for (int row = 0; row < grid.size(); row++) {
      for (int column = 0; column < grid[row].size(); column++) {
        if (grid[row][column] == '1') {
          islands++;
          dfs(grid, row, column);
        }
      }
    }

    return islands;
  }
};

int main() {
  vector<vector<char>> grid = {{'1', '1', '1', '1', '0'},
                               {'1', '1', '0', '1', '0'},
                               {'1', '1', '0', '0', '0'},
                               {'0', '0', '0', '0', '0'}};

  cout << Solution().numIslands(grid);
}
