/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const n = s.length;
    let dict = new Set(wordDict);
    let result = false;
    let visited = Array.from(new Array(n+1),()=>new Array(n+1).fill(false))
    const find=function(l,r) {
        if (visited[l][r]) return;
        visited[l][r] = true;
        if (l>=n) {
            result = true;
            return;
        }
        while (r<=n) {
            if (dict.has(s.slice(l,r))) find(r,r+1)
            r++;
        }
    }
    find(0,1);
    return result;
};

var wordBreak = function(s, wordDict) {
    const n = s.length;
    let dict = new Set(wordDict);
    let f = new Array(n+1).fill(false);
    f[-1] = true;
    for (let i=0;i<n;i++) 
        for (let j=0;j<=i;j++)
            if (dict.has(s.slice(j,i+1))) {
                f[i]=f[i] || f[j-1];
            }
    return f[n-1];
};