#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "two_sum.cpp"

TEST_CASE("twoSum", "[two_sum]") {
    Solution solution;
    
    SECTION("Example 1") {
        vector<int> nums = {2, 7, 11, 15};
        vector<int> result = solution.twoSum(nums, 9);
        REQUIRE(result.size() == 2);
        REQUIRE(((result[0] == 0 && result[1] == 1) || (result[0] == 1 && result[1] == 0)));
    }
    
    SECTION("Example 2") {
        vector<int> nums = {3, 2, 4};
        vector<int> result = solution.twoSum(nums, 6);
        REQUIRE(result.size() == 2);
        REQUIRE(((result[0] == 1 && result[1] == 2) || (result[0] == 2 && result[1] == 1)));
    }
    
    SECTION("Example 3") {
        vector<int> nums = {3, 3};
        vector<int> result = solution.twoSum(nums, 6);
        REQUIRE(result.size() == 2);
        REQUIRE(((result[0] == 0 && result[1] == 1) || (result[0] == 1 && result[1] == 0)));
    }
}