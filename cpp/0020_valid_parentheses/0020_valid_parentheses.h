#include <stack>
#include <string>
#include <unordered_map>

using std::stack;
using std::unordered_map;

using std::string;

class Solution {
public:
  bool isValid(string s) {
    unordered_map<char, char> dict({{'(', ')'}, {'[', ']'}, {'{', '}'}});
    stack<char> stack;

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
