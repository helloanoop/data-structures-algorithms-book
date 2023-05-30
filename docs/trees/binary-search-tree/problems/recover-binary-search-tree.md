# Recover Binary Search Tree

You are given the `root` of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

### Solution
This is a **hard** problem to visualize and comeup with a solution if you look frm a graph standpoint. However, if you look at it from a list standpoint, it becomes much easier to visualize and come up with a solution.

Lets take this example list: `[1, 6, 3, 4, 5, 2, 7]`.
THe algorithm involves iterating each element in the list, making note of the first element that is out of place. In this case, it is `6`. Then, we iterate the list again, making note of the last element that is out of place. In this case, it is `2`. Finally, we swap the two elements.

Map this to a BST, and you will see that the algorithm works.

```javascript
var recoverTree = function(root) {
  var prev = null; // Previous node during inorder traversal
  var first = null; // First misplaced node
  var second = null; // Second misplaced node

  var inorderTraversal = function(node) {
    if (node === null) {
      return;
    }

    // Traverse the left subtree
    inorderTraversal(node.left);

    // Visit the current node
    if (prev !== null && prev.val > node.val) {
      if (first === null) {
        first = prev;
      }
      second = node;
    }
    prev = node;

    // Traverse the right subtree
    inorderTraversal(node.right);
  };

  // Perform the in-order traversal to identify the misplaced nodes
  inorderTraversal(root);

  // Swap the values of the misplaced nodes
  var temp = first.val;
  first.val = second.val;
  second.val = temp;
};
```