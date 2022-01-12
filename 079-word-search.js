/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const g = [[-1,0],[1,0],[0,-1],[0,1]];
    let f = Array.from(new Array(m),()=>new Array(n).fill(true));
    let result = false;
    const search = function (x,y,s) {
        if (result) return;
        if (s.length===0) {
            result = true;
            return;
        }
        for (let [i,j] of g) {
            if (x+i<m && x+i>=0 && y+j<n && y+j>=0)
                if (f[x+i][y+j] && board[x+i][y+j]===s[s.length-1]) {
                    f[x+i][y+j] = false;
                    s.pop();
                    search(x+i,y+j,s);
                    s.push(board[x+i][y+j]);
                    f[x+i][y+j] = true;
                }
        }
    }
    let ws = Array.from(word);
    for (let i=0;i<m;i++) 
        for (let j=0;j<n;j++) 
            if (board[i][j]===ws[ws.length-1]) {
                f[i][j] = false;
                ws.pop();
                search(i,j,ws);
                ws.push(board[i][j]);
                f[i][j] = true;
            }
    return result;
};