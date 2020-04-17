var inorderTraversal = function(root) {
  const result = [];

  const loop = node => {
    if (!node) {
      return;
    }

    loop(node.left);
    result.push(node.val);
    loop(node.right);
  };

  loop(root);

  return result;
};
