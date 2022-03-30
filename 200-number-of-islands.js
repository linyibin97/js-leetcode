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


var numIslands = function(grid) {
    const n = grid.length
    const m = grid[0].length
    let count = 0
    const dfs = function(x,y) {
        if (x<0 || y<0 || x>=n || y>=m || grid[x][y]==="0") return
        grid[x][y]="0"
        dfs(x+1,y)
        dfs(x,y+1)
        dfs(x-1,y)
        dfs(x,y-1)
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (grid[i][j]==="1") {
                count++
                dfs(i,j)
            }
        }
    }
    return count
};