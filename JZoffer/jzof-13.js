/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
    const next = [[-1,0],[1,0],[0,-1],[0,1]];
    let f = Array.from(new Array(m), ()=>new Array(n).fill(false));
    let count = 0;
    const canmove = function(x,y) {
        let ret = 0;
        while (x>0) {
            ret += x % 10;
            x = Math.floor(x / 10);
        }
        while (y>0) {
            ret += y % 10;
            y = Math.floor(y / 10);
        }
        return (ret<=k);
    }
    const dfs = function(x,y) {
        f[x][y]=true;
        count++;
        for (let i=0; i<4; i++) {
            let nextx = x + next[i][0];
            let nexty = y + next[i][1];
            if (nextx<0 || nextx>=m || nexty<0 || nexty>=n) continue;
            if (!f[nextx][nexty] && canmove(nextx,nexty)) dfs(nextx,nexty);
        }
    }
    dfs(0,0);
    return count;
};