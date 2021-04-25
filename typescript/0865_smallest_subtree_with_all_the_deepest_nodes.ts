class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
  }
}

interface ResultNode {
  node: TreeNode;
  dist: number;
}

const dfs = (root: TreeNode): ResultNode => {
  if (root === null) {
    return { node: null, dist: 0 };
  }

  const left = dfs(root.left);
  const right = dfs(root.right);

  if (left.dist > right.dist) {
    return { node: left.node, dist: left.dist + 1 };
  }

  if (left.dist < right.dist) {
    return { node: right.node, dist: right.dist + 1 };
  }

  return { node: root, dist: left.dist + 1 };
};

const subtreeWithAllDeepest = (root: TreeNode) => {
  return dfs(root).node;
};

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

subtreeWithAllDeepest(root);
