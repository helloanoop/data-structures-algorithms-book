# Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

### Solution
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits || !digits.length) {
    [];
  }

  var map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  var backtrack = (digits) =>  {
    if(!digits || !digits.length) {
      return [];
    }

    var combinations = [];
    var first = digits.shift();
    var letters = map[first].split('');

    if(!digits.length) {
      return letters;
    }

    var subCombinations = recurse(digits);

    for(i = 0; i < letters.length; i++) {
      subCombinations.forEach((sub) => {
        combinations.push(letters[i] + sub);
      });
    }

    return combinations;
  };

  return backtrack(digits.split(''));
};
```