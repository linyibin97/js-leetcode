/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let l = -1;
    let result = 0;
    h = Array.from(new Array(n),()=>new Array(m).fill(0));
    for (let i=0;i<n;i++) {
        for (let j=0;j<m;j++) {
            if (matrix[i][j]==="1") {
                h[i][j]=1;
                if (j>0) h[i][j]=h[i][j]+h[i][j-1];

                l = i;
                for (let k=i;k>=0;k--) {
                    if (h[k][j]<h[l][j]) l=k;
                    result = Math.max(result,h[l][j]*(i-k+1));
                }
            }
        }
    }
    
    return result;
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));