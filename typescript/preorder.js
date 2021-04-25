var preorderTraversal = function(root) {
  const result = [];

  const loop = node => {
    if (!node) {
      return;
    }

    result.push(node.val);
    loop(node.left);
    loop(node.right);
  };

  loop(root);

  return result;
};
