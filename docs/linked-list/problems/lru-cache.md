# LRU Cache
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the `LRUCache` class:
- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.
- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

### Solution
```javascript
var Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = null;
  this.tail = null;
  this.cache = {};
};

LRUCache.prototype.get = function(key) {
  if(!this.cache.hasOwnProperty(key)) {
    return -1;
  }

  var node = this.cache[key];
  this.moveNodeToHead(node);

  return node.value;
};

LRUCache.prototype.put = function(key, value) {
  if(this.cache.hasOwnProperty(key)) {
    var node = this.cache[key];
    node.value = value;
    this.moveNodeToHead(node);
    return;
  }

  if(this.size >= this.capacity) {
    var tailNodeKey = this.tail.key;

    delete this.cache[tailNodeKey];
    this.evictTailNode();

    this.size = this.size - 1;
  }

  var node = new Node(key, value);
  this.cache[key] = node;
  this.setNodeAsHead(node);
  this.size = this.size + 1;
};

LRUCache.prototype.evictTailNode = function() {
  var tailNode = this.tail;

  if(tailNode.prev) {
    tailNode.prev.next = null;
    this.tail = tailNode.prev;
  } else {
    this.tail = null;
    this.head = null;
  }
};

LRUCache.prototype.setNodeAsHead = function(node) {
  if(this.head === null) {
    this.head = node;
    this.tail = node;
    return;
  };

  node.next = this.head;
  node.prev = null;
  this.head.prev = node;
  this.head = node;
};

LRUCache.prototype.moveNodeToHead = function(node) {
  if(this.head === node) return;

  // detach node
  node.prev.next = node.next;
  if(node.next) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }

  // set node as head
  node.next = this.head;
  node.prev = null;
  this.head.prev = node;
  this.head = node;
};
```