#include "0001_two_sum.h"
#include <iostream>
#include <unordered_map>
#include <vector>

using std::unordered_map;
using std::vector;

vector<int> Solution::twoSum(vector<int> &nums, int target) {
  unordered_map<int, int> umap;
  for (int i = 0; i < nums.size(); i++) {
    const int current = nums[i];

    if (umap.count(current) > 0) {
      return {i, umap[current]};
    }

    const int diff = target - nums[i];
    umap[diff] = i;
  }

  return {};
}
