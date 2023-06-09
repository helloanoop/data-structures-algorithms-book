# Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

### Solution 1
```javascript
var combinationSum = function(candidates, target) {
  var output = [];
  var backtrack = (candidates, prevCombinations) => {
    if(!candidates.length) return;

    var num = candidates.shift();
    if(target % num === 0) {
      output.push(Array(parseInt(target/num)).fill(num));
    }
    var multiples = generateMultiples(num, target);

    if(!prevCombinations.length) {
      return backtrack(candidates, multiples);
    }

    let newCombinations = [];

    for(i = 0; i < multiples.length; i++) {
      for(j = 0; j < prevCombinations.length; j++) {
        var sum = multiples[i].value + prevCombinations[j].value;

        if(sum === target) {
          output.push([...multiples[i].combinations, ...prevCombinations[j].combinations]);
        }

        if(sum < target) {
          newCombinations.push({
            value: sum,
            combinations: [...multiples[i].combinations, ...prevCombinations[j].combinations]
          })
        }
      }
    }
    
    backtrack(candidates, [...multiples, ...newCombinations, ...prevCombinations]);
  };

  backtrack(candidates, []);

  return output;
};

var generateMultiples = (num, target) => {
  var multiples = [];
  var i = num;
  var count = 1;

  while(i < target) {
    multiples.push({
      value: i,
      combinations: Array(count).fill(num)
    });

    i = i + num;
    count++;
  }

  return multiples;
}
```

### Solution 2
One approach is to use a decision tree to find all possible combinations. The tree is traversed in a depth-first manner. The algorithm starts at the root node and explores as far as possible along each branch before backtracking.

```text
candidates = [2, 3, 6, 7], target = 7
```

```text
2
  [2, 2]
    [2, 2, 2]
      [2, 2, 2, 2] = 8 > 7
      [2, 2, 2, 3] = 9 > 7
      [2, 2, 2, 6] = 12 > 7
      [2, 2, 2, 7] = 13 > 7
    [2, 2, 3] = 7
    [2, 2, 6] = 10 > 7
    [2, 2, 7] = 11 > 7
  [2, 3]
    [2, 3, 3] = 8 > 7
    [2, 3, 6] = 11 > 7
    [2, 3, 7] = 12 > 7
  [2, 6] = 8 > 7
  [2, 7] = 9 > 7
```

The issue with this approach is that it results in duplicate combinations. For example, the combination `[2, 2, 3]` is found twice. Once when the algorithm explores the branch `[2, 2]` and again when it explores the branch `[2, 3]`.

To avoid this, use an index to keep track of the current position in the array. When the algorithm explores a branch, it only considers elements that come after the current index.

```javascript
//                      2
//             2,2                                   2,3                  2,5    2,6
//      2,2,2            2,2,3  2,2,5  2,2,7    2,3,3   2,3,5   2,3,6
// 2,2,2,2   2,2,2,3
function combinationSum(candidates, target) {
  var result = [];

  var dfs = (combination, total, start) => {
    if(total === target) {
      result.push([...combination]);
      return;
    }

    if(total > target) {
      return;
    }

    for(let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      dfs(combination, total + candidates[i], i);
      combination.pop();
    }
  };

  dfs([], 0, 0);

  return result;
}
```

### Solution 3
This solution is similar to solution 2, but uses recursion instead of iteration using a for loop.

```javascript
//                      2
//             2,2                                   2,3                  2,5    2,6
//      2,2,2            2,2,3  2,2,5  2,2,7    2,3,3   2,3,5   2,3,6
// 2,2,2,2   2,2,2,3
function combinationSum(candidates, target) {
  var result = [];

  var dfs = (combination, total, i) => {
    if(total === target) {
      result.push([...combination]);
      return;
    }

    if((i >= candidates.length) || (total > target)) {
      return;
    }

    combination.push(candidates[i]);
    dfs(combination, total + candidates[i], i);
    combination.pop();
    dfs(combination, total, i + 1);
  };

  dfs([], 0, 0);

  return result;
}
```
