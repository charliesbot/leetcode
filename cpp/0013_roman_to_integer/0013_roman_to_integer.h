#include "string"
#include <unordered_map>
#include <unordered_set>

using std::string;
using std::unordered_map;
using std::unordered_set;

class Solution {
public:
  int romanToInt(string s) {
    unordered_map<char, unordered_set<char>> dict(
        {{'I', {'V', 'X'}}, {'X', {'L', 'C'}}, {'C', {'D', 'M'}}});
    unordered_map<char, int> values({{'I', 1},
                                     {'V', 5},
                                     {'X', 10},
                                     {'L', 50},
                                     {'C', 100},
                                     {'D', 500},
                                     {'M', 1000}});

    int result = 0;

    for (int index = 0; index < s.size(); index++) {
      auto &current_char = s[index];
      if (dict.find(current_char) != dict.end()) {
        auto &next_char = s[index + 1];
        if (dict[current_char].find(next_char) != dict[current_char].end()) {
          result += values[next_char] - values[current_char];
          index++;
          continue;
        }
      }

      result += values[current_char];
    }

    return result;
  }
};
