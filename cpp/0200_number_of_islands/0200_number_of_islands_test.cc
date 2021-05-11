#include "cpp/0200_number_of_islands/0200_number_of_islands.h"
#include <gtest/gtest.h>
#include <vector>

using std::vector;

TEST(NumberOfIslands, Example1) {
  vector<vector<char>> grid = {{'1', '1', '1', '1', '0'},
                               {'1', '1', '0', '1', '0'},
                               {'1', '1', '0', '0', '0'},
                               {'0', '0', '0', '0', '0'}};

  const int result = Solution().numIslands(grid);

  EXPECT_EQ(result, 1);
}

TEST(NumberOfIslands, Example2) {
  vector<vector<char>> grid = {{'1', '1', '0', '0', '0'},
                               {'1', '1', '0', '0', '0'},
                               {'0', '0', '1', '0', '0'},
                               {'0', '0', '0', '1', '1'}};

  const int result = Solution().numIslands(grid);

  EXPECT_EQ(result, 3);
}
