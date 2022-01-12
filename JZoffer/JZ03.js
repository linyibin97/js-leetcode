/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    const n = nums.length;
    for (let num of nums) {
        nums[num % n] += n;
    }
    for (let i=0; i<n; i++)
        if (nums[i]>=2*n) return i;
};