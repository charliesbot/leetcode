/*
 * [7] Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or
 * unsigned).
 *
 *
 * Example 1:
 *
 * Input: x = 123
 * Output: 321
 *
 *
 * Example 2:
 *
 * Input: x = -123
 * Output: -321
 *
 *
 * Example 3:
 *
 * Input: x = 120
 * Output: 21
 *
 *
 * Constraints:
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 * Difficulty: Medium
 */

#include <cstdlib>

using namespace std;

class Solution {
  public:
    int reverse(int x) {
        const int negative_helper = x < 0 ? -1 : 1;
        x = abs(x);
        int result = 0;

        while (x != 0) {
            const int mod = x % 10;
            x /= 10;
            result = result * 10 + mod;
        }

        return result * negative_helper;
    }
};
