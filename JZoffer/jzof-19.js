/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;
    let f = Array.from(new Array(n+1),()=>new Array(m+1).fill(false));
    const match = (a,b)=>(a===b || b==='.');
    f[0][0] = true;
    for (let j=1;j<=m;j++)
        if (p[j-1]==='*') f[0][j] = f[0][j-2];
    for (let i=1;i<=n;i++)
        for (let j=1;j<=m;j++) {
            if (p[j-1]==='*') {
                if (match(s[i-1],p[j-2])) f[i][j] = f[i-1][j];
                f[i][j] = f[i][j] || f[i][j-2];
            } else if (match(s[i-1],p[j-1])) f[i][j] = f[i-1][j-1];
        }
    return f[n][m];
};