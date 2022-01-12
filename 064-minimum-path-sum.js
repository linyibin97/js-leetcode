/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let f = Array.from(new Array(m),()=>new Array(n).fill(-1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i===0 && j===0) f[i][j] = grid[i][j];
            else if (i===0) f[i][j] = grid[i][j] + f[i][j-1];
            else if (j===0) f[i][j] = grid[i][j] + f[i-1][j];
            else f[i][j] = grid[i][j] + Math.min(f[i][j-1],f[i-1][j]);
        }
    }
    return f[m-1][n-1];
};