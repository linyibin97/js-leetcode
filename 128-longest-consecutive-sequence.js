/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (nums.length===0) return 0;
    let f = new Set();
    for (let i of nums) f.add(i);
    let result = 0;
    let i = 0;
    let j = 0;
    for (let k of f) {
        if (f.has(k-1)) continue;
        i = k;
        j = 0;
        while (f.has(i)) {
            i++;
            j++;
        } 
        result = Math.max(result,j);
    }
    return result;
};