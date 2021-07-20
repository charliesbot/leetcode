#include "0217_contains_duplicate.h"
#include <gtest/gtest.h>

using std::vector;

TEST(ContainsDuplicateTest, Example1) {
  vector<int> nums = {1, 2, 3, 1};

  ASSERT_TRUE(Solution().containsDuplicate(nums));
}

TEST(ContainsDuplicateTest, Example2) {
  vector<int> nums = {1, 2, 3, 4};

  ASSERT_FALSE(Solution().containsDuplicate(nums));
}

TEST(ContainsDuplicateTest, Example3) {
  vector<int> nums = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};

  ASSERT_TRUE(Solution().containsDuplicate(nums));
}
