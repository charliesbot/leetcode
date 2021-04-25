#include <iostream>
#include <unordered_map>
#include <vector>

using std::cout;
using std::unordered_map;
using std::vector;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    unordered_map<int, int> umap;
    vector<int> result = {};
    for (int i = 0; i < nums.size(); i++)
    {
      const int current = nums[i];

      if (umap.count(current) > 0)
      {
        result = {i, umap[current]};
        break;
      }

      const int diff = target - nums[i];
      umap[diff] = i;
    }

    return result;
  }
};

int main()
{
  vector<int> nums = {2, 7, 11, 15};
  auto result = Solution().twoSum(nums, 9);
  for (auto n : result)
  {
    cout << n << " ";
  }
}
