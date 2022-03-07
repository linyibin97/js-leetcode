/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    let f = Array.from(new Array(n), ()=>new Array(3).fill(0))
    f[0][0] = -prices[0]
    f[0][1] = 0
    f[0][2] = 0
    for (let i=1; i<n; i++) {
        f[i][0] = Math.max(f[i-1][0], f[i-1][2]-prices[i])
        f[i][1] = f[i-1][0] + prices[i]
        f[i][2] = Math.max(f[i-1][2], f[i-1][1])
    }
    return Math.max(...f[n-1])
};