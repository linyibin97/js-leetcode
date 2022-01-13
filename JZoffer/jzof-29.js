/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const n = matrix.length;
    if (n===0) return [];
    const m = matrix[0].length;
    const d = [[0,1],[1,0],[0,-1],[-1,0]];
    let ret = [];
    let left = 0, right = m-1, low = 0, hight = n-1;
    let i = 0;
    let x = 0, y = 0;
    while (ret.length<n*m) {
        while (low<=x && x<=hight && left<=y && y<=right) {
            ret.push(matrix[x][y]);
            x+= d[i][0];
            y+= d[i][1];
        }
        if (y>right) {
            y--;
            x++;
            low++;
        } else if (x>hight) {
            x--;
            y--;
            right--;
        } else if (y<left) {
            x--;
            y++;
            hight--;
        } else if (x<low) {
            x++;
            y++;
            left++;
        }
        i = (i+1)%4;
    }
    return ret;
};