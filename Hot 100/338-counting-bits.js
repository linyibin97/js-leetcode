/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let i = 0;
    let f = new Array(n+1).fill(0);
    for (i=1;i<=n;i++) {
        let count = 0;
        let j = i;
        while (j>0) {
            if (f[j]!==0) {
                count+=f[j];
                break;
            }
            if ((j&1)===1) count++; 
            j = j >> 1;
        }
        f[i] = count;
    }
    return f;
};


var countBits = function(n) {
    const ret = [0]
    for (let i=1; i<=n; i++) {
        ret.push(ret[i>>1] + (i & 1) )
    }
    return ret
};