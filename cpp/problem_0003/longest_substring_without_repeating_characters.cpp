/*
 * [3] Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * 
 * Example 1:
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * 
 * Constraints:
 * 
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 * 
 * 
 * Difficulty: Medium
 */

#include <algorithm>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> hash;
        int length = 0;
        int max_length = 0;
        int start = 0;

        for (size_t i = 0; i < s.length(); i++) {
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