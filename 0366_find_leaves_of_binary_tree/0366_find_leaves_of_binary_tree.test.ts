import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { findLeaves, TreeNode } from "./0366_find_leaves_of_binary_tree.ts";

Deno.test(function test1() {
  const head = new TreeNode(1);
  head.left = new TreeNode(2);
  head.right = new TreeNode(3);

  head.left.left = new TreeNode(4);
  head.left.right = new TreeNode(5);

  const result = [[4, 5, 3], [2], [1]];
  assertEquals(findLeaves(head), result);
});
