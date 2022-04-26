/**
 * @param {number[][]} grid
 * @return {number}
 */
 var projectionArea = function(grid) {
    const n = grid.length
    let top = 0
    let left = 0
    for (let i = 0; i < n; i++) {
        let lm = -Infinity
        for (let j = 0; j < n; j++) {
            if (grid[i][j]>0) top++
            if (grid[i][j]>lm) lm = grid[i][j]
        }
        left += lm
    }
    let right = 0
    for (let j = 0; j < n; j++) {
        let rm = -Infinity
        for (let i = 0; i < n; i++) {
            if (grid[i][j]>rm) rm = grid[i][j]
        }
        right += rm
    }
    return top + left + right
};