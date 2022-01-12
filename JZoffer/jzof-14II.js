/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    const pow = function(n,a) {
        let ret = 1;
        for (let i=0;i<a;i++)
            ret = ret * a % (1e9+7);
        return ret;
    }
    if (n<=3) return n-1;
    let a = Math.floor(n / 3), b = n % 3;
    if (b===0) return pow(3,a) % 1e9+7;
    else if (b===1) return pow(3,a-1)*4 % 1e9+7;
    else return pow(3,a)*2 % 1e9+7;
};