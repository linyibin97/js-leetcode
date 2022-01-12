/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const n = board.length;
    const m = board[0].length;
    const next = [[1,0],[-1,0],[0,1],[0,-1]]
    let f = Array.from(new Array(n),()=>new Array(m).fill(false));
    let result = false;
    const dfs = function(x,y,l) {
        if (result) return;
        if (l===word.length-1) {
            result = true;
            return;
        }
        for (let i=0;i<4;i++) {
            let nextx = x+next[i][0], nexty = y+next[i][1];
            if (nextx>=0 && nextx<n && nexty>=0 && nexty<m) {
                if (!f[nextx][nexty] && board[nextx][nexty]===word[l+1]) {
                    f[nextx][nexty] = true;
                    dfs(nextx,nexty,l+1);
                    f[nextx][nexty] = false;
                }
            }
        }
            
    }
    for (let i=0;i<n;i++) 
        for (let j=0;j<m;j++)
            if (board[i][j]===word[0]) {
                f[i][j] = true;
                dfs(i,j,0);
                f[i][j] = false;
            }
    return result;
};