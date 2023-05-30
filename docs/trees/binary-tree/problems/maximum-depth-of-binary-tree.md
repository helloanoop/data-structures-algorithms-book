# Maximum Depth of Binary Tree

Given the `root` of a binary tree, return its maximum depth.
A binary tree's `maximum depth` is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Solution
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }

    if(!root.left && !root.right) {
        return 1;
    }

    function getNodeDepth(node) {
        if(!node) {
            return 0;
        }

        var leftNodeDepth = 1 + getNodeDepth(node.left);
        var rightNodeDepth = 1 + getNodeDepth(node.right);

        return Math.max(leftNodeDepth, rightNodeDepth);
    }

    var rootLeftNodeDepth = 1 + getNodeDepth(root.left);
    var rootRightNodeDepth = 1 + getNodeDepth(root.right);

    return Math.max(rootLeftNodeDepth, rootRightNodeDepth);
};
```