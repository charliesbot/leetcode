#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "reverse_integer.cpp"

TEST_CASE("reverse", "[reverse_integer]") {
    Solution solution;
    
    SECTION("Example 1") {
        const int input = 123;
        const int output = 321;
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Example 2") {
        const int input = -123;
        const int output = -321;
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Example 3") {
        const int input = 120;
        const int output = 21;
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Zero") {
        const int input = 0;
        const int output = 0;
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Single digit positive") {
        const int input = 7;
        const int output = 7;
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Single digit negative") {
        const int input = -7;
        const int output = -7;
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Large positive number") {
        const int input = 1534236469;
        const int output = 0; // Should overflow and return 0
        REQUIRE(solution.reverse(input) == output);
    }
    
    SECTION("Large negative number") {
        const int input = -2147447648; // Would reverse to exceed int range
        const int output = 0;
        REQUIRE(solution.reverse(input) == output);
    }
}