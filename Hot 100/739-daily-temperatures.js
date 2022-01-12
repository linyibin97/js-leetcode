/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let stack = [];
    const n = temperatures.length;
    let ret = new Array(n).fill(0);
    for (let i=0; i<n; i++) {
        while (stack.length>0 && stack[stack.length-1][0]<temperatures[i]) {
            let [v,j] = stack.pop();
            ret[j] = i-j;
        }
        stack.push([temperatures[i],i]);
    }
    return ret;
};