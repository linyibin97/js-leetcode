/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
    const ret = []
    const dfs = (m)=> {
        if (m>n) return
        ret.push(m)
        for (let i=0; i<10; i++) {
            dfs(m*10+i)
        }
    }
    for (let i=1; i<=9; i++) {
        dfs(i)
    }
    return ret
};