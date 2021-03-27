// Using your BinarySearchTree class from your previous lesson,
// create a binary search tree with the following dataset:
// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement
// inOrder(), preOrder(), and postOrder() functions. Test your
// functions with the following datasets.

// A pre-order traversal should give you the following order:
// 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

const BST = require("./BinarySearchTree");

function main() {
  let tree = new BST();

  tree.insert(25, 25);
  tree.insert(15, 15);
  tree.insert(50, 50);
  tree.insert(10, 10);
  tree.insert(24, 24);
  tree.insert(35, 35);
  tree.insert(70, 70);
  tree.insert(4, 4);
  tree.insert(12, 12);
  tree.insert(18, 18);
  tree.insert(31, 31);
  tree.insert(44, 44);
  tree.insert(66, 66);
  tree.insert(90, 90);
  tree.insert(22, 22);

  console.log(tree.inOrder());
  //console.log(tree.preOrder());
  //console.log(tree.postOrder());
}

main();
