# Generate Parentheses

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Solution
```javascript
var generateParenthesis = function(n) {
  var combinations = [];

  var backtrack = function(currentComb, open, close) {
    // Base case: If both open and close parentheses are used up, add the combination to the result
    if (open === 0 && close === 0) {
      combinations.push(currentComb);
      return;
    }

    // If there are still remaining open parentheses, add one and continue building the combination
    if (open > 0) {
      backtrack(currentComb + "(", open - 1, close);
    }

    // If there are more remaining close parentheses than open parentheses, add one and continue building the combination
    if (close > open) {
      backtrack(currentComb + ")", open, close - 1);
    }
  };

  // Start the backtracking process with the initial combination, all open parentheses, and all close parentheses
  backtrack("", n, n);

  return combinations;
};
```