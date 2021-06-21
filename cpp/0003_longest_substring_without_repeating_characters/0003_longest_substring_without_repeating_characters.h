#include <algorithm>
#include <string>
#include <unordered_map>

using ::std::max;
using ::std::string;
using ::std::unordered_map;

class Solution {
public:
  int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> hash;
    int length = 0;
    int max_length = 0;
    int start = 0;

    for (int i = 0; i < s.length(); i++) {
      const char &letter = s[i];

      if (hash.find(letter) != hash.end() && hash[letter] >= start) {
        start = hash[letter] + 1;
        length = i - start;
      }

      length++;
      hash[letter] = i;
      max_length = max(length, max_length);
    }

    return max_length;
  }
};
