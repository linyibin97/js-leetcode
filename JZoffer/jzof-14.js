/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    let f = new Array(n+1).fill(0);
    f[1] = 1;
    f[2] = 1;
    for (let i=3;i<=n;i++) 
        for (j=1;j<i;j++)
            f[i] = Math.max(f[i],j*(i-j),f[j]*(i-j));
    return f[n];
};