var postorderTraversal = function(root, result = []) {
  if (!root) {
    return [];
  }

  if (root.left) {
    postorderTraversal(root.left, result);
  }

  if (root.right) {
    postorderTraversal(root.right, result);
  }

  result.push(root.val);

  return result;
};
