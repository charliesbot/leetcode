/*
 * [20] Valid Parentheses
 *
 * Given a string s containing just the characters &#39;(&#39;, &#39;)&#39;, &#39;{&#39;,
&#39;}&#39;, &#39;[&#39; and &#39;]&#39;, determine if the input string is valid.

An input string is valid if:


    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.



Example 1:


Input: s = &quot;()&quot;

Output: true


Example 2:


Input: s = &quot;()[]{}&quot;

Output: true


Example 3:


Input: s = &quot;(]&quot;

Output: false


Example 4:


Input: s = &quot;([])&quot;

Output: true


Example 5:


Input: s = &quot;([)]&quot;

Output: false



Constraints:


    1 <= s.length <= 104
    s consists of parentheses only &#39;()[]{}&#39;.
 *
 * Difficulty: Easy
 */

#include <stack>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
  public:
    bool isValid(string s) {
        unordered_map<char, char> dict({{'(', ')'}, {'[', ']'}, {'{', '}'}});
        std::stack<char> stack;

        for (const char &letter : s) {
            if (dict.find(letter) != dict.end()) {
                stack.push(dict[letter]);
                continue;
            }

            if (stack.empty()) {
                return false;
            }

            const char &popped = stack.top();

            if (letter != popped) {
                return false;
            }

            stack.pop();
        }

        return stack.empty();
    }
};
