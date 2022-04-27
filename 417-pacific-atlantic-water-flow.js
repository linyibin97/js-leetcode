/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const n = heights.length
    const m = heights[0].length
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    const map = Array.from(new Array(n), ()=>new Array(m).fill(0))
    const dfs = (x, y, v) => {
        if (map[x][y] & v) return
        map[x][y] |= v
        for (let d of directions) {
            let dx = x + d[0]
            let dy = y + d[1]
            if (dx<0 || dy<0 || dx>=n || dy>=m) continue
            if (heights[x][y]<=heights[dx][dy])
                dfs(dx, dy, v)
        }
    }
    for (let i=0; i<n; i++) {
        dfs(i,0,1)
        dfs(i,m-1,2)
    }
    for (let j=0; j<m; j++) {
        dfs(0,j,1)
        dfs(n-1,j,2)
    }
    const ret = []
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (map[i][j] == 3) ret.push([i,j])
        }
    }
    return ret
};