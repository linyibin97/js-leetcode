/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const n = s.length;
    let count = '';
    let result = '';
    let l = 0;
    let r = 0;
    for (let i=0;i<n;i++) {
      count = s[i];
      l = i-1;
      r = i+1;
      while ((l>=0)&&(r<n)&&(s[l]===s[r])) {
        count = s[l] + count + s[r];
        l--;
        r++;
      }
      if (count.length>result.length) result = count;
    }
    for (let i=0;i<n;i++) {
      count = '';
      l = i;
      r = i+1;
      while ((l>=0)&&(r<n)&&(s[l]===s[r])) {
        count = s[l] + count + s[r];
        l--;
        r++;
      }
      if (count.length>result.length) result = count;
    }
    return result;
  };
