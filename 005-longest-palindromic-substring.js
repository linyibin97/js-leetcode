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

// 动态规划
var longestPalindrome = function(s) {
    const n = s.length
    let maxLen = 1
    let maxi = 0
    let f = Array.from(new Array(n),()=>new Array(n).fill(false))
    for (let i=0; i<n; i++) f[i][i] = true
    for (let i=2; i<=n; i++) {   //回文子串长度为i
        for (let j=0; j<=n-i; j++) {  //回文子串起始点为j
            //起始点为j 结束点为j+i-1
            if ((s[j]===s[j+i-1]) && (j+1>j+i-2 || f[j+1][j+i-2])) {
                f[j][j+i-1] = true
                if (i>maxLen) {
                    maxLen = i
                    maxi = j
                }
            }
        }
    }
    return s.slice(maxi, maxi + maxLen)
};