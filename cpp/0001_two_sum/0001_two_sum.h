#include <unordered_map>
#include <vector>

using std::unordered_map;
using std::vector;

class Solution {
public:
  vector<int> twoSum(vector<int> &nums, int target) {
    unordered_map<int, int> umap;
    for (uint i = 0; i < nums.size(); i++) {
      const int current = nums[i];

      if (umap.count(current) > 0) {
        return {(int)i, umap[current]};
      }

      const int diff = target - nums[i];
      umap[diff] = i;
    }

    return {};
  }
};
