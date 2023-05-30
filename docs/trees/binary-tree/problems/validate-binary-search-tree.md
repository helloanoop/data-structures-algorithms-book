# Validate Binary Search Tree

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

## Solution 1
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

## Solution 2
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

