/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    const n = nums.length;
    let rmin = new Array(n+1).fill(0);
    let lmax = new Array(n).fill(0);
    rmin[n] = Infinity;
    lmax[-1] = -Infinity;
    for (let i=0;i<n;i++) {
        lmax[i] = Math.max(lmax[i-1],nums[i]);
        rmin[n-i-1] = Math.min(rmin[n-i],nums[n-i-1]);
    }
    let i = 0;
    while (i<n) {
        if (nums[i]<lmax[i-1] || nums[i]>rmin[i+1]) break;
        i++;
    }
    let j = n-1;
    while (j>=0) {
        if (nums[j]<lmax[j-1] || nums[j]>rmin[j+1]) break;
        j--;
    }
    if (i<j) return j-i+1; else return 0;
};