/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    let regex = new RegExp(p);
    return regex.test(s) && regex.exec(s)[0]===s;
  };

 var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;
    const match = (a,b) => (a===b)||(b==='.');
    let f = Array.from(new Array(n+1),(()=>new Array(m+1).fill(false)));
    f[0][0] = true;
    for (let j=1;j<=m;j++) {
        if (p[j-1]==="*") f[0][j]=f[0][j - 2];
    }
    for (let i=1;i<=n;i++) {
        for (let j=1;j<=m;j++) {
            if (p[j-1] === '*') {
                if (match(s[i-1],p[j-2])) f[i][j] = f[i-1][j] || f[i][j-2]; else f[i][j] = f[i][j-2];
            } 
            else {
                f[i][j] = f[i-1][j-1] && match(s[i-1],p[j-1])
            }
        }
    }
    return f[n][m]
 }

var isMatch = function(s, p) {
    const n = s.length
    const m = p.length
    const match = (a,b)=> (a===b)||(b==='.')
    let f = Array.from(new Array(n+1),()=>new Array(m+1).fill(false))
    f[0][0] = true
    for (let j=1; j<=m; j++)
        f[0][j] = p[j-1]==='*' && f[0][j-2]
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=m; j++) {
            if (p[j-1]==='*') {
                f[i][j] = (match(s[i-1],p[j-2]) && f[i-1][j]) || f[i][j-2]
            } else {
                f[i][j] = match(s[i-1],p[j-1]) && f[i-1][j-1]
            }
        }
    }
    return f[n][m]
};

 console.log(isMatch('aa','a*'));