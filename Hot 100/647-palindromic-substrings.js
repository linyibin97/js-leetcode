/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    const n = s.length;
    let f = Array.from(new Array(n+1),()=>new Array(n+1).fill(0));
    for (let i=0;i<n;i++) {
        f[i][0] = 1;
        f[i][1] = 1;
    }
    let ret = 0;
    for (let i=0;i<n;i++) {
        let t = 0;
        for (let j=2;j<=i+1;j++) {
            if (s[i]===s[i-j+1])
                f[i][j] += f[i-1][j-2];
                t += f[i][j];
        }
        ret = ret + t + 1;
    }
    return ret;
};