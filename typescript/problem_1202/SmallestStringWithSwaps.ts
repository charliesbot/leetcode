/*
 * [1202] Smallest String With Swaps
 *
 * Difficulty: TODO
 */

/*
 * You are given a string s,
 * and an array of pairs of indices in the string pairs
 * where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.
 *
 * You can swap the characters at any pair of indices in the given pairs any number of times.
 *
 * Return the lexicographically smallest string that s can be changed to after using the swaps.
 */

const smallestStringWithSwaps = (s: string, pairs: number[][]): string => {
  const set = Array(s.length).fill(-1);
  const groups: number[][] = [];

  const union = (a: number, b: number) => {
    const root1 = find(a);
    const root2 = find(b);
    if (root1 !== root2) {
      set[root2] = root1;
    }
  };

  const find = (index: number): number => {
    if (set[index] < 0) {
      return index;
    }

    return (set[index] = find(set[index]));
  };

  for (let pair of pairs) {
    union(pair[0], pair[1]);
  }

  for (let i = 0; i < s.length; i++) {
    groups[i] = [];
  }

  for (let i = 0; i < s.length; i++) {
    groups[find(i)].push(i);
  }

  const sArr = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (groups[i].length > 1) {
      const chars = groups[i].map(idx => s[idx]);
      chars.sort();
      for (let k = 0; k < groups[i].length; k++) {
        sArr[groups[i][k]] = chars[k];
      }
    }
  }

  return sArr.join('');
};

export { smallestStringWithSwaps };
