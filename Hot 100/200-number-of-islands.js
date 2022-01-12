/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const canwalk = function (x,y) {
        if (x<0 || x>=n || y<0 || y>=m) return false;
        return grid[x][y]==='1';
    }
    const walk = function (x,y) {
        grid[x][y] = "0";
        if (canwalk(x+1,y)) walk(x+1,y);
        if (canwalk(x-1,y)) walk(x-1,y);
        if (canwalk(x,y+1)) walk(x,y+1);
        if (canwalk(x,y-1)) walk(x,y-1);
    }
    let result = 0;
    for (let i=0;i<n;i++) 
        for (let j=0;j<m;j++)
            if (grid[i][j]==="1") {
                result += 1;
                walk(i,j);
            }
    return result;
};