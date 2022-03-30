/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const n = nums.length;
    let f = new Array(n).fill(0);
    let result = nums[0];
    for (let i=0;i<n;i++){
        f[i] = nums[i];
        for (let j=0;j<i-1;j++) 
            f[i] = Math.max(f[i],nums[i]+f[j]);
        result = Math.max(result,f[i]);
    }
    return result;
};

 var rob = function(nums) {
    const n = nums.length;
    let f = new Array(n).fill(0);
    f[0] = nums[0];
    if (n>1) f[1] = Math.max(nums[0],nums[1])
    for (let i=2;i<n;i++){
        f[i] = Math.max(nums[i]+f[i-2],f[i-1]);
    }
    return f[n-1];
};