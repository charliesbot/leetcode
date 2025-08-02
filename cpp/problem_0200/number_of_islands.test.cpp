#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "number_of_islands.cpp"

TEST_CASE("Number of Islands", "[number_of_islands]") {
    Solution solution;

    SECTION("Basic examples from problem statement") {
        // Example 1: One large island
        vector<vector<char>> grid1 = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };
        REQUIRE(solution.numIslands(grid1) == 1);

        // Example 2: Three separate islands
        vector<vector<char>> grid2 = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        REQUIRE(solution.numIslands(grid2) == 3);
    }

    SECTION("Single cell grids") {
        // Single land cell
        vector<vector<char>> grid1 = {{'1'}};
        REQUIRE(solution.numIslands(grid1) == 1);

        // Single water cell
        vector<vector<char>> grid2 = {{'0'}};
        REQUIRE(solution.numIslands(grid2) == 0);
    }

    SECTION("All water") {
        vector<vector<char>> grid = {
            {'0','0','0'},
            {'0','0','0'},
            {'0','0','0'}
        };
        REQUIRE(solution.numIslands(grid) == 0);
    }

    SECTION("All land") {
        vector<vector<char>> grid = {
            {'1','1','1'},
            {'1','1','1'},
            {'1','1','1'}
        };
        REQUIRE(solution.numIslands(grid) == 1);
    }

    SECTION("Single row grids") {
        // Alternating pattern
        vector<vector<char>> grid1 = {{'1','0','1','0','1'}};
        REQUIRE(solution.numIslands(grid1) == 3);

        // All land in a row
        vector<vector<char>> grid2 = {{'1','1','1','1','1'}};
        REQUIRE(solution.numIslands(grid2) == 1);

        // All water in a row
        vector<vector<char>> grid3 = {{'0','0','0','0','0'}};
        REQUIRE(solution.numIslands(grid3) == 0);
    }

    SECTION("Single column grids") {
        // Alternating pattern
        vector<vector<char>> grid1 = {
            {'1'},
            {'0'},
            {'1'},
            {'0'},
            {'1'}
        };
        REQUIRE(solution.numIslands(grid1) == 3);

        // All land in a column
        vector<vector<char>> grid2 = {
            {'1'},
            {'1'},
            {'1'},
            {'1'},
            {'1'}
        };
        REQUIRE(solution.numIslands(grid2) == 1);
    }

    SECTION("Diagonal islands (not connected)") {
        vector<vector<char>> grid = {
            {'1','0','0','1'},
            {'0','1','1','0'},
            {'0','1','1','0'},
            {'1','0','0','1'}
        };
        REQUIRE(solution.numIslands(grid) == 5); // Diagonal cells don't connect
    }

    SECTION("Complex shapes") {
        // L-shaped island
        vector<vector<char>> grid1 = {
            {'1','0','0','0'},
            {'1','0','0','0'},
            {'1','1','1','1'},
            {'0','0','0','0'}
        };
        REQUIRE(solution.numIslands(grid1) == 1);

        // Plus-shaped island
        vector<vector<char>> grid2 = {
            {'0','1','0'},
            {'1','1','1'},
            {'0','1','0'}
        };
        REQUIRE(solution.numIslands(grid2) == 1);

        // Ring-shaped (donut) - should be one island
        vector<vector<char>> grid3 = {
            {'1','1','1','1','1'},
            {'1','0','0','0','1'},
            {'1','0','0','0','1'},
            {'1','0','0','0','1'},
            {'1','1','1','1','1'}
        };
        REQUIRE(solution.numIslands(grid3) == 1);
    }

    SECTION("Many small islands") {
        vector<vector<char>> grid = {
            {'1','0','1','0','1'},
            {'0','1','0','1','0'},
            {'1','0','1','0','1'},
            {'0','1','0','1','0'},
            {'1','0','1','0','1'}
        };
        REQUIRE(solution.numIslands(grid) == 13); // Checkerboard pattern
    }

    SECTION("Connected components with narrow bridges") {
        // Islands connected by single-cell bridges
        vector<vector<char>> grid = {
            {'1','1','0','1','1'},
            {'0','1','0','1','0'},
            {'0','1','1','1','0'},
            {'0','0','1','0','0'},
            {'1','1','1','1','1'}
        };
        REQUIRE(solution.numIslands(grid) == 1); // All connected through bridges
    }

    SECTION("Edge cases with water surrounding") {
        // Island at corners
        vector<vector<char>> grid1 = {
            {'1','0','0','1'},
            {'0','0','0','0'},
            {'0','0','0','0'},
            {'1','0','0','1'}
        };
        REQUIRE(solution.numIslands(grid1) == 4);

        // Island at edges
        vector<vector<char>> grid2 = {
            {'0','1','0'},
            {'1','0','1'},
            {'0','1','0'}
        };
        REQUIRE(solution.numIslands(grid2) == 4);
    }

    SECTION("Large rectangular grid") {
        // Create a large grid with multiple islands
        vector<vector<char>> grid(10, vector<char>(10, '0'));
        
        // Add some islands manually
        grid[1][1] = '1'; grid[1][2] = '1';
        grid[2][1] = '1'; grid[2][2] = '1'; // First island (2x2)
        
        grid[5][5] = '1'; // Second island (1x1)
        
        grid[8][1] = '1'; grid[8][2] = '1'; grid[8][3] = '1';
        grid[9][2] = '1'; // Third island (L-shaped)
        
        REQUIRE(solution.numIslands(grid) == 3);
    }

    SECTION("Minimum and maximum grid sizes") {
        // Minimum size (1x1) already tested above
        
        // Large grid simulating maximum constraints (300x300)
        // Create a manageable test case instead
        vector<vector<char>> largeGrid(50, vector<char>(50, '0'));
        
        // Add alternating strips to create multiple islands
        for (int i = 0; i < 50; i += 5) {
            for (int j = 0; j < 50; j++) {
                largeGrid[i][j] = '1';
                if (i + 1 < 50) largeGrid[i + 1][j] = '1';
            }
        }
        
        // Should create 10 horizontal strip islands
        REQUIRE(solution.numIslands(largeGrid) == 10);
    }

    SECTION("Edge connectivity tests") {
        // Test islands that touch the grid boundaries
        vector<vector<char>> grid = {
            {'1','1','1','1'},
            {'1','0','0','1'},
            {'1','0','0','1'},
            {'1','1','1','1'}
        };
        REQUIRE(solution.numIslands(grid) == 1); // Border-connected island
    }

    SECTION("Stress test with pattern") {
        // Create a specific pattern that tests DFS thoroughly
        vector<vector<char>> grid = {
            {'1','0','1','1','1'},
            {'1','0','1','0','1'},
            {'1','0','1','1','1'},
            {'1','0','0','0','1'},
            {'1','1','1','1','1'}
        };
        REQUIRE(solution.numIslands(grid) == 1); // Complex connected island
    }
}