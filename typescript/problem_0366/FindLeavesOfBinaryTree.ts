/*
 * [366] Find Leaves of Binary Tree
 *
 * Difficulty: TODO
 */

/*
 * Given a binary tree,
 * collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = this.right = null;
  }
}

const dfs = (node: TreeNode | null, result: number[][]): number => {
  if (!node) {
    return -1;
  }

  const level = Math.max(dfs(node.left, result), dfs(node.right, result)) + 1;

  if (level >= result.length) {
    result.push([]);
  }

  result[level].push(node.val);

  return level;
};

const findLeaves = (root: TreeNode): number[][] => {
  const result: number[][] = [];

  dfs(root, result);

  return result;
};

export { findLeaves, TreeNode };
