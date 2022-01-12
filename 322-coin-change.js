/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let f = new Array(amount+1).fill(-1);
    f[0] = 0;
    for (let i=1;i<=amount;i++) {
        for (let j of coins) {
            if (i-j>=0 && f[i-j]!==-1) {
                if (f[i]===-1) f[i]=f[i-j]+1;
                    else f[i] = Math.min(f[i],f[i-j]+1);
            }
        }
    }
    return f[amount];
};