/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let n = prices.length;
    let f = new Array(n).fill(0);
    let fmax = new Array(n).fill(0);
    f[-1] = 0;
    f[-2] = 0;
    fmax[-1] = 0;
    fmax[-2] = 0;
    for (let i=0;i<n;i++) {
        for (let j=i;j>=0;j--) {
            f[i] = Math.max(f[i],fmax[j-2]+prices[i]-prices[j]);
        }
        fmax[i] = Math.max(fmax[i-1], f[i]);
    }
    return(fmax[n-1]);
};