#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "longest_substring_without_repeating_characters.cpp"

TEST_CASE("lengthOfLongestSubstring", "[longest_substring_without_repeating_characters]") {
    Solution solution;
    
    SECTION("Example 1") {
        string s = "abcabcbb";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 3);
    }
    
    SECTION("Example 2") {
        string s = "bbbbb";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 1);
    }
    
    SECTION("Example 3") {
        string s = "pwwkew";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 3);
    }
    
    SECTION("Empty string") {
        string s = "";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 0);
    }
    
    SECTION("Single character") {
        string s = "a";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 1);
    }
    
    SECTION("All unique characters") {
        string s = "abcdef";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 6);
    }
    
    SECTION("String with spaces") {
        string s = "ab c";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 4);
    }
    
    SECTION("Long string with repeating pattern") {
        string s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        REQUIRE(solution.lengthOfLongestSubstring(s) == 62);
    }
}