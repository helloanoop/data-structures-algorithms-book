# Binary Tree

In computer science, a binary tree is a k-ary (k=2) tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

![Binary Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Binary_tree_v2.svg/220px-Binary_tree_v2.svg.png)

From a graph theory perspective, binary (and K-ary) trees as defined here are arborescences. In graph theory, an arborescence is a directed graph in which, for a vertex u (called the root) and any other vertex v, there is exactly one directed path from u to v. A binary tree is a special case of an ordered K-ary tree, where K is 2.

## Traversals

### Pre-order
In pre-order we always visit the current node, next we recursively traverse the current node's left subtree and then we recursively traverse the current node's right subtree. The pre-order traversal is a topologically sorted one, because a parent node is processed before any of its child nodes is done.

### In-order
In in-order we always recursively traverse the current node's left subtree, next we visit the current node and lastly we recursively traverse the current node's right subtree. This traversal order produces a sorted sequence of values if the binary tree is a binary search tree (BST).

### Post-order
In post-order we always recursively traverse the current node's left subtree, next we recursively traverse the current node's right subtree and then visit the current node. Post-order traversal can be useful to get postfix expression of a binary expression tree.