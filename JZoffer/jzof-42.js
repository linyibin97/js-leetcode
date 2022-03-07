/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const n = nums.length;
    let f = new Array(n).fill(0);
    f[0] = nums[0];
    let ret = f[0];
    for (let i=1;i<nums.length;i++) {
        f[i] = Math.max(f[i-1] + nums[i], nums[i]);
        ret = Math.max(ret,f[i]);
    }
    return ret;
}