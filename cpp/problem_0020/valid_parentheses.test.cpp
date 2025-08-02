#define CATCH_CONFIG_MAIN
#include "valid_parentheses.cpp"

#include "../catch_amalgamated.hpp"

TEST_CASE("Valid Parentheses", "[valid_parentheses]") {
    Solution solution;

    SECTION("Basic valid cases from problem examples") {
        REQUIRE(solution.isValid("()") == true);
        REQUIRE(solution.isValid("()[]{}") == true);
        REQUIRE(solution.isValid("([])") == true);
    }

    SECTION("Basic invalid cases from problem examples") {
        REQUIRE(solution.isValid("(]") == false);
        REQUIRE(solution.isValid("([)]") == false);
    }

    SECTION("Single character cases") {
        REQUIRE(solution.isValid("(") == false);
        REQUIRE(solution.isValid(")") == false);
        REQUIRE(solution.isValid("[") == false);
        REQUIRE(solution.isValid("]") == false);
        REQUIRE(solution.isValid("{") == false);
        REQUIRE(solution.isValid("}") == false);
    }

    SECTION("Empty string edge case") {
        REQUIRE(solution.isValid("") == true);
    }

    SECTION("Nested valid parentheses") {
        REQUIRE(solution.isValid("((()))") == true);
        REQUIRE(solution.isValid("([{}])") == true);
        REQUIRE(solution.isValid("{[()]}") == true);
        REQUIRE(solution.isValid("((())[{}])") == true);
    }

    SECTION("Nested invalid parentheses") {
        REQUIRE(solution.isValid("((())") == false);
        REQUIRE(solution.isValid("([{}]") == false);
        REQUIRE(solution.isValid("{[()]") == false);
        REQUIRE(solution.isValid("((()))[{}])") == false);
    }

    SECTION("Mismatched brackets") {
        REQUIRE(solution.isValid("(}") == false);
        REQUIRE(solution.isValid("[)") == false);
        REQUIRE(solution.isValid("{]") == false);
        REQUIRE(solution.isValid("({})") == true);
        REQUIRE(solution.isValid("([)]") == false);
    }

    SECTION("Complex valid combinations") {
        REQUIRE(solution.isValid("(){}[]") == true);
        REQUIRE(solution.isValid("({[]})") == true);
        REQUIRE(solution.isValid("()[]{()}") == true);
    }

    SECTION("Complex invalid combinations") {
        REQUIRE(solution.isValid("(){}[") == false);
        REQUIRE(solution.isValid("({[})") == false);
        REQUIRE(solution.isValid("()[]{()}]") == false);
        REQUIRE(solution.isValid("(({}[]))()})") == false);
    }

    SECTION("Extra closing brackets") {
        REQUIRE(solution.isValid("())") == false);
        REQUIRE(solution.isValid("(){}[]]") == false);
        REQUIRE(solution.isValid("}}") == false);
        REQUIRE(solution.isValid("))") == false);
    }

    SECTION("Extra opening brackets") {
        REQUIRE(solution.isValid("(()") == false);
        REQUIRE(solution.isValid("({[") == false);
        REQUIRE(solution.isValid("{{") == false);
        REQUIRE(solution.isValid("((") == false);
    }

    SECTION("Long valid sequences") {
        string long_valid = "";
        for (int i = 0; i < 100; i++) {
            long_valid += "(";
        }
        for (int i = 0; i < 100; i++) {
            long_valid += ")";
        }
        REQUIRE(solution.isValid(long_valid) == true);
    }

    SECTION("Long invalid sequences") {
        string long_invalid = "";
        for (int i = 0; i < 100; i++) {
            long_invalid += "(";
        }
        for (int i = 0; i < 99; i++) {
            long_invalid += ")";
        }
        REQUIRE(solution.isValid(long_invalid) == false);
    }
}
