#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "roman_to_integer.cpp"

TEST_CASE("romanToInt", "[roman_to_integer]") {
    Solution solution;
    
    SECTION("Example 1") {
        string s = "III";
        REQUIRE(solution.romanToInt(s) == 3);
    }
    
    SECTION("Example 2") {
        string s = "LVIII";
        REQUIRE(solution.romanToInt(s) == 58);
    }
    
    SECTION("Example 3") {
        string s = "MCMXCIV";
        REQUIRE(solution.romanToInt(s) == 1994);
    }
    
    SECTION("Single characters") {
        REQUIRE(solution.romanToInt("I") == 1);
        REQUIRE(solution.romanToInt("V") == 5);
        REQUIRE(solution.romanToInt("X") == 10);
        REQUIRE(solution.romanToInt("L") == 50);
        REQUIRE(solution.romanToInt("C") == 100);
        REQUIRE(solution.romanToInt("D") == 500);
        REQUIRE(solution.romanToInt("M") == 1000);
    }
    
    SECTION("Subtraction cases") {
        REQUIRE(solution.romanToInt("IV") == 4);
        REQUIRE(solution.romanToInt("IX") == 9);
        REQUIRE(solution.romanToInt("XL") == 40);
        REQUIRE(solution.romanToInt("XC") == 90);
        REQUIRE(solution.romanToInt("CD") == 400);
        REQUIRE(solution.romanToInt("CM") == 900);
    }
    
    SECTION("Complex numbers") {
        REQUIRE(solution.romanToInt("MCDXLIV") == 1444);
        REQUIRE(solution.romanToInt("MMMDCCCLXXXVIII") == 3888);
        REQUIRE(solution.romanToInt("MMMCMXCIX") == 3999);
    }
}