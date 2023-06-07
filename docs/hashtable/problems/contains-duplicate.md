# Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Solution 1
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if(!nums || !nums.length) {
    return false;
  }

  var map = {};
  for(i = 0; i < nums.length; i++) {
    var value = nums[i];
    if(map[value]) {
      return true;
    }
    map[value] = true;
  }

  return false;
};
```

### Solution 2
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var set = new Set();

  for (var i = 0; i < nums.length; i++) {
    // If the current number is already in the set, it's a duplicate
    if (set.has(nums[i])) {
      return true;
    }

    // Add the number to the set
    set.add(nums[i]);
  }

  // No duplicates found
  return false;
};
```