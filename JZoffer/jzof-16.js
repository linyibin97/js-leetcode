/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let ret = 1;
    if (x===1) return 1;
    if (n>0) {
        while (n>0) {
            if ((n & 1)===1) ret = ret * x;
            x = x * x;
            n = n >>> 1;
        }
    } else if (n<0) {
        n = -n;
        while (n>0) {
            if ((n & 1)===1) ret = ret * x;
            x = x * x;
            n = n >>> 1;
        }
        ret = 1 / ret;
    }
    return ret;
};