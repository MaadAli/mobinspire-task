class TNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const collectView = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [[root, 0]];

  while (queue.length > 0) {
    const [node, level] = queue.shift();

    if (result.length === level) {
      result.push(node.value);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
    if (node.left) {
      queue.push([node.left, level + 1]);
    }
  }

  return result;
};

const root = new TNode(1);
root.left = new TNode(2);
root.right = new TNode(3);
root.left.left = new TNode(4);
root.left.right = new TNode(5);
root.right.left = new TNode(6);
root.right.right = new TNode(7);
root.right.left.right = new TNode(8);
root.right.left.right.left = new TNode(9);
root.right.left.right.right = new TNode(10);

const rightViewResult = collectView(root);
console.log("The right view of the tree is:", rightViewResult);
