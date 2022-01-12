/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const n = nums.length;
    let result = 0;
    let f = new Array(n).fill(0);
    for (let i=0;i<n;i++) {
        f[i] = 1;
        for (let j=i-1;j>=0;j--) 
            if (nums[j]<nums[i]) 
                f[i] = Math.max(f[i],f[j]+1);
        result = Math.max(result,f[i])
    }
    return(result);
}