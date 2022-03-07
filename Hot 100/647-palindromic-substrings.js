/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length
    const f = Array.from(new Array(n), ()=>new Array(n).fill(0))
    let ret = 0
    for (let i=0; i<n; i++) {
        f[i][i] = 1
        ret++
        if (i+1<n && s[i]===s[i+1]) {
            f[i][i+1] = 1
            ret++
        }
    }
    for (let k=3; k<=n; k++) {
        for (let i=0; i+k-1<n; i++) {
            if (s[i]===s[i+k-1]) {
                f[i][i+k-1] = f[i+1][i+k-2]
                ret+= f[i][i+k-1]
            }
        }
    }
    return ret
};