/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let f = new Array(n+1).fill(0);
    f[0] = 1;
    f[1] = 1;
    for (let i=2;i<=n;i++) {
        for (let j=0;j<i;j++) 
            f[i] = f[i] + f[j]*f[i-j-1];
    }
    return f[n];
};