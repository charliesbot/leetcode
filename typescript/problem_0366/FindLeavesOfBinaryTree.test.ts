import { test, expect } from 'vitest';
import { findLeaves, TreeNode } from './FindLeavesOfBinaryTree';

test('test1', () => {
  const head = new TreeNode(1);
  head.left = new TreeNode(2);
  head.right = new TreeNode(3);

  head.left.left = new TreeNode(4);
  head.left.right = new TreeNode(5);

  const result = [[4, 5, 3], [2], [1]];
  expect(findLeaves(head)).toStrictEqual(result);
});
