#include "0001_two_sum.h"
#include <gtest/gtest.h>
#include <vector>

using std::vector;

TEST(TwoSumTest, Example1) {
  vector<int> nums = {2, 7, 11, 15};
  const vector<int> mock = Solution().twoSum(nums, 9);

  const vector<int> solution = {1, 0};
  for (uint i = 0; i < mock.size(); ++i) {
    EXPECT_EQ(solution[i], mock[i]);
  }
}
