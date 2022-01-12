/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n<2) return 1;
    let f1 = 1;
    let f2 = 1;
    for (let i=2;i<=n;i++) [f1,f2] = [f2,f1+f2];
    return f2;
};