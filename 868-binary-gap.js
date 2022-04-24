/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary = n.toString(2)
    let prev = binary.indexOf('1')
    if (prev==-1) return 0
    let res = 0
    for (let i=prev+1; i<binary.length; i++) {
        if (binary[i]=='0') continue
        res = Math.max(res, i-prev)
        prev = i
    }
    return res
};
console.log(binaryGap(8))