const isPalindrome = word => {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

var countSubstrings = function(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let limit = 1;
    while (limit <= s.length - i) {
      const subString = s.substr(i, limit);
      if (isPalindrome(subString)) {
        counter++;
      }
      limit++;
    }
  }
  return counter;
};
