/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    let ret=[];
    const max = Math.pow(10,n);
    for (let i=1;i<max;i++) ret.push(i);
    return ret;
};