/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let min = Infinity, max = -Infinity
    for (let num of nums) {
        min = Math.min(num, min)
        max = Math.max(num, max)
    }
    return Math.max(0, max-min-2*k)
};