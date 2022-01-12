/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    const dfs = function(s,n,m) {
      if ((n===0)&&(m===0)) result.push(s);
      if (n===m) return dfs(s+'(',n-1,m);
      if (n>0) dfs(s+'(',n-1,m);
      if (m>0) dfs(s+')',n,m-1);
    }
    dfs('(',n-1,n);
    return result;
  };