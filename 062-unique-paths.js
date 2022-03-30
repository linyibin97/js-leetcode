/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let f= Array.from(new Array(m), ()=>new Array(n).fill(0));
    f[0][0]=1;
    for (let i=0;i<m;i++) 
        for (let j=0;j<n;j++) {
            if (i>0) f[i][j]=f[i][j]+f[i-1][j];
            if (j>0) f[i][j]=f[i][j]+f[i][j-1];
        }
    return f[m-1][n-1];
};