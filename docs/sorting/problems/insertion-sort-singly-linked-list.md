# Insertion Sort Singly Linked List
Given the `head` of a singly linked list, sort the list using `insertion sort`, and return the sorted list's head.

### Solution 1
```javascript
var insertionSortList = function(head) {
  let prev = head;
  let current = head.next;

  var insertionSortNode = function(node, prevNode) {
    var current = head;
    var prev = current;
    var sorted = false;

    while(current !== node) {
      if(current.val > node.val) {
        // detach node
        prevNode.next = node.next;

        // insert before current
        if(current === head) {
          node.next = head;
          head = node;
        } else {
          prev.next = node;
          node.next = current;
        }

        sorted = true;
        break;
      }

      prev = current;
      current = current.next;
    }

    return sorted;
  };

  while(current) {
    var sorted = insertionSortNode(current, prev);

    if(!sorted) {
      prev = current;
    }
    current = current.next;
  }

  return head;
};
```