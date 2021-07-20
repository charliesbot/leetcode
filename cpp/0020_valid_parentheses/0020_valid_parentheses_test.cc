#include "0020_valid_parentheses.h"
#include <gtest/gtest.h>
#include <string>

using std::string;

TEST(ValidParenthesisTest, SimpleString) {
  string s = "()";

  EXPECT_TRUE(Solution().isValid(s));
}

TEST(ValidParenthesisTest, AllSymbolsString) {
  string s = "()[]{}";

  EXPECT_TRUE(Solution().isValid(s));
}

TEST(ValidParenthesisTest, InvalidString) {
  string s = "(]";

  EXPECT_FALSE(Solution().isValid(s));
}

TEST(ValidParenthesisTest, InvalidString2) {
  string s = "]";

  EXPECT_FALSE(Solution().isValid(s));
}
