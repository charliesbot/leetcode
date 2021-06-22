#include "0007_reverse_integer.h"
#include <gtest/gtest.h>

TEST(ReverseInteger, Example1) {
  const int input = 123;
  const int output = 321;

  EXPECT_EQ(Solution().reverse(input), output);
}

TEST(ReverseInteger, Example2) {
  const int input = -123;
  const int output = -321;

  EXPECT_EQ(Solution().reverse(input), output);
}

TEST(ReverseInteger, Example3) {
  const int input = 120;
  const int output = 21;

  EXPECT_EQ(Solution().reverse(input), output);
}

TEST(ReverseInteger, Example4) {
  const int input = 0;
  const int output = 0;

  EXPECT_EQ(Solution().reverse(input), output);
}
