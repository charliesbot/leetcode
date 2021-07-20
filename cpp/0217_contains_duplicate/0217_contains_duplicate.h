#include <unordered_set>
#include <vector>

using ::std::unordered_set;
using ::std::vector;

class Solution {
public:
  bool containsDuplicate(vector<int> &nums) {
    unordered_set<int> unique_numbers;
    for (const int &number : nums) {
      if (unique_numbers.find(number) != unique_numbers.end()) {
        return true;
      }
      unique_numbers.insert(number);
    }

    return false;
  }
};
