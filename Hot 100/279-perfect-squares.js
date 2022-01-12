/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    let nums = [];
    let f = new Array(n+1).fill(Infinity);
    for (let i=1;Math.pow(i,2)<=n;i++) {
        nums.push(Math.pow(i,2));
    }
    f[0] = 0;
    for (let i=1;i<=n;i++) 
        for (let j=0;j<nums.length;j++)
            if (i-nums[j]>=0) {
                f[i] = Math.min(f[i],f[i-nums[j]]+1);
            }
    return f[n];
};
