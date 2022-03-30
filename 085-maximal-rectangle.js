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


var maximalRectangle = function(matrix) {
    const n = matrix.length
    const m = matrix[0].length
    for (let i=0; i<n; i++) 
        for (let j=0; j<m; j++) {
            matrix[i][j] = Number(matrix[i][j])
            if (matrix[i][j]!==0 && j>0) 
                matrix[i][j] += matrix[i][j-1]
        }
    let l = new Array(n).fill(0)
    let r = new Array(n).fill(0)
    let ret = 0
    for (let j=0; j<m; j++) {
        let s = []
        for (let i=0; i<n; i++) {
            while (s.length>0 && matrix[s[s.length-1]][j]>=matrix[i][j]) s.pop()
            if (s.length===0) l[i] = -1
                else l[i] = s[s.length-1]
            s.push(i)
        }
        s = []
        for (let i=n-1; i>=0; i--) {
            while (s.length>0 && matrix[s[s.length-1]][j]>=matrix[i][j]) s.pop()
            if (s.length===0) r[i] = n
                else r[i] = s[s.length-1]
            s.push(i)
            ret = Math.max(ret, (r[i]-l[i]-1)*matrix[i][j])
        }
    }
    return ret
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));