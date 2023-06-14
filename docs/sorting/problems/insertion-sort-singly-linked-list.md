# Insertion Sort Singly Linked List
Given the `head` of a singly linked list, sort the list using `insertion sort`, and return the sorted list's head.

### Solution 1
```javascript
var insertionSortList = function(head) {
  var insertionSortNode = function(node, head) {
    var current = head;
    var prev = current;
    var sorted = false;

    while(current !== node) {
      if(current.val > node.val) {
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

    return {
      sorted: sorted,
      newHead: head
    };
  };

  let prev = head;
  let current = head.next;
  while(current) {
    var next = current.next;
    var {
      sorted,
      newHead
    } = insertionSortNode(current, head);

    if(sorted) {
      head = newHead;
      prev.next = next;
    } else {
      prev = current;
    }

    current = next;
  }

  return head;
};
```

### Solution 2
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  // If the list is empty or has only one element, it is already sorted
  if (!head || !head.next) {
    return head;
  }

  var dummy = new ListNode(0, head);
  let prev = head;
  let current = head.next;

  while(current) {
    var nextNode = current.next;
    if(current.val > prev.val) {
      prev = current;
      current = current.next;
      continue;
    }

    var tmp = dummy;
    while(tmp.next && tmp.next.val < current.val) {
      tmp = tmp.next;
    }

    prev.next = current.next;
    current.next = tmp.next;
    tmp.next = current;

    current = nextNode;
  }

  return dummy.next;
};
```