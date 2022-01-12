/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = Infinity;
    let result = 0;
    for (let i=0;i<prices.length;i++) {
        if (prices[i]<min) min=prices[i];
        result = Math.max(prices[i]-min,result);
    }
    return result;
};