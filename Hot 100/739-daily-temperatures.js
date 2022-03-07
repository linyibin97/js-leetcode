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


var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    let s = []
    let ret = new Array(n).fill(0)
    temperatures.forEach((t,i)=>{
        while (s.length>0 && t>temperatures[s[s.length-1]]) {
            let j = s.pop()
            ret[j] = i-j
        }
        s.push(i)
    })
    return ret
};