/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    let f = Array.from(new Array(m+1),()=>new Array(n+1).fill(0));
    for (let i=1; i<=m; i++) f[i][0] = i;
    for (let i=1; i<=n; i++) f[0][i] = i;
    for (let i=1; i<=m; i++)
        for (let j=1; j<=n; j++) {
            if (word1[i-1]===word2[j-1]) f[i][j]=f[i-1][j-1]; 
                else f[i][j]=f[i-1][j-1]+1;
            f[i][j] = Math.min(f[i][j],f[i-1][j]+1,f[i][j-1]+1)
        }
    return f[m][n];
};