/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    const n = matrix.length;
    if (n===0) return false;
    const m = matrix[0].length;
    let x = 0, y = m - 1;
    while (x<n && y>=0) {
        if (matrix[x][y]===target) return true;
        if (matrix[x][y]>target) y = y - 1;
        if (matrix[x][y]<target) x = x + 1;
    }
    return false;
};