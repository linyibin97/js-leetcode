/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const n = matrix.length
    const m = matrix[0].length
    const f = Array.from(new Array(n), ()=>new Array(m).fill(0))
    const directions = [[-1,0],[1,0],[0,1],[0,-1]]
    let ret = 0
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            ret = Math.max(ret, dfs(i,j))
        }
    }
    return ret

    function dfs(x,y) {
        if (f[x][y]!==0) return f[x][y]
        f[x][y] = 1
        for (let d of directions) {
            let dx = x + d[0]
            let dy = y + d[1]
            if (dx<0 || dy<0 || dx>=n || dy>=m) continue
            if (matrix[x][y]>=matrix[dx][dy]) continue
            f[x][y] = Math.max(f[x][y], dfs(dx,dy) + 1)
        }
        return f[x][y]
    }
};