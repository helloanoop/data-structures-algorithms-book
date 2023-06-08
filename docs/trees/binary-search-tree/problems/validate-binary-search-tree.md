# Validate Binary Search Tree

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

### Solution 1
**Approach:** In-order traversal of a BST will result in a sorted list of values. We can use this fact to validate the BST by checking if the in-order traversal results in a sorted list.
```javascript
var isValidBST = function(root) {
  if(!root) {
    return true;
  }

  var isValid = true;

  var traverseInOrder = function(node, list) {
    if(node.left) {
      traverseInOrder(node.left, list);
    }

    if(list.length) {
      if(list[list.length - 1] >= node.val) {
        isValid = false;
        return;
      }
    }
    list.push(node.val);

    if(node.right) {
      traverseInOrder(node.right, list);
    }
  }

  traverseInOrder(root, []);

  return isValid;
};
```

### Solution 2
**Approach:** We can also validate the BST by recursively checking if the current node's value is within the range of the min and max values of the current subtree. In a BST, as we traverse down the left subtree, we ensure that its left child's value is always less than the current node's value. Similarly, as we traverse down the right subtree, we ensure that its right child's value is always greater than the current node's value. We can use this fact to validate the BST by recursively checking the left and right subtrees with updated min and max values.

```javascript
var isValidBST = function(root) {
  // Define a helper function to check if a binary tree is a valid BST
  var isValidBSTHelper = function(node, min, max) {
    // Base case: an empty tree is considered a valid BST
    if (node === null) {
      return true;
    }

    // Check if the current node's value violates the BST property
    if (node.val <= min || node.val >= max) {
      return false;
    }

    // Recursively check the left and right subtrees with updated min and max values
    return (
      isValidBSTHelper(node.left, min, node.val) &&
      isValidBSTHelper(node.right, node.val, max)
    );
  };

  // Start the recursive validation with an initial range of negative/positive infinity
  return isValidBSTHelper(root, -Infinity, Infinity);
};
```

