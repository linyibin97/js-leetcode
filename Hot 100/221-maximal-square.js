/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let result = 0;
    let h = Array.from(new Array(n),()=>new Array(m).fill(0));
    for (let i=0;i<n;i++) {
        for (let j=0;j<m;j++) {
            if (matrix[i][j]==="1") {
                h[i][j] = 1;
                if (j>0) h[i][j] += h[i][j-1];

                let min = h[i][j];
                for (let k=i;k>=0;k--) {
                    min = Math.min(min,h[k][j]);
                    if (i-k+1>min) break;
                    result = Math.max(result,Math.pow(i-k+1,2))
                }
            }
        }
    }
    return result;
};

var maximalSquare = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let result = 0;
    let dp = Array.from(new Array(n+1),()=>new Array(m+1).fill(0));
    for (let i=1;i<=n;i++) 
        for (let j=1;j<=m;j++) 
            if (matrix[i-1][j-1]==="1") {
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1
                result = Math.max(result,Math.pow(dp[i][j],2))
            }
    return result;
};