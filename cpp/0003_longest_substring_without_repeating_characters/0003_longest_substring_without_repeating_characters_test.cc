#include "0003_longest_substring_without_repeating_characters.h"
#include <gtest/gtest.h>
#include <string>

using ::std::string;

TEST(LengthOfLongestSubstring, Example1) {
  string s = "abcabcbb";

  EXPECT_EQ(Solution().lengthOfLongestSubstring(s), 3);
}

TEST(LengthOfLongestSubstring, Example2) {
  string s = "bbbbb";

  EXPECT_EQ(Solution().lengthOfLongestSubstring(s), 1);
}

TEST(LengthOfLongestSubstring, Example3) {
  string s = "pwwkew";

  EXPECT_EQ(Solution().lengthOfLongestSubstring(s), 3);
}

TEST(LengthOfLongestSubstring, Example4) {
  string s = "";

  EXPECT_EQ(Solution().lengthOfLongestSubstring(s), 0);
}
