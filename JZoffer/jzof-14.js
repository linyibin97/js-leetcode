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

var cuttingRope = function(n) {
    if (n<=3) return n-1;
    let a = Math.floor(n / 3), b = n % 3;
    if (b===0) return Math.pow(3,a);
    else if (b===1) return Math.pow(3,a-1)*4;
    else return Math.pow(3,a)*2;
};