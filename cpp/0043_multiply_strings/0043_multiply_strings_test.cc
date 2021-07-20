#include "0043_multiply_strings.h"
#include <gtest/gtest.h>

TEST(MultiplyStrings, Example1) {
  EXPECT_EQ(Solution().multiply("2", "3"), "6");
}

TEST(MultiplyStrings, Example2) {
  EXPECT_EQ(Solution().multiply("589", "24"), "14136");
}

TEST(MultiplyStrings, Example3) {
  EXPECT_EQ(Solution().multiply("5891", "243"), "1431513");
}

TEST(MultiplyStrings, Example4) {
  EXPECT_EQ(Solution().multiply("123", "456"), "56088");
}

TEST(MultiplyStrings, Example5) {
  EXPECT_EQ(Solution().multiply("0", "0"), "0");
}
