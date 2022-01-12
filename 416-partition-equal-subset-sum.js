/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    const n = nums.length;
    if (n===1) return false;
    let sum = nums.reduce((p,c)=>(p+c));
    if ((sum & 1)===1) return false;
    let target = sum >> 1;
    let f = Array.from(new Array(n),()=>new Array(target+1).fill(false));
    for (let i=0;i<n;i++) {
        f[i][0] = true;
        if (nums[i]>target) return false;
    }
    if (nums[0]>target) return false; 
    f[0][nums[0]] = true;
    for (let i=1;i<n;i++) {
        for (let j=0;j<=target;j++) {
            f[i][j] = f[i-1][j] || f[i][j];
            if (j-nums[i]>=0) f[i][j] = f[i-1][j-nums[i]] || f[i][j];
        }
        if (f[i][target]) return true;
    }
    return f[n-1][target]; 
};