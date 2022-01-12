/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let f = new Array(nums.length).fill(-Infinity);
    f[0]=nums[0];
    let result = f[0];
    for (let i=1;i<nums.length;i++) {
      f[i] = Math.max(nums[i],f[i-1]+nums[i]);
      result = Math.max(result,f[i]);
    }
    return result;
  };