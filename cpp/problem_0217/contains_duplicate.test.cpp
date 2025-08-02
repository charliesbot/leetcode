#define CATCH_CONFIG_MAIN
#include "contains_duplicate.cpp"

#include "../catch_amalgamated.hpp"

TEST_CASE("Contains Duplicate", "[contains_duplicate]") {
    Solution solution;

    SECTION("Basic examples from problem statement") {
        // Example 1: [1,2,3,1] -> true (1 appears twice)
        vector<int> nums1 = {1, 2, 3, 1};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Example 2: [1,2,3,4] -> false (all distinct)
        vector<int> nums2 = {1, 2, 3, 4};
        REQUIRE(solution.containsDuplicate(nums2) == false);

        // Example 3: [1,1,1,3,3,4,3,2,4,2] -> true (multiple duplicates)
        vector<int> nums3 = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
        REQUIRE(solution.containsDuplicate(nums3) == true);
    }

    SECTION("Single element array") {
        vector<int> nums = {42};
        REQUIRE(solution.containsDuplicate(nums) == false);
    }

    SECTION("Two element arrays") {
        // Two identical elements
        vector<int> nums1 = {5, 5};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Two different elements
        vector<int> nums2 = {1, 2};
        REQUIRE(solution.containsDuplicate(nums2) == false);
    }

    SECTION("All elements identical") {
        vector<int> nums1 = {7, 7, 7, 7, 7};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        vector<int> nums2 = {0, 0, 0};
        REQUIRE(solution.containsDuplicate(nums2) == true);

        vector<int> nums3 = {-1, -1};
        REQUIRE(solution.containsDuplicate(nums3) == true);
    }

    SECTION("All elements distinct") {
        vector<int> nums1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        REQUIRE(solution.containsDuplicate(nums1) == false);

        vector<int> nums2 = {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5};
        REQUIRE(solution.containsDuplicate(nums2) == false);

        vector<int> nums3 = {100, 200, 300, 400, 500};
        REQUIRE(solution.containsDuplicate(nums3) == false);
    }

    SECTION("Duplicates at different positions") {
        // Duplicates at the beginning
        vector<int> nums1 = {1, 1, 2, 3, 4};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Duplicates at the end
        vector<int> nums2 = {1, 2, 3, 4, 4};
        REQUIRE(solution.containsDuplicate(nums2) == true);

        // Duplicates in the middle
        vector<int> nums3 = {1, 2, 3, 3, 4, 5};
        REQUIRE(solution.containsDuplicate(nums3) == true);

        // Duplicates far apart
        vector<int> nums4 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 1};
        REQUIRE(solution.containsDuplicate(nums4) == true);
    }

    SECTION("Negative numbers") {
        // Mix of positive and negative with duplicates
        vector<int> nums1 = {-1, 0, 1, -1};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // All negative with duplicates
        vector<int> nums2 = {-5, -3, -1, -5};
        REQUIRE(solution.containsDuplicate(nums2) == true);

        // All negative, no duplicates
        vector<int> nums3 = {-1, -2, -3, -4, -5};
        REQUIRE(solution.containsDuplicate(nums3) == false);
    }

    SECTION("Zero handling") {
        // Multiple zeros
        vector<int> nums1 = {0, 1, 2, 0};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Single zero among other numbers
        vector<int> nums2 = {1, 2, 3, 0, 4, 5};
        REQUIRE(solution.containsDuplicate(nums2) == false);

        // Only zeros
        vector<int> nums3 = {0, 0, 0};
        REQUIRE(solution.containsDuplicate(nums3) == true);
    }

    SECTION("Boundary values from constraints") {
        // Test with maximum and minimum integer values
        vector<int> nums1 = {-1000000000, 1000000000, -1000000000};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        vector<int> nums2 = {-1000000000, 0, 1000000000};
        REQUIRE(solution.containsDuplicate(nums2) == false);

        vector<int> nums3 = {1000000000, 1000000000};
        REQUIRE(solution.containsDuplicate(nums3) == true);
    }

    SECTION("Large arrays") {
        // Large array with no duplicates
        vector<int> large_unique;
        for (int i = 0; i < 1000; i++) {
            large_unique.push_back(i);
        }
        REQUIRE(solution.containsDuplicate(large_unique) == false);

        // Large array with one duplicate at the end
        vector<int> large_with_dup = large_unique;
        large_with_dup.push_back(500);  // Duplicate of existing element
        REQUIRE(solution.containsDuplicate(large_with_dup) == true);
    }

    SECTION("Patterns that might confuse hash-based solutions") {
        // Sequential numbers
        vector<int> nums1 = {1, 2, 3, 4, 5, 1};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Powers of 2
        vector<int> nums2 = {1, 2, 4, 8, 16, 32, 4};
        REQUIRE(solution.containsDuplicate(nums2) == true);

        // Fibonacci-like sequence
        vector<int> nums3 = {1, 1, 2, 3, 5, 8, 13};
        REQUIRE(solution.containsDuplicate(nums3) == true);  // Two 1's
    }

    SECTION("Multiple duplicates") {
        // Two pairs of duplicates
        vector<int> nums1 = {1, 2, 3, 1, 4, 2};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Three elements appear twice each
        vector<int> nums2 = {1, 2, 3, 1, 2, 3, 4, 5};
        REQUIRE(solution.containsDuplicate(nums2) == true);

        // One element appears multiple times
        vector<int> nums3 = {1, 2, 3, 1, 4, 1, 5};
        REQUIRE(solution.containsDuplicate(nums3) == true);
    }

    SECTION("Random-like distributions") {
        // Array that looks random but has duplicates
        vector<int> nums1 = {93, 17, 42, 68, 21, 93, 88};
        REQUIRE(solution.containsDuplicate(nums1) == true);

        // Array with no clear pattern, no duplicates
        vector<int> nums2 = {37, 91, 15, 68, 42, 73, 29};
        REQUIRE(solution.containsDuplicate(nums2) == false);
    }

    SECTION("Edge cases near constraint limits") {
        // Maximum array size simulation (smaller for testing)
        vector<int> max_size_array;
        for (int i = 0; i < 10000; i++) {
            max_size_array.push_back(i);
        }
        REQUIRE(solution.containsDuplicate(max_size_array) == false);

        // Add one duplicate to max size array
        max_size_array.push_back(5000);
        REQUIRE(solution.containsDuplicate(max_size_array) == true);
    }

    SECTION("Sorted vs unsorted arrays") {
        // Sorted array with duplicate
        vector<int> sorted_dup = {1, 2, 3, 4, 4, 5, 6};
        REQUIRE(solution.containsDuplicate(sorted_dup) == true);

        // Reverse sorted with duplicate
        vector<int> reverse_sorted_dup = {6, 5, 4, 4, 3, 2, 1};
        REQUIRE(solution.containsDuplicate(reverse_sorted_dup) == true);

        // Unsorted with duplicate
        vector<int> unsorted_dup = {3, 1, 4, 1, 5, 9, 2};
        REQUIRE(solution.containsDuplicate(unsorted_dup) == true);
    }
}
