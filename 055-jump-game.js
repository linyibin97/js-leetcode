/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    const n = nums.length;
    let f = new Array(n).fill(false);
    f[0] = true;
    for (let i=0;i<n-1;i++) {
        for (let j=0;j<=nums[i];j++) {
            if (i+j>=n) break;
            f[i+j] = f[i];
        }
    }
    return f[n-1];
};

 var canJump = function(nums) {
    const n = nums.length;
    l = 0;
    for (let i=0;i<n-1;i++) {
        if (i>l) break;
        l = Math.max(l,nums[i]+i);
    }
    return l>=n-1;
};