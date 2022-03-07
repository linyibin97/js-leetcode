/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const n = nums.length
    let rmin = new Array(n)
    let lmax = new Array(n)
    rmin[n] = Infinity
    lmax[-1] = -Infinity
    for (let i=0; i<n; i++) {
        rmin[n-i-1] = Math.min(nums[n-i-1],rmin[n-i]) 
        lmax[i] = Math.max(nums[i],lmax[i-1])
    }
    let i = 0, j = n-1
    while (i<n && nums[i]<=rmin[i+1] && nums[i]>=lmax[i-1]) i++
    while (j>=i && nums[j]<=rmin[j+1] && nums[j]>=lmax[j-1]) j--
    return j-i+1
};