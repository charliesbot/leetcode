#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "multiply_strings.cpp"

TEST_CASE("Multiply Strings", "[multiply_strings]") {
    Solution solution;

    SECTION("Basic examples from problem statement") {
        // Example 1: "2" * "3" = "6"
        REQUIRE(solution.multiply("2", "3") == "6");
        
        // Example 2: "123" * "456" = "56088"
        REQUIRE(solution.multiply("123", "456") == "56088");
    }

    SECTION("Multiplication by zero") {
        REQUIRE(solution.multiply("0", "123") == "0");
        REQUIRE(solution.multiply("456", "0") == "0");
        REQUIRE(solution.multiply("0", "0") == "0");
    }

    SECTION("Multiplication by one") {
        REQUIRE(solution.multiply("1", "123") == "123");
        REQUIRE(solution.multiply("456", "1") == "456");
        REQUIRE(solution.multiply("1", "1") == "1");
    }

    SECTION("Single digit multiplications") {
        REQUIRE(solution.multiply("2", "4") == "8");
        REQUIRE(solution.multiply("7", "8") == "56");
        REQUIRE(solution.multiply("9", "9") == "81");
        REQUIRE(solution.multiply("5", "6") == "30");
    }

    SECTION("Multi-digit by single digit") {
        REQUIRE(solution.multiply("12", "3") == "36");
        REQUIRE(solution.multiply("99", "9") == "891");
        REQUIRE(solution.multiply("123", "4") == "492");
        REQUIRE(solution.multiply("999", "2") == "1998");
    }

    SECTION("Multi-digit by multi-digit") {
        REQUIRE(solution.multiply("12", "34") == "408");
        REQUIRE(solution.multiply("99", "99") == "9801");
        REQUIRE(solution.multiply("11", "11") == "121");
        REQUIRE(solution.multiply("25", "25") == "625");
    }

    SECTION("Numbers with different lengths") {
        REQUIRE(solution.multiply("1", "9999") == "9999");
        REQUIRE(solution.multiply("9999", "1") == "9999");
        REQUIRE(solution.multiply("123", "45678") == "5618394");
        REQUIRE(solution.multiply("98765", "43") == "4246895");
    }

    SECTION("Large number multiplications") {
        REQUIRE(solution.multiply("999", "999") == "998001");
        REQUIRE(solution.multiply("1234", "5678") == "7006652");
        REQUIRE(solution.multiply("9876", "5432") == "53646432");
    }

    SECTION("Numbers with trailing zeros in result") {
        REQUIRE(solution.multiply("10", "10") == "100");
        REQUIRE(solution.multiply("25", "4") == "100");
        REQUIRE(solution.multiply("125", "8") == "1000");
        REQUIRE(solution.multiply("20", "50") == "1000");
    }

    SECTION("Very large numbers close to constraint limits") {
        // Create numbers close to maximum length (200 digits)
        string large1(100, '9'); // 100 nines
        string large2(100, '9'); // 100 nines
        string result = solution.multiply(large1, large2);
        
        // Result should be valid and not empty
        REQUIRE(!result.empty());
        REQUIRE(result[0] != '0' || result.length() == 1);
        
        // For multiplication of two 100-digit numbers of all 9s
        // The result should be roughly 200 digits long
        REQUIRE(result.length() >= 199);
        REQUIRE(result.length() <= 200);
    }

    SECTION("Edge case: maximum single digits") {
        REQUIRE(solution.multiply("9", "1") == "9");
        REQUIRE(solution.multiply("1", "9") == "9");
        REQUIRE(solution.multiply("9", "2") == "18");
        REQUIRE(solution.multiply("8", "9") == "72");
    }

    SECTION("Powers of 10") {
        REQUIRE(solution.multiply("10", "1") == "10");
        REQUIRE(solution.multiply("100", "1") == "100");
        REQUIRE(solution.multiply("10", "10") == "100");
        REQUIRE(solution.multiply("100", "100") == "10000");
    }

    SECTION("Numbers starting/ending with zeros (but not zero itself)") {
        // Note: Problem states numbers don't contain leading zeros except "0"
        // So we test trailing zeros in multiplication results
        REQUIRE(solution.multiply("12", "5") == "60");
        REQUIRE(solution.multiply("8", "125") == "1000");
        REQUIRE(solution.multiply("16", "625") == "10000");
    }

    SECTION("Symmetric multiplications") {
        // Test that a*b == b*a
        REQUIRE(solution.multiply("123", "456") == solution.multiply("456", "123"));
        REQUIRE(solution.multiply("789", "321") == solution.multiply("321", "789"));
        REQUIRE(solution.multiply("99", "11") == solution.multiply("11", "99"));
    }

    SECTION("Complex real-world like calculations") {
        REQUIRE(solution.multiply("271", "319") == "86449");
        REQUIRE(solution.multiply("987", "654") == "645498");
        REQUIRE(solution.multiply("1357", "2468") == "3349076");
        REQUIRE(solution.multiply("13579", "24681") == "335143299");
    }

    SECTION("Maximum constraint edge cases") {
        // Test with numbers at the boundary of constraints
        string num1 = "1" + string(199, '0'); // 1 followed by 199 zeros
        REQUIRE(solution.multiply(num1, "1") == num1);
        
        string num2 = "2" + string(199, '0'); // 2 followed by 199 zeros
        REQUIRE(solution.multiply("1", num2) == num2);
    }
}