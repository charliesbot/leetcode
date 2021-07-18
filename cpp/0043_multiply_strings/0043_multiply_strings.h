/* Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2, also represented as a string.
 */

#include <string>
#include <math.h>
#include <vector>
#include <algorithm>

using std::string;

class Solution {
public:
  string multiply(string num1, string num2) {
    std::vector<int> result(num1.length() + num2.length(), 0);

    int flag = 0;

    for (int index1 = num1.length() - 1; index1 >= 0; index1--) {
      int carry = 0;
      int result_index = 0;
      for (int index2 = num2.length() - 1; index2 >= 0; index2--) {
        const int& raw_result = num1[index1] * num2[index2] + carry + result[result_index + flag];
        result[result_index +flag] = raw_result % 10;
        carry = floor(raw_result / 10);
        result_index++;
      }
      flag++;
    }

    while(result.size() > 1) {
      if (result.back() > 0) {
        break;
      }
      result.pop_back();
    }

    std::reverse(result.begin(), result.end());

    string string_result = "";

    for(const int& letter: result) {
      string_result += std::to_string(letter);
    }

    return string_result;
  }
};

/*
 32
219
---
carry = 0

[8, 0, 0, 7, 0]

7008
*/