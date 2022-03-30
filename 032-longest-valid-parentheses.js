/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if (s.length<=1) return 0;
    let result = 0;
    let count = 0;
    let right = 0;
    let left = 0;
    for (let i=0;i<s.length;i++) {
      if (s[i]==='(') left++;
      if (s[i]===')') right++;
      if (right>left) {
        left = 0;
        right = 0;
        count = 0;
      }
      if (right===left) {
        count = count + right + left;
        left = 0;
        right = 0;
      }
      if (count>result) result=count;
    }
    count = 0;
    right = 0;
    left = 0;
    for (let i=s.length-1;i>=0;i--) {
      if (s[i]==='(') left++;
      if (s[i]===')') right++;
      if (right<left) {
        left = 0;
        right = 0;
        count = 0;
      }
      if (right===left) {
        count = count + right + left;
        left = 0;
        right = 0;
      }
      if (count>result) result=count;
    }
    return result;
  };

  var longestValidParentheses = function(s) {
    let f = new Array(s.length).fill(0);
    let result = 0;
    f[-1] = 0;
    for (let i = 1; i<s.length; i++) {
      if (s[i]===')') {
        if (s[i-1]==='(') 
          f[i] = f[i-2] + 2;
        else {
          if (s[i-f[i-1]-1]==='(')
            f[i] = f[i-1] + f[i-f[i-1]-2] + 2;
        }
        result = Math.max(f[i],result);
      }
    }
    return result;
  };