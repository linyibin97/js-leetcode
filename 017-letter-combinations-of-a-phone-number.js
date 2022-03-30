/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let map = {
      '2' : 'abc',
      '3' : 'def',
      '4' : 'ghi',
      '5' : 'jkl',
      '6' : 'mno',
      '7' : 'pqrs',
      '8' : 'tuv',
      '9' : 'wxyz'
    }
    let result = [];
    const dfs = function(n,s) {
      if (n===digits.length) {
          if (s!=='') result.push(s);
          return;
        }
      for (let i=0;i<map[digits[n]].length;i++)
        dfs(n+1,s+map[digits[n]][i]);
    }
    dfs(0,'');
    return result;
  };